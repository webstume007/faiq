/**
 * Comprehensive Quran Data & Helpers
 * Contains all 114 Surahs, 30 Paras (Juz), and helpers for Hifz tracking.
 */

export const QURAN_SURAHS = [
  { number: 1, name_arabic: "الفاتحة", name_english: "Al-Fatihah", name_urdu: "الفاتحہ", ayahs: 7, type: "Meccan", para_start: 1, para_end: 1 },
  { number: 2, name_arabic: "البقرة", name_english: "Al-Baqarah", name_urdu: "البقرۃ", ayahs: 286, type: "Medinan", para_start: 1, para_end: 3 },
  { number: 3, name_arabic: "آل عمران", name_english: "Ali 'Imran", name_urdu: "آل عمران", ayahs: 200, type: "Medinan", para_start: 3, para_end: 4 },
  { number: 4, name_arabic: "النساء", name_english: "An-Nisa", name_urdu: "النساء", ayahs: 176, type: "Medinan", para_start: 4, para_end: 6 },
  { number: 5, name_arabic: "المائدة", name_english: "Al-Ma'idah", name_urdu: "المائدۃ", ayahs: 120, type: "Medinan", para_start: 6, para_end: 7 },
  { number: 6, name_arabic: "الأنعام", name_english: "Al-An'am", name_urdu: "الانعام", ayahs: 165, type: "Meccan", para_start: 7, para_end: 8 },
  { number: 7, name_arabic: "الأعراف", name_english: "Al-A'raf", name_urdu: "الاعراف", ayahs: 206, type: "Meccan", para_start: 8, para_end: 9 },
  { number: 8, name_arabic: "الأنفال", name_english: "Al-Anfal", name_urdu: "الانفال", ayahs: 75, type: "Medinan", para_start: 9, para_end: 10 },
  { number: 9, name_arabic: "التوبة", name_english: "At-Tawbah", name_urdu: "التوبۃ", ayahs: 129, type: "Medinan", para_start: 10, para_end: 11 },
  { number: 10, name_arabic: "يونس", name_english: "Yunus", name_urdu: "یونس", ayahs: 109, type: "Meccan", para_start: 11, para_end: 11 },
  { number: 11, name_arabic: "هود", name_english: "Hud", name_urdu: "ہود", ayahs: 123, type: "Meccan", para_start: 11, para_end: 12 },
  { number: 12, name_arabic: "يوسف", name_english: "Yusuf", name_urdu: "یوسف", ayahs: 111, type: "Meccan", para_start: 12, para_end: 13 },
  { number: 13, name_arabic: "الرعد", name_english: "Ar-Ra'd", name_urdu: "الرعد", ayahs: 43, type: "Medinan", para_start: 13, para_end: 13 },
  { number: 14, name_arabic: "إبراهيم", name_english: "Ibrahim", name_urdu: "ابراہیم", ayahs: 52, type: "Meccan", para_start: 13, para_end: 13 },
  { number: 15, name_arabic: "الحجر", name_english: "Al-Hijr", name_urdu: "الحجر", ayahs: 99, type: "Meccan", para_start: 14, para_end: 14 },
  { number: 16, name_arabic: "النحل", name_english: "An-Nahl", name_urdu: "النحل", ayahs: 128, type: "Meccan", para_start: 14, para_end: 14 },
  { number: 17, name_arabic: "الإسراء", name_english: "Al-Isra", name_urdu: "الاسراء", ayahs: 111, type: "Meccan", para_start: 15, para_end: 15 },
  { number: 18, name_arabic: "الكهف", name_english: "Al-Kahf", name_urdu: "الکہف", ayahs: 110, type: "Meccan", para_start: 15, para_end: 16 },
  { number: 19, name_arabic: "مريم", name_english: "Maryam", name_urdu: "مریم", ayahs: 98, type: "Meccan", para_start: 16, para_end: 16 },
  { number: 20, name_arabic: "طه", name_english: "Taha", name_urdu: "طٰہٰ", ayahs: 135, type: "Meccan", para_start: 16, para_end: 16 },
  { number: 21, name_arabic: "الأنبياء", name_english: "Al-Anbiya", name_urdu: "الانبیاء", ayahs: 112, type: "Meccan", para_start: 17, para_end: 17 },
  { number: 22, name_arabic: "الحج", name_english: "Al-Hajj", name_urdu: "الحج", ayahs: 78, type: "Medinan", para_start: 17, para_end: 17 },
  { number: 23, name_arabic: "المؤمنون", name_english: "Al-Mu'minun", name_urdu: "المؤمنون", ayahs: 118, type: "Meccan", para_start: 18, para_end: 18 },
  { number: 24, name_arabic: "النور", name_english: "An-Nur", name_urdu: "النور", ayahs: 64, type: "Medinan", para_start: 18, para_end: 18 },
  { number: 25, name_arabic: "الفرقان", name_english: "Al-Furqan", name_urdu: "الفرقان", ayahs: 77, type: "Meccan", para_start: 18, para_end: 19 },
  { number: 26, name_arabic: "الشعراء", name_english: "Ash-Shu'ara", name_urdu: "الشعراء", ayahs: 227, type: "Meccan", para_start: 19, para_end: 19 },
  { number: 27, name_arabic: "النمل", name_english: "An-Naml", name_urdu: "النمل", ayahs: 93, type: "Meccan", para_start: 19, para_end: 20 },
  { number: 28, name_arabic: "القصص", name_english: "Al-Qasas", name_urdu: "القصص", ayahs: 88, type: "Meccan", para_start: 20, para_end: 20 },
  { number: 29, name_arabic: "العنكبوت", name_english: "Al-'Ankabut", name_urdu: "العنکبوت", ayahs: 69, type: "Meccan", para_start: 20, para_end: 21 },
  { number: 30, name_arabic: "الروم", name_english: "Ar-Rum", name_urdu: "الروم", ayahs: 60, type: "Meccan", para_start: 21, para_end: 21 },
  { number: 31, name_arabic: "لقمان", name_english: "Luqman", name_urdu: "لقمان", ayahs: 34, type: "Meccan", para_start: 21, para_end: 21 },
  { number: 32, name_arabic: "السجدة", name_english: "As-Sajdah", name_urdu: "السجدۃ", ayahs: 30, type: "Meccan", para_start: 21, para_end: 21 },
  { number: 33, name_arabic: "الأحزاب", name_english: "Al-Ahzab", name_urdu: "الاحزاب", ayahs: 73, type: "Medinan", para_start: 21, para_end: 22 },
  { number: 34, name_arabic: "سبأ", name_english: "Saba", name_urdu: "سبا", ayahs: 54, type: "Meccan", para_start: 22, para_end: 22 },
  { number: 35, name_arabic: "فاطر", name_english: "Fatir", name_urdu: "فاطر", ayahs: 45, type: "Meccan", para_start: 22, para_end: 22 },
  { number: 36, name_arabic: "يس", name_english: "Ya-Sin", name_urdu: "یٰسٓ", ayahs: 83, type: "Meccan", para_start: 22, para_end: 23 },
  { number: 37, name_arabic: "الصافات", name_english: "As-Saffat", name_urdu: "الصافات", ayahs: 182, type: "Meccan", para_start: 23, para_end: 23 },
  { number: 38, name_arabic: "ص", name_english: "Sad", name_urdu: "صٓ", ayahs: 88, type: "Meccan", para_start: 23, para_end: 23 },
  { number: 39, name_arabic: "الزمر", name_english: "Az-Zumar", name_urdu: "الزمر", ayahs: 75, type: "Meccan", para_start: 23, para_end: 24 },
  { number: 40, name_arabic: "غافر", name_english: "Ghafir", name_urdu: "المؤمن / غافر", ayahs: 85, type: "Meccan", para_start: 24, para_end: 24 },
  { number: 41, name_arabic: "فصلت", name_english: "Fussilat", name_urdu: "فصلت / حٰم السجدۃ", ayahs: 54, type: "Meccan", para_start: 24, para_end: 25 },
  { number: 42, name_arabic: "الشورى", name_english: "Ash-Shura", name_urdu: "الشوریٰ", ayahs: 53, type: "Meccan", para_start: 25, para_end: 25 },
  { number: 43, name_arabic: "الزخرف", name_english: "Az-Zukhruf", name_urdu: "الزخرف", ayahs: 89, type: "Meccan", para_start: 25, para_end: 25 },
  { number: 44, name_arabic: "الدخان", name_english: "Ad-Dukhan", name_urdu: "الدخان", ayahs: 59, type: "Meccan", para_start: 25, para_end: 25 },
  { number: 45, name_arabic: "الجاثية", name_english: "Al-Jathiyah", name_urdu: "الجاثیہ", ayahs: 37, type: "Meccan", para_start: 25, para_end: 25 },
  { number: 46, name_arabic: "الأحقاف", name_english: "Al-Ahqaf", name_urdu: "الاحقاف", ayahs: 35, type: "Meccan", para_start: 26, para_end: 26 },
  { number: 47, name_arabic: "محمد", name_english: "Muhammad", name_urdu: "محمد", ayahs: 38, type: "Medinan", para_start: 26, para_end: 26 },
  { number: 48, name_arabic: "الفتح", name_english: "Al-Fath", name_urdu: "الفتح", ayahs: 29, type: "Medinan", para_start: 26, para_end: 26 },
  { number: 49, name_arabic: "الحجرات", name_english: "Al-Hujurat", name_urdu: "الحجرات", ayahs: 18, type: "Medinan", para_start: 26, para_end: 26 },
  { number: 50, name_arabic: "ق", name_english: "Qaf", name_urdu: "قٓ", ayahs: 45, type: "Meccan", para_start: 26, para_end: 26 },
  { number: 51, name_arabic: "الذاريات", name_english: "Adh-Dhariyat", name_urdu: "الذاریات", ayahs: 60, type: "Meccan", para_start: 26, para_end: 27 },
  { number: 52, name_arabic: "الطور", name_english: "At-Tur", name_urdu: "الطور", ayahs: 49, type: "Meccan", para_start: 27, para_end: 27 },
  { number: 53, name_arabic: "النجم", name_english: "An-Najm", name_urdu: "النجم", ayahs: 62, type: "Meccan", para_start: 27, para_end: 27 },
  { number: 54, name_arabic: "القمر", name_english: "Al-Qamar", name_urdu: "القمر", ayahs: 55, type: "Meccan", para_start: 27, para_end: 27 },
  { number: 55, name_arabic: "الرحمن", name_english: "Ar-Rahman", name_urdu: "الرحمٰن", ayahs: 78, type: "Medinan", para_start: 27, para_end: 27 },
  { number: 56, name_arabic: "الواقعة", name_english: "Al-Waqi'ah", name_urdu: "الواقعہ", ayahs: 96, type: "Meccan", para_start: 27, para_end: 27 },
  { number: 57, name_arabic: "الحديد", name_english: "Al-Hadid", name_urdu: "الحدید", ayahs: 29, type: "Medinan", para_start: 27, para_end: 27 },
  { number: 58, name_arabic: "المجادلة", name_english: "Al-Mujadila", name_urdu: "المجادلہ", ayahs: 22, type: "Medinan", para_start: 28, para_end: 28 },
  { number: 59, name_arabic: "الحشر", name_english: "Al-Hashr", name_urdu: "الحشر", ayahs: 24, type: "Medinan", para_start: 28, para_end: 28 },
  { number: 60, name_arabic: "الممتحنة", name_english: "Al-Mumtahanah", name_urdu: "الممتحنہ", ayahs: 13, type: "Medinan", para_start: 28, para_end: 28 },
  { number: 61, name_arabic: "الصف", name_english: "As-Saff", name_urdu: "الصف", ayahs: 14, type: "Medinan", para_start: 28, para_end: 28 },
  { number: 62, name_arabic: "الجمعة", name_english: "Al-Jumu'ah", name_urdu: "الجمعہ", ayahs: 11, type: "Medinan", para_start: 28, para_end: 28 },
  { number: 63, name_arabic: "المنافقون", name_english: "Al-Munafiqun", name_urdu: "المنافقون", ayahs: 11, type: "Medinan", para_start: 28, para_end: 28 },
  { number: 64, name_arabic: "التغابن", name_english: "At-Taghabun", name_urdu: "التغابن", ayahs: 18, type: "Medinan", para_start: 28, para_end: 28 },
  { number: 65, name_arabic: "الطلاق", name_english: "At-Talaq", name_urdu: "الطلاق", ayahs: 12, type: "Medinan", para_start: 28, para_end: 28 },
  { number: 66, name_arabic: "التحريم", name_english: "At-Tahrim", name_urdu: "التحریم", ayahs: 12, type: "Medinan", para_start: 28, para_end: 28 },
  { number: 67, name_arabic: "الملك", name_english: "Al-Mulk", name_urdu: "الملک", ayahs: 30, type: "Meccan", para_start: 29, para_end: 29 },
  { number: 68, name_arabic: "القلم", name_english: "Al-Qalam", name_urdu: "القلم", ayahs: 52, type: "Meccan", para_start: 29, para_end: 29 },
  { number: 69, name_arabic: "الحاقة", name_english: "Al-Haqqah", name_urdu: "الحاقہ", ayahs: 52, type: "Meccan", para_start: 29, para_end: 29 },
  { number: 70, name_arabic: "المعارج", name_english: "Al-Ma'arij", name_urdu: "المعارج", ayahs: 44, type: "Meccan", para_start: 29, para_end: 29 },
  { number: 71, name_arabic: "نوح", name_english: "Nuh", name_urdu: "نوح", ayahs: 28, type: "Meccan", para_start: 29, para_end: 29 },
  { number: 72, name_arabic: "الجن", name_english: "Al-Jinn", name_urdu: "الجن", ayahs: 28, type: "Meccan", para_start: 29, para_end: 29 },
  { number: 73, name_arabic: "المزمل", name_english: "Al-Muzzammil", name_urdu: "المزمل", ayahs: 20, type: "Meccan", para_start: 29, para_end: 29 },
  { number: 74, name_arabic: "المدثر", name_english: "Al-Muddaththir", name_urdu: "المدثر", ayahs: 56, type: "Meccan", para_start: 29, para_end: 29 },
  { number: 75, name_arabic: "القيامة", name_english: "Al-Qiyamah", name_urdu: "القیامہ", ayahs: 40, type: "Meccan", para_start: 29, para_end: 29 },
  { number: 76, name_arabic: "الإنسان", name_english: "Al-Insan", name_urdu: "الدھر / الانسان", ayahs: 31, type: "Medinan", para_start: 29, para_end: 29 },
  { number: 77, name_arabic: "المرسلات", name_english: "Al-Mursalat", name_urdu: "المرسلات", ayahs: 50, type: "Meccan", para_start: 29, para_end: 29 },
  { number: 78, name_arabic: "النبأ", name_english: "An-Naba", name_urdu: "النباء / عم", ayahs: 40, type: "Meccan", para_start: 30, para_end: 30 },
  { number: 79, name_arabic: "النازعات", name_english: "An-Nazi'at", name_urdu: "النازعات", ayahs: 46, type: "Meccan", para_start: 30, para_end: 30 },
  { number: 80, name_arabic: "عبس", name_english: "'Abasa", name_urdu: "عبس", ayahs: 42, type: "Meccan", para_start: 30, para_end: 30 },
  { number: 81, name_arabic: "التكوير", name_english: "At-Takwir", name_urdu: "التکویر", ayahs: 29, type: "Meccan", para_start: 30, para_end: 30 },
  { number: 82, name_arabic: "الانفطار", name_english: "Al-Infitar", name_urdu: "الانفطار", ayahs: 19, type: "Meccan", para_start: 30, para_end: 30 },
  { number: 83, name_arabic: "المطففين", name_english: "Al-Mutaffifin", name_urdu: "المطففین", ayahs: 36, type: "Meccan", para_start: 30, para_end: 30 },
  { number: 84, name_arabic: "الانشقاق", name_english: "Al-Inshiqaq", name_urdu: "الانشقاق", ayahs: 25, type: "Meccan", para_start: 30, para_end: 30 },
  { number: 85, name_arabic: "البروج", name_english: "Al-Buruj", name_urdu: "البروج", ayahs: 22, type: "Meccan", para_start: 30, para_end: 30 },
  { number: 86, name_arabic: "الطارق", name_english: "At-Tariq", name_urdu: "الطارق", ayahs: 17, type: "Meccan", para_start: 30, para_end: 30 },
  { number: 87, name_arabic: "الأعلى", name_english: "Al-A'la", name_urdu: "الاعلیٰ", ayahs: 19, type: "Meccan", para_start: 30, para_end: 30 },
  { number: 88, name_arabic: "الغاشية", name_english: "Al-Ghashiyah", name_urdu: "الغاشیہ", ayahs: 26, type: "Meccan", para_start: 30, para_end: 30 },
  { number: 89, name_arabic: "الفجر", name_english: "Al-Fajr", name_urdu: "الفجر", ayahs: 30, type: "Meccan", para_start: 30, para_end: 30 },
  { number: 90, name_arabic: "البلد", name_english: "Al-Balad", name_urdu: "البلد", ayahs: 20, type: "Meccan", para_start: 30, para_end: 30 },
  { number: 91, name_arabic: "الشمس", name_english: "Ash-Shams", name_urdu: "الشمس", ayahs: 15, type: "Meccan", para_start: 30, para_end: 30 },
  { number: 92, name_arabic: "الليل", name_english: "Al-Layl", name_urdu: "اللیل", ayahs: 21, type: "Meccan", para_start: 30, para_end: 30 },
  { number: 93, name_arabic: "الضحى", name_english: "Ad-Duhaa", name_urdu: "الضحیٰ", ayahs: 11, type: "Meccan", para_start: 30, para_end: 30 },
  { number: 94, name_arabic: "الشرح", name_english: "Ash-Sharh", name_urdu: "الم نشرح / الانشراح", ayahs: 8, type: "Meccan", para_start: 30, para_end: 30 },
  { number: 95, name_arabic: "التين", name_english: "At-Tin", name_urdu: "التین", ayahs: 8, type: "Meccan", para_start: 30, para_end: 30 },
  { number: 96, name_arabic: "العلق", name_english: "Al-'Alaq", name_urdu: "العلق / اقرا", ayahs: 19, type: "Meccan", para_start: 30, para_end: 30 },
  { number: 97, name_arabic: "القدر", name_english: "Al-Qadr", name_urdu: "القدر", ayahs: 5, type: "Meccan", para_start: 30, para_end: 30 },
  { number: 98, name_arabic: "البينة", name_english: "Al-Bayyinah", name_urdu: "البینہ", ayahs: 8, type: "Medinan", para_start: 30, para_end: 30 },
  { number: 99, name_arabic: "الزلزلة", name_english: "Az-Zalzalah", name_urdu: "الزلزال", ayahs: 8, type: "Medinan", para_start: 30, para_end: 30 },
  { number: 100, name_arabic: "العاديات", name_english: "Al-'Adiyat", name_urdu: "العادیات", ayahs: 11, type: "Meccan", para_start: 30, para_end: 30 },
  { number: 101, name_arabic: "القارعة", name_english: "Al-Qari'ah", name_urdu: "القارعہ", ayahs: 11, type: "Meccan", para_start: 30, para_end: 30 },
  { number: 102, name_arabic: "التكاثر", name_english: "At-Takathur", name_urdu: "التکاثر", ayahs: 8, type: "Meccan", para_start: 30, para_end: 30 },
  { number: 103, name_arabic: "العصر", name_english: "Al-'Asr", name_urdu: "العصر", ayahs: 3, type: "Meccan", para_start: 30, para_end: 30 },
  { number: 104, name_arabic: "الهمزة", name_english: "Al-Humazah", name_urdu: "الہمزۃ", ayahs: 9, type: "Meccan", para_start: 30, para_end: 30 },
  { number: 105, name_arabic: "الفيل", name_english: "Al-Fil", name_urdu: "الفیل", ayahs: 5, type: "Meccan", para_start: 30, para_end: 30 },
  { number: 106, name_arabic: "قريش", name_english: "Quraysh", name_urdu: "قریش", ayahs: 4, type: "Meccan", para_start: 30, para_end: 30 },
  { number: 107, name_arabic: "الماعون", name_english: "Al-Ma'un", name_urdu: "الماعون", ayahs: 7, type: "Meccan", para_start: 30, para_end: 30 },
  { number: 108, name_arabic: "الكوثر", name_english: "Al-Kawthar", name_urdu: "الکوثر", ayahs: 3, type: "Meccan", para_start: 30, para_end: 30 },
  { number: 109, name_arabic: "الكافرون", name_english: "Al-Kafirun", name_urdu: "الکافرون", ayahs: 6, type: "Meccan", para_start: 30, para_end: 30 },
  { number: 110, name_arabic: "النصر", name_english: "An-Nasr", name_urdu: "النصر", ayahs: 3, type: "Medinan", para_start: 30, para_end: 30 },
  { number: 111, name_arabic: "المسد", name_english: "Al-Masad", name_urdu: "اللہب / المسد", ayahs: 5, type: "Meccan", para_start: 30, para_end: 30 },
  { number: 112, name_arabic: "الإخلاص", name_english: "Al-Ikhlas", name_urdu: "الاخلاص", ayahs: 4, type: "Meccan", para_start: 30, para_end: 30 },
  { number: 113, name_arabic: "الفلق", name_english: "Al-Falaq", name_urdu: "الفلق", ayahs: 5, type: "Meccan", para_start: 30, para_end: 30 },
  { number: 114, name_arabic: "الناس", name_english: "An-Nas", name_urdu: "الناس", ayahs: 6, type: "Meccan", para_start: 30, para_end: 30 },
];

