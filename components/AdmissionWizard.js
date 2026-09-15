import React, { useState, useEffect, useRef } from 'react';

const GOLD = 'var(--accent-gold)';

// Basic Icons for Wizard
const WIcons = {
  check: (size = 16) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>,
  image: (size = 24) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
};

const Input = ({ label, required, ...props }) => (
  <div style={{ marginBottom: 12 }}>
    <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: 4 }}>
      {label} {required && <span style={{ color: 'var(--color-danger)' }}>*</span>}
    </label>
    <input
      required={required}
      style={{
        width: '100%', padding: '10px 14px', background: 'var(--input-bg)',
        border: '1px solid var(--border-color)', borderRadius: 10, color: 'var(--text-primary)',
        fontSize: '0.9rem'
      }}
      {...props}
    />
  </div>
);

const Select = ({ label, required, children, ...props }) => (
  <div style={{ marginBottom: 12 }}>
    <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: 4 }}>
      {label} {required && <span style={{ color: 'var(--color-danger)' }}>*</span>}
    </label>
    <select
      required={required}
      style={{
        width: '100%', padding: '10px 14px', background: 'var(--input-bg)',
        border: '1px solid var(--border-color)', borderRadius: 10, color: 'var(--text-primary)',
        fontSize: '0.9rem'
      }}
      {...props}
    >
      {children}
    </select>
  </div>
);

const Checkbox = ({ label, checked, onChange, required }) => (
  <label style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', marginBottom: 12 }}>
    <input type="checkbox" checked={checked} onChange={onChange} required={required} style={{ width: 18, height: 18, accentColor: GOLD }} />
    <span style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>{label} {required && '*'}</span>
  </label>
);

