const quizQuestions = [
    {
      questionText: "Ma'lumotlar bazasi ma'lumotlarni tasvirlash shakliga qarab qanday turlarga bo'linadi?",
      answerOptions: [
        { answerText: "video, audio, matn, grafik, animatsiya", isCorrect: false },
        { answerText: "strukturalashgan, qisman strukturalashgan va strukturalashmagan", isCorrect: true },
        { answerText: "strukturalashgan, strukturalashmagan", isCorrect: false },
        { answerText: "strukturalashgan va obyektga yo'naltirilgan", isCorrect: false },
      ],
    },
    {
      questionText: "Strukturalashgan ma'lumotlar bazasida ma'lumotlar modeliga qarab necha turga bo'linadi?",
      answerOptions: [
        { answerText: "iyerarxik, tarmoqli, relyatsion", isCorrect: true },
        { answerText: "strukturalashgan, strukturalashmagan", isCorrect: false },
        { answerText: "video, audio, matn, grafik, animatsiya", isCorrect: false },
        { answerText: "strukturalashgan, qisman strukturalashgan va strukturalashmagan", isCorrect: false },
      ],
    },
    {
      questionText: "Bilimlar bazasi ta'rifini tanlang.",
      answerOptions: [
        { answerText: "ba'zi bir muammo sohada murakkab vazifalarning yechimini topish uchun tahlil va xulosalarni yaratuvchi modellar, qoidalar va omillar (ma'lumotlar)ning majmuidir", isCorrect: true },
        { answerText: "axborotni qayta ishlaydigan ixtiyoriy tizimni tushunish mumkin", isCorrect: false },
        { answerText: "Strukturalashgan so'rovlar tili", isCorrect: false },
        { answerText: "kompyuterning tashqi xotirasida saqlanadigan, har qanday jismoniy, ijtimoiy, statistik, tashkiliy va boshqa ob'ektlar, jarayonlar, holatlarning o'zaro bog'liq va tartiblashtirilgan majmuidir", isCorrect: false },
      ],
    },
    {
      questionText: "Qaysi ta'rif ma'lumotlar bazasi tushunchasiga tegishli emas?",
      answerOptions: [
        { answerText: "o'zaro bog'langan va tartiblangan ma'lumotlar majmuasi bo'lib, u ko'rilayotgan ob'ektlarning xususiyatini, holatini va ob'ektlar o'rtasidagi munosabatni ma'lum sohada tavsiflaydi", isCorrect: false },
        { answerText: "kompyuterning tashqi xotirasida saqlanadigan, har qanday jismoniy, ijtimoiy, statistik, tashkiliy va boshqa ob'ektlar, jarayonlar, holatlarning o'zaro bog'liq va tartiblashtirilgan majmuidir", isCorrect: false },
        { answerText: "diskda saqlanadigan va maxsus ravishda tashkil qilingan ma'lumotlar turkumlarining jamlanmasidir", isCorrect: false },
        { answerText: "ba'zi bir muammo sohada murakkab vazifalarning yechimini topish uchun tahlil va xulosalarni yaratuvchi modellar, qoidalar va omillar (ma'lumotlar)ning majmuidir", isCorrect: true },
      ],
    },
    {
      questionText: "Ma'lumotlar bazasini obyektning … deb qarash mumkin. Nuqtalar o'rniga mos javobni tanlang.",
      answerOptions: [
        { answerText: "Axborot modeli", isCorrect: true },
        { answerText: "Ma'lumotlar bazasi", isCorrect: false },
        { answerText: "Ma'lumotlar bazasi modeli", isCorrect: false },
        { answerText: "Bilimlar bazasi", isCorrect: false },
      ],
    },
    {
      questionText: "Ma'lumotlar bazasi ma'lumotlar to'plamini necha marta ishlata olish uchun kerak?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "cheksiz", isCorrect: true },
        { answerText: "8", isCorrect: false },
        { answerText: "256", isCorrect: false },
      ],
    },
    {
      questionText: "Ma'lumotlar banki tushunchasi ta'rifini tanlang",
      answerOptions: [
        { answerText: "ma'lumotlarni markazlashtirilgan holda saqlash va jamoa bo'lib foydalanishning avtomatlashtirilgan tizimidir. Uning tarkibiga texnik vositalar, MB yoki ularning majmualari, MBBT hamda amaliy dasturlar paketi kiradi", isCorrect: true },
        { answerText: "kompyuterning tashqi xotirasida saqlanadigan, har qanday jismoniy, ijtimoiy, statistik, tashkiliy va boshqa ob'ektlar, jarayonlar, holatlarning o'zaro bog'liq va tartiblashtirilgan majmuidir", isCorrect: false },
        { answerText: "o'zaro bog'langan va tartiblangan ma'lumotlar majmuasi bo'lib, u ko'rilayotgan ob'ektlarning xususiyatini, holatini va ob'ektlar o'rtasidagi munosabatni ma'lum sohada tavsiflaydi", isCorrect: false },
        { answerText: "ba'zi bir muammo sohada murakkab vazifalarning yechimini topish uchun tahlil va xulosalarni yaratuvchi modellar, qoidalar va omillar (ma'lumotlar)ning majmuidir", isCorrect: false },
      ],
    },
    {
      questionText: "Ma'lumotlar bazasini tuzishda qaysi talablarga rioya qilish lozim?",
      answerOptions: [
        { answerText: "Unumdorlik, ortiqchalik, butunlik, xavfsizlik, maxfiylik, eng kam sarf va himoya", isCorrect: true },
        { answerText: "Natijaviylik, diskretlilik, javobgarlik, xavfsizlik, yo'nalganlik, tezlik", isCorrect: false },
        { answerText: "Oqimlilik, tartiblanganlik, xavfsizlik, tahlil, sinalganlik, integratsiyalanganlik", isCorrect: false },
        { answerText: "Xavfsizlik, qo'llab-quvvatlanganlik, yo'nalganlik, diskretlilik, natijaviylik, himoyalanganlik", isCorrect: false },
      ],
    },
    {
      questionText: "Ma'lumotlar bazasiga qo'yilgan UNUMDORLIK talabiga qaysi javob mos keladi?",
      answerOptions: [
        { answerText: "MBda har bir ma`lumot faqat bir joyda saqlanishi va u takrorlanmasligi lozim.", isCorrect: false },
        { answerText: "Foydalanuvchini MB bilan bog`lovchi, maxsus ishlab chiqilgan ilovalar foydalanuvchi bilan muloqotni qanoatlantiradigan vaqtni ta`minlab berishi zarur", isCorrect: true },
        { answerText: "Agar MB tarkibida ko`p foydalanuvchilar ishlatadigan ma`lumotlar bo`lsa, unda ma`lumotlar elementlari va ular orasidagi bog`lanish mumkin qadar buzilmasligi kerak", isCorrect: false },
        { answerText: "Ma`lumotlar yashirilishi va maxfiy saqlanmoqligi lozim", isCorrect: false },
      ],
    },
    {
      questionText: "Ma'lumotlar bazasiga qo'yilgan ORTIQCHALIK talabiga qaysi javob mos keladi?",
      answerOptions: [
        { answerText: "MBda har bir ma`lumot faqat bir joyda saqlanishi va u takrorlanmasligi lozim", isCorrect: true },
        { answerText: "Foydalanuvchini MB bilan bog`lovchi, maxsus ishlab chiqilgan ilovalar foydalanuvchi bilan muloqotni qanoatlantiradigan vaqtni ta`minlab berishi zarur", isCorrect: false },
        { answerText: "Agar MB tarkibida ko`p foydalanuvchilar ishlatadigan ma`lumotlar bo`lsa, unda ma`lumotlar elementlari va ular orasidagi bog`lanish mumkin qadar buzilmasligi kerak", isCorrect: false },
        { answerText: "Ma`lumotlar yashirilishi va maxfiy saqlanmoqligi lozim", isCorrect: false },
      ],
    },
    {
      questionText: "Ma'lumotlar bazasiga qo'yilgan BUTUNLIK talabiga qaysi javob mos keladi?",
      answerOptions: [
        { answerText: "Ma`lumotlar yashirilishi va maxfiy saqlanmoqligi lozim", isCorrect: false },
        { answerText: "Agar MB tarkibida ko`p foydalanuvchilar ishlatadigan ma`lumotlar bo`lsa, unda ma`lumotlar elementlari va ular orasidagi bog`lanish mumkin qadar buzilmasligi kerak", isCorrect: true },
        { answerText: "MBda har bir ma`lumot faqat bir joyda saqlanishi va u takrorlanmasligi lozim", isCorrect: false },
        { answerText: "Foydalanuvchini MB bilan bog`lovchi, maxsus ishlab chiqilgan ilovalar foydalanuvchi bilan muloqotni qanoatlantiradigan vaqtni ta`minlab berishi zarur", isCorrect: false },
      ],
    },
    {
      questionText: "Ma'lumotlar bazasiga qo'yilgan XAVFSIZLIK VA MAXFIYLIK talabiga qaysi javob mos keladi?",
      answerOptions: [
        { answerText: "Ma`lumotlar yashirilishi va maxfiy saqlanmoqligi lozim", isCorrect: true },
        { answerText: "Agar MB tarkibida ko`p foydalanuvchilar ishlatadigan ma`lumotlar bo`lsa, unda ma`lumotlar elementlari va ular orasidagi bog`lanish mumkin qadar buzilmasligi kerak", isCorrect: false },
        { answerText: "MBda har bir ma`lumot faqat bir joyda saqlanishi va u takrorlanmasligi lozim", isCorrect: false },
        { answerText: "Foydalanuvchini MB bilan bog`lovchi, maxsus ishlab chiqilgan ilovalar foydalanuvchi bilan muloqotni qanoatlantiradigan vaqtni ta`minlab berishi zarur", isCorrect: false },
      ],
    },
    {
      questionText: "Ma'lumotlar bazasiga qo'yilgan ENG KAM SARF talabiga qaysi javob mos keladi?",
      answerOptions: [
        { answerText: "MBni tuzish va undan foydalanishdagi xarajatlarni kamaytirish maqsadida, tashkil qilishni shunday usullari tanlanadiki, ular vaqt va xarajatlarni imkon darajada kamaytirsin", isCorrect: true },
        { answerText: "MBdan foydalanuvchi MBga, turli xil shakldagi ma`lumotlarni olish uchun murojaat qilishi mumkin", isCorrect: false },
        { answerText: "Tashkilot ixtiyoriy vaqtda oldingi, eski ma`lumotlarini ko`ra olishi lozim", isCorrect: false },
        { answerText: "Ma`lumotlarning unumdorligini yaxshilash maqsadida uning bazasini qayta qurish", isCorrect: false },
      ],
    },
    {
      questionText: "Ma'lumotlar bazasiga qo'yilgan QIDIRUV IMKONIYATLARI talabiga qaysi javob mos keladi?",
      answerOptions: [
        { answerText: "MBdan foydalanuvchi MBga, turli xil shakldagi ma`lumotlarni olish uchun murojaat qilishi mumkin", isCorrect: true },
        { answerText: "Tashkilot ixtiyoriy vaqtda oldingi, eski ma`lumotlarini ko`ra olishi lozim", isCorrect: false },
        { answerText: "Ma`lumotlarning unumdorligini yaxshilash maqsadida uning bazasini qayta qurish", isCorrect: false },
        { answerText: "MBni tuzish va undan foydalanishdagi xarajatlarni kamaytirish maqsadida, tashkil qilishni shunday usullari tanlanadiki, ular vaqt va xarajatlarni imkon darajada kamaytirsin", isCorrect: false },
      ],
    },
    {
      questionText: "Ma'lumotlar bazasiga qo'yilgan O`TGAN ZAMON BILAN BOG`LANISH talabiga qaysi javob mos keladi?",
      answerOptions: [
        { answerText: "Tashkilot ixtiyoriy vaqtda oldingi, eski ma`lumotlarini ko`ra olishi lozim", isCorrect: true },
        { answerText: "Ma`lumotlarning unumdorligini yaxshilash maqsadida uning bazasini qayta qurish", isCorrect: false },
        { answerText: "MBni tuzish va undan foydalanishdagi xarajatlarni kamaytirish maqsadida, tashkil qilishni shunday usullari tanlanadiki, ular vaqt va xarajatlarni imkon darajada kamaytirsin", isCorrect: false },
        { answerText: "MBdan foydalanuvchi MBga, turli xil shakldagi ma`lumotlarni olish uchun murojaat qilishi mumkin", isCorrect: false },
      ],
    },
    {
      questionText: "Ma'lumotlar bazasiga qo'yilgan SOZLASH talabiga qaysi javob mos keladi?",
      answerOptions: [
        { answerText: "Ma`lumotlarning unumdorligini yaxshilash maqsadida uning bazasini qayta qurish", isCorrect: true },
        { answerText: "Tashkilot ixtiyoriy vaqtda oldingi, eski ma`lumotlarini ko`ra olishi lozim", isCorrect: false },
        { answerText: "MBdan foydalanuvchi MBga, turli xil shakldagi ma`lumotlarni olish uchun murojaat qilishi mumkin", isCorrect: false },
        { answerText: "MBni tuzish va undan foydalanishdagi xarajatlarni kamaytirish maqsadida, tashkil qilishni shunday usullari tanlanadiki, ular vaqt va xarajatlarni imkon darajada kamaytirsin", isCorrect: false },
      ],
    },
    {
      questionText: "Predmet sohasi tushunchasi ta'rifi qaysi javobda to'g'ri berilgan?",
      answerOptions: [
        { answerText: "boshqarishni tashkil qilish va uni avtomatlashtirish maqsadida o`rganilishi lozim bo`lgan ob`ektiv dunyoning ma`lum bir qismidir", isCorrect: true },
        { answerText: "o'zaro bog'langan va tartiblangan ma'lumotlar majmuasi bo'lib, u ko'rilayotgan ob'ektlarning xususiyatini, holatini va ob'ektlar o'rtasidagi munosabatni ma'lum sohada tavsiflaydi", isCorrect: false },
        { answerText: "diskda saqlanadigan va maxsus ravishda tashkil qilingan ma'lumotlar turkumlarining jamlanmasidir", isCorrect: false },
        { answerText: "ba'zi bir muammo sohada murakkab vazifalarning yechimini topish uchun tahlil va xulosalarni yaratuvchi modellar, qoidalar va omillar (ma'lumotlar)ning majmuidir", isCorrect: false },
      ],
    },
    {
      questionText: "Ma`lumotlar semantikasini tasvirlashning asosiy vositasi nima?",
      answerOptions: [
        { answerText: "tabiiy til", isCorrect: true },
        { answerText: "Dasturlash tili", isCorrect: false },
        { answerText: "Ma'lumotlar bazasi", isCorrect: false },
        { answerText: "Ma'lumotlar bazasini boshqarish tizimlari", isCorrect: false },
      ],
    },
    {
      questionText: "Obyekt tushunchasiga ta'rif bering.",
      answerOptions: [
        { answerText: "mavjud va farqlanishi mumkin bo`lgan narsadir", isCorrect: true },
        { answerText: "ma`lumotlarning o`zaro bog`lanishini tasvirlash usullari haqidagi kelishuvni kiritishdir", isCorrect: false },
        { answerText: "kompyuterning muhim vazifalaridan biri hisoblanib diskda saqlanadi", isCorrect: false },
        { answerText: "ma`lumotlarni tashkil etishning oddiy birligi bo`lib, u axborotning alohida, bo`linmas birligidir", isCorrect: false },
      ],
    },
    {
      questionText: "Tuzilmalash (Strukturalash) tushunchasiga ta'rif bering.",
      answerOptions: [
        { answerText: "ob`ektlar va ma`lumotlarning o`zaro bog`lanishini tasvirlash usullari haqidagi kelishuvni kiritishdir", isCorrect: true },
        { answerText: "mavjud va farqlanishi mumkin bo`lgan narsadir", isCorrect: false },
        { answerText: "kompyuterning muhim vazifalaridan biri hisoblanib diskda saqlanadi", isCorrect: false },
        { answerText: "ma`lumotlarni tashkil etishning oddiy birligi bo`lib, u axborotning alohida, bo`linmas birligidir", isCorrect: false },
      ],
    },
    {
      questionText: "Ma'lumotlar bazasida jadvaldagi ustunlar nima deb atiladi?",
      answerOptions: [
        { answerText: "Maydonlar", isCorrect: true },
        { answerText: "Yozuvlar", isCorrect: false },
        { answerText: "Obyektlar", isCorrect: false },
        { answerText: "Satrlar", isCorrect: false },
      ],
    },
    {
      questionText: "MB tuzilmasining asosiy elementi nima deb ataladi?",
      answerOptions: [
        { answerText: "Maydonlar", isCorrect: true },
        { answerText: "Yozuvlar", isCorrect: false },
        { answerText: "Obyektlar", isCorrect: false },
        { answerText: "Satrlar", isCorrect: false },
      ],
    },
    {
      questionText: "Quyidagi javoblardan qaysi biri maydonning xususiyati hisoblanmaydi?",
      answerOptions: [
        { answerText: "Yozuv", isCorrect: true },
        { answerText: "Uzunlik", isCorrect: false },
        { answerText: "Imzo", isCorrect: false },
        { answerText: "Nom", isCorrect: false },
      ],
    },
    {
      questionText: "Matnli maydonning asosiy xususiyati nima deb ataladi?",
      answerOptions: [
        { answerText: "hajm", isCorrect: true },
        { answerText: "Imzo", isCorrect: false },
        { answerText: "Nom", isCorrect: false },
        { answerText: "Yozuv", isCorrect: false },
      ],
    },
    {
      questionText: "Ma'lumotlar bazasini yaratishning qaysi bosqichida ma'lumotlar bazasini yaratish uchun vazifa shakllantiriladi?",
      answerOptions: [
        { answerText: "Muammoning qo`yilishi", isCorrect: true },
        { answerText: "Obyektning tahlili", isCorrect: false },
        { answerText: "Model sintezi", isCorrect: false },
        { answerText: "Ma'lumotlar bazasi jadvallarining tuzilmasini yaratish", isCorrect: false },
      ],
    },
    {
      questionText: "Ma'lumotlar bazasini yaratishning qaysi bosqichida ma'lumotlar bazasining qanday ob`ektlardan tuzilishi mumkinligi va ularning xususiyatlari, ya`ni ob`ekt qanday parametrlar bilan aniqlanishi ko`rib chiqiladi?",
      answerOptions: [
        { answerText: "Muammoning qo`yilishi", isCorrect: false },
        { answerText: "Obyektning tahlili", isCorrect: true },
        { answerText: "Model sintezi", isCorrect: false },
        { answerText: "Ma'lumotlar bazasi jadvallarining tuzilmasini yaratish", isCorrect: false },
      ],
    },
    {
      questionText: "Ma'lumotlar bazasini yaratishning qaysi bosqichida modelning yaratilayotgan ma'lumotlar bazasining talablariga javob berishligi, qo`yilgan masalani echish imkoniyatiga ega bo`lishligi singari xususiyatlari ko`rib chiqiladi?",
      answerOptions: [
        { answerText: "Muammoning qo`yilishi", isCorrect: false },
        { answerText: "Obyektning tahlili", isCorrect: false },
        { answerText: "Model sintezi", isCorrect: true },
        { answerText: "Ma'lumotlar bazasi jadvallarining tuzilmasini yaratish", isCorrect: false },
      ],
    },
    {
      questionText: "Ma'lumotlar bazasini yaratishning qaysi bosqichida tanlangan modelga muvofiq ma'lumotlar bazasi sxemasi, jadvallar, jadval maydonlari, jadvallar va tugunlar orasidagi bog`lanishlar yaratiladi?",
      answerOptions: [
        { answerText: "Muammoning qo`yilishi", isCorrect: false },
        { answerText: "Obyektning tahlili", isCorrect: false },
        { answerText: "Model sintezi", isCorrect: false },
        { answerText: "Ma'lumotlar bazasi jadvallarining tuzilmasini yaratish", isCorrect: true },
      ],
    },
    {
      questionText: "Mohiyat tushunchasi ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      answerOptions: [
        { answerText: "Ma'lumotlar bazasida saqlanishi kerak bo`lgan ma`lumot, ixtiyoriy bir-biridan farq qiluvchi ob`ekt", isCorrect: true },
        { answerText: "Mohiyatning nomlangan tavsifidir", isCorrect: false },
        { answerText: "Atributlarning kam sonli to`plami bo`lib, ular qiymatlari bo`yicha mohiyatning kerakli nusxasini topish mumkin", isCorrect: false },
        { answerText: "Ikki yoki undan ortiq mohiyatlarni birlashtirishdir", isCorrect: false },
      ],
    },
    {
      questionText: "Atribut tushunchasi ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      answerOptions: [
        { answerText: "Ma'lumotlar bazasida saqlanishi kerak bo`lgan ma`lumot, ixtiyoriy bir-biridan farq qiluvchi ob`ekt", isCorrect: false },
        { answerText: "Mohiyatning nomlangan tavsifidir", isCorrect: true },
        { answerText: "Atributlarning kam sonli to`plami bo`lib, ular qiymatlari bo`yicha mohiyatning kerakli nusxasini topish mumkin", isCorrect: false },
        { answerText: "Ikki yoki undan ortiq mohiyatlarni birlashtirishdir", isCorrect: false },
      ],
    },
    {
      questionText: "Kalit tushunchasi ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      answerOptions: [
        { answerText: "Ma'lumotlar bazasida saqlanishi kerak bo`lgan ma`lumot, ixtiyoriy bir-biridan farq qiluvchi ob`ekt", isCorrect: false },
        { answerText: "Mohiyatning nomlangan tavsifidir", isCorrect: false },
        { answerText: "Atributlarning kam sonli to`plami bo`lib, ular qiymatlari bo`yicha mohiyatning kerakli nusxasini topish mumkin", isCorrect: true },
        { answerText: "Ikki yoki undan ortiq mohiyatlarni birlashtirishdir", isCorrect: false },
      ],
    },
    {
      questionText: "Bog'lanish tushunchasi ta'rifi qaysi javobda to'g'ri ko'rsatilgan?",
      answerOptions: [
        { answerText: "Ma'lumotlar bazasida saqlanishi kerak bo`lgan ma`lumot, ixtiyoriy bir-biridan farq qiluvchi ob`ekt", isCorrect: false },
        { answerText: "Mohiyatning nomlangan tavsifidir", isCorrect: false },
        { answerText: "Atributlarning kam sonli to`plami bo`lib, ular qiymatlari bo`yicha mohiyatning kerakli nusxasini topish mumkin", isCorrect: false },
        { answerText: "Ikki yoki undan ortiq mohiyatlarni birlashtirishdir", isCorrect: true },
      ],
    },
    {
      questionText: "Qaysi ma'lumotlar modeli shajarali ko'rinishdagi o`zaro bog`liq ob`ektlarning majmuasi sifatida qaraladi?",
      answerOptions: [
        { answerText: "Iyerarxik", isCorrect: true },
        { answerText: "To'r (tarmoqlangan)", isCorrect: false },
        { answerText: "Relyatsion", isCorrect: false },
        { answerText: "Struktura", isCorrect: false },
      ],
    },
    {
      questionText: "Agar ma`lumotlar o`rtasidagi munosabatda yaratilgan element bittadan ortiq boshlang`ich elementga ega bo`lsa qaysi ma'lumotlar modeli hisoblanadi?",
      answerOptions: [
        { answerText: "Iyerarxik", isCorrect: false },
        { answerText: "To'r (tarmoqlangan)", isCorrect: true },
        { answerText: "Relyatsion", isCorrect: false },
        { answerText: "Struktura", isCorrect: false },
      ],
    },
    {
      questionText: "Qaysi ma'lumotlar modelida ma`lumotlar jadval ko`rinishida beriladi?",
      answerOptions: [
        { answerText: "Iyerarxik", isCorrect: false },
        { answerText: "To'r (tarmoqlangan)", isCorrect: false },
        { answerText: "Relyatsion", isCorrect: true },
        { answerText: "Struktura", isCorrect: false },
      ],
    },
    {
      questionText: "Qaysi me'yoriy shaklda jadval atributlarining har biri bo`linmas (atomar) qiymat qabul qiladi?",
      answerOptions: [
        { answerText: "Birinchi me'yoriy shakl", isCorrect: true },
        { answerText: "Ikkinchi me'yoriy shakl", isCorrect: false },
        { answerText: "Uchinchi me'yoriy shakl", isCorrect: false },
        { answerText: "To'rtinchi me'yoriy shakl", isCorrect: false },
      ],
    },
    {
      questionText: "Qaysi me'yoriy shaklda birlamchi kalitga ega bo`lib, kalit bo`lmagan atributlar birlamchi kalitga to`liq funktsional bog`liq bo`ladi?",
      answerOptions: [
        { answerText: "Birinchi me'yoriy shakl", isCorrect: false },
        { answerText: "Ikkinchi me'yoriy shakl", isCorrect: true },
        { answerText: "Uchinchi me'yoriy shakl", isCorrect: false },
        { answerText: "To'rtinchi me'yoriy shakl", isCorrect: false },
      ],
    },
    {
      questionText: "Qaysi me'yoriy shaklda uning kalitsiz atributlari boshqa bir kalitsiz atributlarga funktsional bog`liq bo`lmaydi?",
      answerOptions: [
        { answerText: "Birinchi me'yoriy shakl", isCorrect: false },
        { answerText: "Ikkinchi me'yoriy shakl", isCorrect: false },
        { answerText: "Uchinchi me'yoriy shakl", isCorrect: true },
        { answerText: "To'rtinchi me'yoriy shakl", isCorrect: false },
      ],
    },
    {
      questionText: "Qaysi me'yoriy shaklda to`liq dekompozitsiya ikkita proektsiya birlashmasidan iborat bo`ladi?",
      answerOptions: [
        { answerText: "Birinchi me'yoriy shakl", isCorrect: false },
        { answerText: "Ikkinchi me'yoriy shakl", isCorrect: false },
        { answerText: "Uchinchi me'yoriy shakl", isCorrect: false },
        { answerText: "To'rtinchi me'yoriy shakl", isCorrect: true },
      ],
    },
    {
      questionText: "Ma`lumotlarni biror bir jismonan aspektda tadbiq qilishni ko`zlamagan holda, tashkilotda foydalanilayotganligiga muvofiq modelini yaratish Ma'lumotlar bazasini qaysi loyihalashi hisoblanadi?",
      answerOptions: [
        { answerText: "Kontseptual", isCorrect: true },
        { answerText: "Mantiqiy", isCorrect: false },
        { answerText: "Jismoniy", isCorrect: false },
        { answerText: "Xaqqoniy", isCorrect: false },
      ],
    },
    {
      questionText: "Maqsadli, MBBT tipini hisobga olgan holda biror bir jismonan aspektga tadbiq qilish modelini yaratish Ma'lumotlar bazasini qaysi loyihalashi hisoblanadi?",
      answerOptions: [
        { answerText: "Kontseptual", isCorrect: false },
        { answerText: "Mantiqiy", isCorrect: true },
        { answerText: "Jismoniy", isCorrect: false },
        { answerText: "Xaqqoniy", isCorrect: false },
      ],
    },
    {
      questionText: "Predmet soha ma`lumotlarini MBBT yordamida kompyuter jismoniy xotirasiga kiritish, saqlash hamda kerakli ma`lumotlarni olish va ma`lumotlarga ishlov berishda ma`lum bir usullarni qo`llashni tashkil qilish Ma'lumotlar bazasini qaysi loyihalashi hisoblanadi?",
      answerOptions: [
        { answerText: "Kontseptual", isCorrect: false },
        { answerText: "Mantiqiy", isCorrect: false },
        { answerText: "Jismoniy", isCorrect: true },
        { answerText: "Xaqqoniy", isCorrect: false },
      ],
    },
    {
      questionText: "Ma'lumotlar bazasini loyihalash bosqichlarini tanlang.",
      answerOptions: [
        { answerText: "Konseptual, mantiqiy, jismoniy", isCorrect: true },
        { answerText: "Strukturali, konseptual, jismoniy", isCorrect: false },
        { answerText: "Strukturali, mantiqiy, jismoniy", isCorrect: false },
        { answerText: "Strukturali, konseptual, mantiqiy", isCorrect: false },
      ],
    },
    {
      questionText: "Ma'lumotlar bazasining qaysi arxitekturasida MB, MBBT va dasturiy ta`minot (ilovalar) bitta kompyuterda (meynfreym yoki personal kompyuterda) joylashgan bo`ladi?",
      answerOptions: [
        { answerText: "markazlashgan", isCorrect: true },
        { answerText: "Fayl-server", isCorrect: false },
        { answerText: "Kliyent-server", isCorrect: false },
        { answerText: "taqsimlangan", isCorrect: false },
      ],
    },
    {
      questionText: "Ma'lumotlar bazasining qaysi arxitekturasida MB va MBBT serverda hamda dasturiy ta`minot (ilovalar) har bir kompyuterda (meynfreym yoki personal kompyuterda) joylashgan bo`ladi?",
      answerOptions: [
        { answerText: "markazlashgan", isCorrect: false },
        { answerText: "Fayl-server", isCorrect: false },
        { answerText: "Kliyent-server", isCorrect: true },
        { answerText: "taqsimlangan", isCorrect: false },
      ],
    },
    {
      questionText: "Ma'lumotlar bazasining qaysi arxitekturasida MB serverda hamda MBBT va dasturiy ta`minot (ilovalar) har bir kompyuterda (meynfreym yoki personal kompyuterda) joylashgan bo`ladi?",
      answerOptions: [
        { answerText: "markazlashgan", isCorrect: false },
        { answerText: "Fayl-server", isCorrect: true },
        { answerText: "Kliyent-server", isCorrect: false },
        { answerText: "taqsimlangan", isCorrect: false },
      ],
    },
    {
      questionText: "Ma'lumotlar bazasining har bir fragmenti alohida MBBT boshqaruvchi ostida va o`zaro aloqa tarmog`i orqali bog`langan bitta yoki bir nechta kompyuterda saqlanishi qaysi arxitektura hisoblanadi?",
      answerOptions: [
        { answerText: "markazlashgan", isCorrect: false },
        { answerText: "Fayl-server", isCorrect: false },
        { answerText: "Kliyent-server", isCorrect: false },
        { answerText: "taqsimlangan", isCorrect: true },
      ],
    },
    {
      questionText: "Ma'lumotlar bazasini boshqrish tizimlarini tanlang",
      answerOptions: [
        { answerText: "DB2, MySQL, MS Access", isCorrect: true },
        { answerText: "Oracle, MySQL, MS Excel", isCorrect: false },
        { answerText: "MySQL, MariaDB, KongoDB", isCorrect: false },
        { answerText: "Oracle, SecretDB, MySQL", isCorrect: false },
      ],
    },
    {
      questionText: "Yulduzcha so'rov optimallashtirishi qaysi MBBTda qo'llaniladi?",
      answerOptions: [
        { answerText: "Oracle", isCorrect: true },
        { answerText: "MS SQL Server", isCorrect: false },
        { answerText: "MongoDB", isCorrect: false },
        { answerText: "MS Access", isCorrect: false },
      ],
    },
    {
      questionText: "MS Accessning o'zida ma'lumotlar bazalari bilan ishlaydigan ilovalarni yozish uchun qaysi dasturlash tili o'rnatilgan?",
      answerOptions: [
        { answerText: "C++", isCorrect: false },
        { answerText: "Delphi", isCorrect: false },
        { answerText: "VBA", isCorrect: true },
        { answerText: "MS TSQL", isCorrect: false },
      ],
    },
    {
      questionText: "Markazlshgan arxitekturaning ta'rifini tanlang",
      answerOptions: [
        { answerText: "Ma'lumotlar bazasining ushbu arxitekturasida MB, MBBT va dasturiy ta`minot (ilovalar) bitta kompyuterda (meynfreym yoki personal kompyuterda) joylashgan bo`ladi", isCorrect: true },
        { answerText: "Ma'lumotlar bazasining ushbu arxitekturasida MB va MBBT serverda hamda dasturiy ta`minot (ilovalar) har bir kompyuterda (meynfreym yoki personal kompyuterda) joylashgan bo`ladi", isCorrect: false },
        { answerText: "Ma'lumotlar bazasining ushbu arxitekturasida MB serverda hamda MBBT va dasturiy ta`minot (ilovalar) har bir kompyuterda (meynfreym yoki personal kompyuterda) joylashgan bo`ladi", isCorrect: false },
        { answerText: "Ma'lumotlar bazasining har bir fragmenti alohida MBBT boshqaruvchi ostida va o`zaro aloqa tarmog`i orqali bog`langan bitta yoki bir nechta kompyuterda saqlanishi", isCorrect: false },
      ],
    },
    {
      questionText: "Fayl-server arxitekturasi ta'rifini tanlang",
      answerOptions: [
        { answerText: "Ma'lumotlar bazasining ushbu arxitekturasida MB, MBBT va dasturiy ta`minot (ilovalar) bitta kompyuterda (meynfreym yoki personal kompyuterda) joylashgan bo`ladi", isCorrect: false },
        { answerText: "Ma'lumotlar bazasining ushbu arxitekturasida MB va MBBT serverda hamda dasturiy ta`minot (ilovalar) har bir kompyuterda (meynfreym yoki personal kompyuterda) joylashgan bo`ladi", isCorrect: false },
        { answerText: "Ma'lumotlar bazasining ushbu arxitekturasida MB serverda hamda MBBT va dasturiy ta`minot (ilovalar) har bir kompyuterda (meynfreym yoki personal kompyuterda) joylashgan bo`ladi", isCorrect: true },
        { answerText: "Ma'lumotlar bazasining har bir fragmenti alohida MBBT boshqaruvchi ostida va o`zaro aloqa tarmog`i orqali bog`langan bitta yoki bir nechta kompyuterda saqlanishi", isCorrect: false },
      ],
    },
    {
      questionText: "Kliyent-server arxitekturasi ta'rifini tanlang",
      answerOptions: [
        { answerText: "Ma'lumotlar bazasining ushbu arxitekturasida MB, MBBT va dasturiy ta`minot (ilovalar) bitta kompyuterda (meynfreym yoki personal kompyuterda) joylashgan bo`ladi", isCorrect: false },
        { answerText: "Ma'lumotlar bazasining ushbu arxitekturasida MB va MBBT serverda hamda dasturiy ta`minot (ilovalar) har bir kompyuterda (meynfreym yoki personal kompyuterda) joylashgan bo`ladi", isCorrect: true },
        { answerText: "Ma'lumotlar bazasining ushbu arxitekturasida MB serverda hamda MBBT va dasturiy ta`minot (ilovalar) har bir kompyuterda (meynfreym yoki personal kompyuterda) joylashgan bo`ladi", isCorrect: false },
        { answerText: "Ma'lumotlar bazasining har bir fragmenti alohida MBBT boshqaruvchi ostida va o`zaro aloqa tarmog`i orqali bog`langan bitta yoki bir nechta kompyuterda saqlanishi", isCorrect: false },
      ],
    },
    {
      questionText: "Taqsimlangan MB arxitekturasi ta'rifini tanlang",
      answerOptions: [
        { answerText: "Ma'lumotlar bazasining ushbu arxitekturasida MB, MBBT va dasturiy ta`minot (ilovalar) bitta kompyuterda (meynfreym yoki personal kompyuterda) joylashgan bo`ladi", isCorrect: false },
        { answerText: "Ma'lumotlar bazasining ushbu arxitekturasida MB va MBBT serverda hamda dasturiy ta`minot (ilovalar) har bir kompyuterda (meynfreym yoki personal kompyuterda) joylashgan bo`ladi", isCorrect: false },
        { answerText: "Ma'lumotlar bazasining ushbu arxitekturasida MB serverda hamda MBBT va dasturiy ta`minot (ilovalar) har bir kompyuterda (meynfreym yoki personal kompyuterda) joylashgan bo`ladi", isCorrect: false },
        { answerText: "Ma'lumotlar bazasining har bir fragmenti alohida MBBT boshqaruvchi ostida va o`zaro aloqa tarmog`i orqali bog`langan bitta yoki bir nechta kompyuterda saqlanishi", isCorrect: true },
      ],
    },
    {
      questionText: "Taqsimlangan qayta ishlashga berilgan ta'rifni tanlang",
      answerOptions: [
        { answerText: "Markazlashgan ma'lumotlar bazasini qayta ishlashni turli kompyuterlardan turib amalga oshirishdir", isCorrect: true },
        { answerText: "Iyerarxik ma'lumotlar bazasini qayta ishlashni bitta kompyuterdan turib amalga oshirishdir", isCorrect: false },
        { answerText: "Relyatsion ma'lumotlar bazasini qayta ishlashni bitta kompyuterdan turib amalga oshirishdir", isCorrect: false },
        { answerText: "Tarmoqlangan ma'lumotlar bazasini qayta ishlashni yagona kompyuterdan turib amalga oshirishdir", isCorrect: false },
      ],
    },
    {
      questionText: "SQL – bu … .",
      answerOptions: [
        { answerText: "Structured Query Language", isCorrect: true },
        { answerText: "Structure Question Language", isCorrect: false },
        { answerText: "System Query List", isCorrect: false },
        { answerText: "Standart Query Language", isCorrect: false },
      ],
    },
    {
      questionText: "Agarda foydalanuvchi ma'lumotlar bazasidan ma'lumotlarni o'qimoqchi bo'lsa, u buni MBBT dan nima yordamida so'raydi.",
      answerOptions: [
        { answerText: "SQL so'rov", isCorrect: true },
        { answerText: "C++ dastur kodi", isCorrect: false },
        { answerText: "Administratorga murojaat", isCorrect: false },
        { answerText: "Interfeysga qo'shimcha tugma o'rnatish", isCorrect: false },
      ],
    },
    {
      questionText: "Foydalanuvchilar SQL komandalari asosida ishlovchi ma'lumotlarni o'qish va ularni ekranga chiqarishga mo'ljallangan interaktiv dastur orqali berilganlar bazasi ma'lumotlaridan foydalanadilar. Bu esa nimani xosil qilishning qulay usuli hisoblanadi?",
      answerOptions: [
        { answerText: "maxsus so'rovlarni", isCorrect: true },
        { answerText: "boshqaruv so'rovlarni", isCorrect: false },
        { answerText: "qat'iy so'rovlarni", isCorrect: false },
        { answerText: "foydalanuvchilarni boshqarish so'rovlarini", isCorrect: false },
      ],
    },
    {
      questionText: "Ma'lumotlar bazasidan ma'lumotlarni o'qish (tanlash) uchun qaysi operator qo'llaniladi?",
      answerOptions: [
        { answerText: "SELECT", isCorrect: true },
        { answerText: "INSERT", isCorrect: false },
        { answerText: "UPDATE", isCorrect: false },
        { answerText: "DELETE", isCorrect: false },
      ],
    },
    {
      questionText: "Ma'lumotlar bazasiga yangi ma'lumotlarni qo'shish uchun qaysi operator qo'llaniladi?",
      answerOptions: [
        { answerText: "SELECT", isCorrect: false },
        { answerText: "INSERT", isCorrect: true },
        { answerText: "UPDATE", isCorrect: false },
        { answerText: "DELETE", isCorrect: false },
      ],
    },
    {
      questionText: "Ma'lumotlar bazasidagi joriy ma'lumotni yangilash uchun qaysi operator qo'llaniladi?",
      answerOptions: [
        { answerText: "SELECT", isCorrect: false },
        { answerText: "INSERT", isCorrect: false },
        { answerText: "UPDATE", isCorrect: true },
        { answerText: "DELETE", isCorrect: false },
      ],
    },
    {
      questionText: "Ma'lumotlar bazasining satrlaridagi ma'lumotlarni o'chirish uchun qaysi operator qo'llaniladi?",
      answerOptions: [
        { answerText: "SELECT", isCorrect: false },
        { answerText: "INSERT", isCorrect: false },
        { answerText: "UPDATE", isCorrect: false },
        { answerText: "DELETE", isCorrect: true },
      ],
    },
  ];
  

  export default quizQuestions