export const QURAN_PARAS = [
  { number: 1, name_arabic: "الم", name_english: "Alif-Lam-Mim", start_surah: 1, start_ayah: 1, end_surah: 2, end_ayah: 141, total_rukus: 16 },
  { number: 2, name_arabic: "سَيَقُولُ", name_english: "Sayaqulu", start_surah: 2, start_ayah: 142, end_surah: 2, end_ayah: 252, total_rukus: 16 },
  { number: 3, name_arabic: "تِلْكَ الرُّسُلُ", name_english: "Tilka-r-Rusul", start_surah: 2, start_ayah: 253, end_surah: 3, end_ayah: 92, total_rukus: 20 },
  { number: 4, name_arabic: "لَنْ تَنَالُوا", name_english: "Lan Tanalu", start_surah: 3, start_ayah: 93, end_surah: 4, end_ayah: 23, total_rukus: 20 },
  { number: 5, name_arabic: "وَالْمُحْصَنَاتُ", name_english: "Wa-l-Muhsanat", start_surah: 4, start_ayah: 24, end_surah: 4, end_ayah: 147, total_rukus: 24 },
  { number: 6, name_arabic: "لَا يُحِبُّ اللَّهُ", name_english: "La Yuhibbullah", start_surah: 4, start_ayah: 148, end_surah: 5, end_ayah: 81, total_rukus: 21 },
  { number: 7, name_arabic: "وَإِذَا سَمِعُوا", name_english: "Wa Iza Sami'u", start_surah: 5, start_ayah: 82, end_surah: 6, end_ayah: 110, total_rukus: 24 },
  { number: 8, name_arabic: "وَلَوْ أَنَّنَا", name_english: "Wa Law Annana", start_surah: 6, start_ayah: 111, end_surah: 7, end_ayah: 87, total_rukus: 20 },
  { number: 9, name_arabic: "قَالَ الْمَلَأُ", name_english: "Qal-al-Mala'u", start_surah: 7, start_ayah: 88, end_surah: 8, end_ayah: 40, total_rukus: 24 },
  { number: 10, name_arabic: "وَاعْلَمُوا", name_english: "Wa'lamu", start_surah: 8, start_ayah: 41, end_surah: 9, end_ayah: 92, total_rukus: 18 },
  { number: 11, name_arabic: "يَعْتَذِرُونَ", name_english: "Ya'tazirun", start_surah: 9, start_ayah: 93, end_surah: 11, end_ayah: 5, total_rukus: 26 },
  { number: 12, name_arabic: "وَمَا مِنْ دَابَّةٍ", name_english: "Wa Ma Min Dabbah", start_surah: 11, start_ayah: 6, end_surah: 12, end_ayah: 52, total_rukus: 22 },
  { number: 13, name_arabic: "وَمَا أُبَرِّئُ", name_english: "Wa Ma Ubarri'u", start_surah: 12, start_ayah: 53, end_surah: 14, end_ayah: 52, total_rukus: 28 },
  { number: 14, name_arabic: "رُبَمَا", name_english: "Rubama", start_surah: 15, start_ayah: 1, end_surah: 16, end_ayah: 128, total_rukus: 29 },
  { number: 15, name_arabic: "سُبْحَانَ الَّذِي", name_english: "Subhana-llazi", start_surah: 17, start_ayah: 1, end_surah: 18, end_ayah: 74, total_rukus: 24 },
  { number: 16, name_arabic: "قَالَ أَلَمْ", name_english: "Qala Alam", start_surah: 18, start_ayah: 75, end_surah: 20, end_ayah: 135, total_rukus: 24 },
  { number: 17, name_arabic: "اقْتَرَبَ", name_english: "Iqtaraba", start_surah: 21, start_ayah: 1, end_surah: 22, end_ayah: 78, total_rukus: 17 },
  { number: 18, name_arabic: "قَدْ أَفْلَحَ", name_english: "Qad Aflaha", start_surah: 23, start_ayah: 1, end_surah: 25, end_ayah: 20, total_rukus: 20 },
  { number: 19, name_arabic: "وَقَالَ الَّذِينَ", name_english: "Wa Qalallazina", start_surah: 25, start_ayah: 21, end_surah: 27, end_ayah: 55, total_rukus: 30 },
  { number: 20, name_arabic: "أَمَّنْ خَلَقَ", name_english: "Amman Khalaq", start_surah: 27, start_ayah: 56, end_surah: 29, end_ayah: 45, total_rukus: 22 },
  { number: 21, name_arabic: "اتْلُ مَا أُوحِيَ", name_english: "Utlu Ma Uhiya", start_surah: 29, start_ayah: 46, end_surah: 33, end_ayah: 30, total_rukus: 29 },
  { number: 22, name_arabic: "وَمَنْ يَقْنُتْ", name_english: "Wa May-Yaqnut", start_surah: 33, start_ayah: 31, end_surah: 36, end_ayah: 27, total_rukus: 22 },
  { number: 23, name_arabic: "وَمَا لِيَ", name_english: "Wa Maliya", start_surah: 36, start_ayah: 28, end_surah: 39, end_ayah: 31, total_rukus: 27 },
  { number: 24, name_arabic: "فَمَنْ أَظْلَمُ", name_english: "Fa Man Azlamu", start_surah: 39, start_ayah: 32, end_surah: 41, end_ayah: 46, total_rukus: 29 },
  { number: 25, name_arabic: "إِلَيْهِ يُرَدُّ", name_english: "Ilayhi Yuraddu", start_surah: 41, start_ayah: 47, end_surah: 45, end_ayah: 37, total_rukus: 29 },
  { number: 26, name_arabic: "حم", name_english: "Ha-Mim", start_surah: 46, start_ayah: 1, end_surah: 51, end_ayah: 30, total_rukus: 29 },
  { number: 27, name_arabic: "قَالَ فَمَا خَطْبُكُمْ", name_english: "Qala Fama Khatbukum", start_surah: 51, start_ayah: 31, end_surah: 57, end_ayah: 29, total_rukus: 30 },
  { number: 28, name_arabic: "قَدْ سَمِعَ اللَّهُ", name_english: "Qad Sami' Allah", start_surah: 58, start_ayah: 1, end_surah: 66, end_ayah: 12, total_rukus: 22 },
  { number: 29, name_arabic: "تَبَارَكَ الَّذِي", name_english: "Tabaraka-llazi", start_surah: 67, start_ayah: 1, end_surah: 77, end_ayah: 50, total_rukus: 30 },
  { number: 30, name_arabic: "عَمَّ", name_english: "'Amma", start_surah: 78, start_ayah: 1, end_surah: 114, end_ayah: 6, total_rukus: 39 },
];