export default function AdmissionWizard({ onCancel, onSubmit, availableCourses }) {
  const [step, setStep] = useState(1);
  const [compressing, setCompressing] = useState(false);
  const [compressProgress, setCompressProgress] = useState(0);

  const [formData, setFormData] = useState({
    student_first_name: '', student_last_name: '', student_urdu_name: '',
    student_dob: '', student_gender: 'Male', nationality: 'Pakistani',
    student_b_form: '', mother_tongue: 'Urdu', blood_group: '',
    father_name: '', father_urdu_name: '', father_cnic: '', father_occupation: '', father_income: '',
    mother_name: '', mother_cnic: '', relation_with_guardian: 'Father',
    current_address: '', permanent_address: '', primary_mobile: '', secondary_mobile: '', email: '',
    previous_school_name: '', previous_class: '', previous_marks: '',
    course_type: 'hifz', desired_course: '', is_hafiz: false, hostel_requirement: 'Day Scholar',
    chronic_illness: '', allergies: '', physical_disabilities: '', regular_medication: '',
    docs: { bform: false, fcnic: false, photos: false, schoolLeaving: false, resultCard: false, agreement: false }
  });

  const [photoBlob, setPhotoBlob] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);

  // Load from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('faiq_admission_draft');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.student_first_name !== undefined) setFormData(parsed);
      } catch (e) {}
    }
  }, []);

  // Save to local storage on change
  useEffect(() => {
    localStorage.setItem('faiq_admission_draft', JSON.stringify(formData));
  }, [formData]);

  const updateForm = (key, val) => setFormData(p => ({ ...p, [key]: val }));

  // Image resizing logic (Client-side HTML5 Canvas)
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setCompressing(true);
    setCompressProgress(10);
    
    const reader = new FileReader();
    reader.onload = (ev) => {
      setCompressProgress(30);
      const img = new Image();
      img.onload = () => {
        setCompressProgress(50);
        const canvas = document.createElement('canvas');
        const MAX_WIDTH = 800;
        const MAX_HEIGHT = 800;
        let width = img.width;
        let height = img.height;

        if (width > height && width > MAX_WIDTH) {
          height *= MAX_WIDTH / width;
          width = MAX_WIDTH;
        } else if (height > MAX_HEIGHT) {
          width *= MAX_HEIGHT / height;
          height = MAX_HEIGHT;
        }
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        setCompressProgress(80);
        canvas.toBlob((blob) => {
          setPhotoBlob(blob);
          setPhotoPreview(URL.createObjectURL(blob));
          setCompressProgress(100);
          setTimeout(() => setCompressing(false), 500);
        }, 'image/jpeg', 0.8);
      };
      img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
  };

  const steps = [
    { title: 'Personal Info', desc: 'Student Details' },
    { title: 'Guardian', desc: 'Family Details' },
    { title: 'Contact', desc: 'Address & Phone' },
    { title: 'Academic', desc: 'Previous School' },
    { title: 'Madrasa', desc: 'Program Choice' },
    { title: 'Medical', desc: 'Health Info' },
    { title: 'Documents', desc: 'Verification' },
  ];

  const handleNext = (e) => {
    e.preventDefault();
    if (step < 7) setStep(s => s + 1);
    else {
      onSubmit(formData, photoBlob);
      localStorage.removeItem('faiq_admission_draft');
    }
  };

  return (
    <div style={{ background: 'var(--card-bg)', borderRadius: 20, border: '1px solid var(--border-color)', overflow: 'hidden' }}>
      
      {/* Wizard Header / Steps Indicator */}
      <div style={{ padding: '24px 30px', background: 'var(--bg-header)', borderBottom: '1px solid var(--border-light)', display: 'flex', gap: 10, overflowX: 'auto' }}>
        {steps.map((s, idx) => {
          const isActive = step === idx + 1;
          const isPassed = step > idx + 1;
          return (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 10, opacity: isActive || isPassed ? 1 : 0.4, flexShrink: 0 }}>
              <div style={{
                width: 30, height: 30, borderRadius: 15, display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: isPassed ? 'var(--color-success)' : (isActive ? GOLD : 'var(--border-color)'),
                color: (isActive || isPassed) ? '#fff' : 'var(--text-primary)', fontSize: '0.85rem', fontWeight: 800
              }}>
                {isPassed ? WIcons.check(16) : idx + 1}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: isActive ? GOLD : 'var(--text-primary)' }}>{s.title}</span>
                <span style={{ fontSize: '0.65rem', color: 'var(--text-tertiary)' }}>{s.desc}</span>
              </div>
              {idx < steps.length - 1 && <div style={{ width: 20, height: 2, background: 'var(--border-color)', margin: '0 10px' }} />}
            </div>
          );
        })}
      </div>

      <form onSubmit={handleNext} style={{ padding: 30 }}>
        
        {/* Step 1: Personal */}
        {step === 1 && (
          <div style={{ animation: 'fadeIn 0.3s' }}>
            <h3 style={{ marginTop: 0, marginBottom: 20, color: GOLD }}>1. Student's Personal Information (طالب علم کی ذاتی معلومات)</h3>
            
            <div style={{ display: 'flex', gap: 20, marginBottom: 20, flexWrap: 'wrap' }}>
              <div style={{ width: 120, height: 140, background: 'var(--input-bg)', borderRadius: 12, border: '2px dashed var(--border-color)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative' }}>
                {photoPreview ? (
                  <img src={photoPreview} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <>
                    {WIcons.image(32)}
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: 8, textAlign: 'center', padding: '0 10px' }}>Passport Photo</span>
                  </>
                )}
                <input type="file" accept="image/*" onChange={handlePhotoUpload} style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer' }} />
              </div>
              
              <div style={{ flex: 1, minWidth: 200, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                {compressing && (
                  <div style={{ width: '100%', background: 'var(--border-color)', borderRadius: 4, height: 8, overflow: 'hidden', marginTop: 10 }}>
                    <div style={{ width: `${compressProgress}%`, height: '100%', background: GOLD, transition: 'width 0.2s' }} />
                  </div>
                )}
                {compressing && <div style={{ fontSize: '0.7rem', color: GOLD, marginTop: 4 }}>Optimizing Image...</div>}
                {!compressing && photoBlob && <div style={{ fontSize: '0.75rem', color: 'var(--color-success)', marginTop: 4 }}>Image optimized to {(photoBlob.size / 1024).toFixed(1)} KB</div>}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }}>
              <Input label="First Name (English)" value={formData.student_first_name} onChange={e => updateForm('student_first_name', e.target.value)} required />
              <Input label="Last Name (English)" value={formData.student_last_name} onChange={e => updateForm('student_last_name', e.target.value)} required />
              <Input label="Full Name (Urdu) - نام طالب علم" value={formData.student_urdu_name} onChange={e => updateForm('student_urdu_name', e.target.value)} dir="rtl" />
              <Select label="Gender" value={formData.student_gender} onChange={e => updateForm('student_gender', e.target.value)}>
                <option>Male</option><option>Female</option>
              </Select>
              <Input label="Date of Birth (DD/MM/YYYY)" type="date" value={formData.student_dob} onChange={e => updateForm('student_dob', e.target.value)} required />
              <Input label="B-Form / CNIC Number" value={formData.student_b_form} onChange={e => updateForm('student_b_form', e.target.value)} required placeholder="35202-1234567-1" />
              <Select label="Mother Tongue" value={formData.mother_tongue} onChange={e => updateForm('mother_tongue', e.target.value)}>
                <option>Urdu</option><option>Punjabi</option><option>Saraiki</option><option>Pashto</option><option>Sindhi</option><option>Balochi</option><option>Other</option>
              </Select>
              <Input label="Blood Group" value={formData.blood_group} onChange={e => updateForm('blood_group', e.target.value)} placeholder="e.g. O+, A-, B+" />
            </div>
          </div>
        )}

        {/* Step 2: Guardian */}
        {step === 2 && (
          <div style={{ animation: 'fadeIn 0.3s' }}>
            <h3 style={{ marginTop: 0, marginBottom: 20, color: GOLD }}>2. Family & Guardian Details</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }}>
              <Input label="Father's Name (English)" value={formData.father_name} onChange={e => updateForm('father_name', e.target.value)} required />
              <Input label="Father's Name (Urdu) - والد کا نام" value={formData.father_urdu_name} onChange={e => updateForm('father_urdu_name', e.target.value)} dir="rtl" />
              <Input label="Father's CNIC Number" value={formData.father_cnic} onChange={e => updateForm('father_cnic', e.target.value)} required />
              <Input label="Father's Occupation" value={formData.father_occupation} onChange={e => updateForm('father_occupation', e.target.value)} required />
              <Input label="Father's Monthly Income" type="number" value={formData.father_income} onChange={e => updateForm('father_income', e.target.value)} />
              <Select label="Relationship with Guardian" value={formData.relation_with_guardian} onChange={e => updateForm('relation_with_guardian', e.target.value)}>
                <option>Father</option><option>Mother</option><option>Uncle</option><option>Grandfather</option><option>Brother</option><option>Other</option>
              </Select>
              <Input label="Mother's Name (Optional)" value={formData.mother_name} onChange={e => updateForm('mother_name', e.target.value)} />
              <Input label="Mother's CNIC Number (Optional)" value={formData.mother_cnic} onChange={e => updateForm('mother_cnic', e.target.value)} />
            </div>
          </div>
        )}

        {/* Step 3: Contact */}
        {step === 3 && (
          <div style={{ animation: 'fadeIn 0.3s' }}>
            <h3 style={{ marginTop: 0, marginBottom: 20, color: GOLD }}>3. Contact & Address Information (رابطہ کی تفصیلات)</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0 16px' }}>
              <Input label="Current Residential Address" value={formData.current_address} onChange={e => updateForm('current_address', e.target.value)} required placeholder="House, Street, Area, City" />
              <Input label="Permanent Address" value={formData.permanent_address} onChange={e => updateForm('permanent_address', e.target.value)} placeholder="If different from current address" />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }}>
              <Input label="Primary Mobile Number (WhatsApp)" value={formData.primary_mobile} onChange={e => updateForm('primary_mobile', e.target.value)} required />
              <Input label="Emergency Contact (Secondary)" value={formData.secondary_mobile} onChange={e => updateForm('secondary_mobile', e.target.value)} />
              <Input label="Email Address" type="email" value={formData.email} onChange={e => updateForm('email', e.target.value)} />
            </div>
          </div>
        )}

        {/* Step 4: Academic */}
        {step === 4 && (
          <div style={{ animation: 'fadeIn 0.3s' }}>
            <h3 style={{ marginTop: 0, marginBottom: 20, color: GOLD }}>4. Previous Educational History (سابقہ تعلیمی ریکارڈ)</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }}>
              <Input label="Previous School / Madrasa Name" value={formData.previous_school_name} onChange={e => updateForm('previous_school_name', e.target.value)} />
              <Input label="Class/Grade Last Attended" value={formData.previous_class} onChange={e => updateForm('previous_class', e.target.value)} />
              <Input label="Marks/Percentage Obtained" value={formData.previous_marks} onChange={e => updateForm('previous_marks', e.target.value)} />
            </div>
          </div>
        )}

        {/* Step 5: Madrasa Specific */}
        {step === 5 && (
          <div style={{ animation: 'fadeIn 0.3s' }}>
            <h3 style={{ marginTop: 0, marginBottom: 20, color: GOLD }}>5. Madrasa-Specific Information (مدرسہ کی مخصوص معلومات)</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }}>
              <Select label="Course Applied For" value={formData.desired_course} onChange={e => {
                const selected = availableCourses?.find(c => c.course_name === e.target.value);
                updateForm('desired_course', e.target.value);
                updateForm('course_type', selected ? selected.course_type : 'hifz');
              }} required>
                <option value="">-- Select Course --</option>
                {availableCourses?.map(c => (
                  <option key={c.id} value={c.course_name}>{c.course_name}</option>
                ))}
              </Select>
              
              <Select label="Is Hafiz?" value={formData.is_hafiz ? 'Yes' : 'No'} onChange={e => updateForm('is_hafiz', e.target.value === 'Yes')}>
                <option>No</option><option>Yes</option>
              </Select>
              
              <Select label="Hostel / Boarding Requirement (رہائش)" value={formData.hostel_requirement} onChange={e => updateForm('hostel_requirement', e.target.value)}>
                <option>Day Scholar (روزانہ آنے والے)</option>
                <option>Boarder (رہائشی)</option>
              </Select>
            </div>
          </div>
        )}

        {/* Step 6: Medical */}
        {step === 6 && (
          <div style={{ animation: 'fadeIn 0.3s' }}>
            <h3 style={{ marginTop: 0, marginBottom: 20, color: GOLD }}>6. Medical & Health Information (طبی معلومات)</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }}>
              <Input label="Any Chronic Illness / Disease" value={formData.chronic_illness} onChange={e => updateForm('chronic_illness', e.target.value)} placeholder="e.g. Asthma, Diabetes" />
              <Input label="Allergies" value={formData.allergies} onChange={e => updateForm('allergies', e.target.value)} placeholder="e.g. specific medicines or foods" />
              <Input label="Physical Disabilities" value={formData.physical_disabilities} onChange={e => updateForm('physical_disabilities', e.target.value)} placeholder="Any special needs" />
              <Input label="Regular Medication" value={formData.regular_medication} onChange={e => updateForm('regular_medication', e.target.value)} />
            </div>
          </div>
        )}

        {/* Step 7: Docs & Finish */}
        {step === 7 && (
          <div style={{ animation: 'fadeIn 0.3s' }}>
            <h3 style={{ marginTop: 0, marginBottom: 20, color: GOLD }}>7. Required Documents Checklist (ضروری دستاویزات)</h3>
            <div style={{ display: 'grid', gap: 4, marginBottom: 20, padding: 16, background: 'var(--input-bg)', borderRadius: 12 }}>
              <Checkbox label="Copy of Student's B-Form" checked={formData.docs.bform} onChange={e => updateForm('docs', { ...formData.docs, bform: e.target.checked })} />
              <Checkbox label="Copy of Father's/Guardian's CNIC" checked={formData.docs.fcnic} onChange={e => updateForm('docs', { ...formData.docs, fcnic: e.target.checked })} />
              <Checkbox label="Passport Size Photographs (2-4)" checked={formData.docs.photos} onChange={e => updateForm('docs', { ...formData.docs, photos: e.target.checked })} />
              <Checkbox label="School Leaving Certificate (Original)" checked={formData.docs.schoolLeaving} onChange={e => updateForm('docs', { ...formData.docs, schoolLeaving: e.target.checked })} />
              <Checkbox label="Previous Result Card" checked={formData.docs.resultCard} onChange={e => updateForm('docs', { ...formData.docs, resultCard: e.target.checked })} />
            </div>
            
            <div style={{ padding: 16, borderLeft: `4px solid ${GOLD}`, background: `${GOLD}15`, borderRadius: '0 12px 12px 0' }}>
              <Checkbox 
                label="I declare that the information provided is true and correct, and I agree to abide by the rules of Al-Faiq Education System." 
                checked={formData.docs.agreement} 
                onChange={e => updateForm('docs', { ...formData.docs, agreement: e.target.checked })} 
                required 
              />
            </div>
          </div>
        )}

        {/* Footer Buttons */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 30, paddingTop: 20, borderTop: '1px solid var(--border-light)' }}>
          <div>
            {step === 1 ? (
              <button type="button" onClick={onCancel} style={{ padding: '10px 20px', borderRadius: 10, background: 'var(--card-bg-hover)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', fontWeight: 600, cursor: 'pointer' }}>
                Cancel
              </button>
            ) : (
              <button type="button" onClick={() => setStep(s => s - 1)} style={{ padding: '10px 20px', borderRadius: 10, background: 'var(--card-bg-hover)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', fontWeight: 600, cursor: 'pointer' }}>
                &larr; Back
              </button>
            )}
          </div>
          <button type="submit" style={{ padding: '10px 24px', borderRadius: 10, background: `linear-gradient(135deg, ${GOLD}, #e09800)`, color: 'var(--bg-color)', border: 'none', fontWeight: 800, cursor: 'pointer' }}>
            {step === 7 ? 'Submit Application' : 'Next Step \u2192'}
          </button>
        </div>

      </form>
    </div>
  );
}