export const TOTAL_QURAN_AYAHS = 6236;
export const TOTAL_QURAN_SURAHS = 114;
export const TOTAL_QURAN_PARAS = 30;

/** Get a Surah by its number (1-114) */
export function getSurahByNumber(num) {
  return QURAN_SURAHS.find((s) => s.number === Number(num)) || null;
}

/** Get a Para by its number (1-30) */
export function getParaByNumber(num) {
  return QURAN_PARAS.find((p) => p.number === Number(num)) || null;
}

/** Format Sabaq ayah range into readable string */
export function formatAyahRange(surahStart, ayahStart, surahEnd, ayahEnd) {
  const startSurah = getSurahByNumber(surahStart);
  const endSurah = getSurahByNumber(surahEnd);

  if (!startSurah) return "—";

  if (!surahEnd || surahStart === surahEnd) {
    if (!ayahEnd || ayahStart === ayahEnd) {
      return `${startSurah.name_english} (${startSurah.name_arabic}) — Ayah ${ayahStart}`;
    }
    return `${startSurah.name_english} (${startSurah.name_arabic}) — Ayah ${ayahStart} to ${ayahEnd}`;
  }

  return `${startSurah.name_english} (Ayah ${ayahStart}) to ${endSurah?.name_english || ''} (Ayah ${ayahEnd})`;
}

/** Calculate cumulative completion stats from Hifz progress records */
export function calculateHifzProgressStats(dailyRecords = [], manzilRecords = []) {
  // Count unique paras revised in manzil
  const revisedParas = new Set((manzilRecords || []).map((r) => r.para_number));

  // Count estimated total ayahs memorized from latest sabaq
  let maxSurah = 0;
  let maxAyah = 0;
  let totalAyahsMemorized = 0;

  // If daily records are provided, find highest surah/ayah reached or sum
  if (dailyRecords && dailyRecords.length > 0) {
    const sorted = [...dailyRecords].sort((a, b) => new Date(b.date) - new Date(a.date));
    const latest = sorted[0];
    if (latest.sabaq_surah_end) {
      maxSurah = latest.sabaq_surah_end;
      maxAyah = latest.sabaq_ayah_end || 1;
    }
  }

  // Calculate ayahs up to maxSurah - 1 + maxAyah
  if (maxSurah > 0) {
    for (let i = 1; i < maxSurah; i++) {
      const s = getSurahByNumber(i);
      if (s) totalAyahsMemorized += s.ayahs;
    }
    totalAyahsMemorized += maxAyah;
  }

  const completionPercentage = Math.min(100, parseFloat(((totalAyahsMemorized / TOTAL_QURAN_AYAHS) * 100).toFixed(1)));
  const manzilPercentage = Math.min(100, parseFloat(((revisedParas.size / TOTAL_QURAN_PARAS) * 100).toFixed(1)));

  return {
    totalAyahsMemorized: Math.min(TOTAL_QURAN_AYAHS, totalAyahsMemorized),
    totalAyahs: TOTAL_QURAN_AYAHS,
    completionPercentage,
    currentSurah: getSurahByNumber(maxSurah) || QURAN_SURAHS[0],
    currentAyah: maxAyah,
    revisedParasCount: revisedParas.size,
    revisedParas: Array.from(revisedParas).sort((a, b) => a - b),
    manzilPercentage,
  };
}
