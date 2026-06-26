/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║           OCEAN BIRTHDAY — SEMUA PENGATURAN DI SINI         ║
 * ║  Kamu HANYA perlu edit file ini. Tidak perlu buka file lain. ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 *  Cara pakai:
 *  1. Baca setiap bagian (1–7)
 *  2. Ganti nilai yang ada tanda  ← GANTI INI
 *  3. Simpan file → refresh browser
 */

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   1. PIN MASUK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PIN 4–6 angka yang harus diketik tamu untuk membuka website.  */
const WEBSITE_PIN = "2126";              // ← GANTI PIN

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   2. NAMA PENERIMA
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Nama yang muncul di halaman utama (hero).                      */
const RECIPIENT_NAME = "Rico";           // ← GANTI NAMA


/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   3. MUSIK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   FILE MUSIK  → taruh di:  assets/music/song1.mp3
   FOTO COVER  → taruh di:  assets/music/song1.jpeg  (rasio 3:4)
   Lalu ganti judul dan nama artis di bawah ini.                  */
const MUSIC_TRACKS = [
  {
    title:  "i'd like watch you sleeping",             // ← GANTI JUDUL LAGU
    artist: "Sal Priadi",                   // ← GANTI NAMA ARTIS
    src:    "assets/music/song1.mp3",    //   (nama file mp3 — jangan diubah kecuali nama filenya beda)
    cover:  "assets/music/song1.jpeg",   //   (nama file cover — jangan diubah kecuali nama filenya beda)
    startTime: 0,                           // ← MULAI DARI DETIK KE BERAPA
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   4. FOTO GALERI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Taruh foto di:  assets/images/
   Nama file harus:  img1.jpeg  img2.jpeg  … img8.jpeg
   Ganti caption (keterangan foto) di setiap baris.               */
const GALLERY_PHOTOS = [
  { file: "img1.jpeg", caption: "" },  // ← GANTI CAPTION
  { file: "img2.jpeg", caption: " You're the reason my heart feels so full." },
  { file: "img3.jpeg", caption: " " },
  { file: "img4.jpeg", caption: " Every second with you is my favorite." },
  { file: "img5.jpeg", caption: " " },
  { file: "img6.jpeg", caption: " If I could relive a moment, I'd choose us every time." },
  { file: "img7.jpeg", caption: " " },
  { file: "img8.jpeg", caption: " Still my favorite person, always. " },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   5. ISI SURAT
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Setiap string adalah satu paragraf.
   Bisa ditambah atau dikurangi paragrafnya.                       */
const LETTER_PARAGRAPHS = [
  "Btw, aku mau yapping sebentar ya ganteng, tolong dibaca sampai habis dulu...",
  "Jujur , kalau dipikir-pikir lagi, perjalanan kita tuh bener-bener se-plot twist itu yaa??? Dari yang awalnya kita cuma temenan iseng dari sosmed, bercanda sama hal-hal random, eh tau-tau malah berlanjut sampe detik ini yang gak bisa di-skip. Aku gak tau sekarang ini banyak cobaan dari kita berdua yg selalu bawaan nya sama” mau di mengertiin satu sama lain terus. Tapi kita juga sama” cape dengan kesibukan kita di masing-masing. Tantangan LDR emang susah jujurr.. tapi you slowly became my favorite person. Tiap ada hal sekecil apa pun, orang pertama yang pengen aku ceritain tuh selalu kamu. I feel waktu kamu pulang kerja pasti kamu gabisa kalo ga ditemenin dulu kan bareng aku, maybe soon itu bisa diputar ulang kembali but aku cuma bisa bilang makasih ya udah selalu jadi pendengar yang baik buat aku selama ini.",
  "Aku tahu jalanin ini semua gak mudah buat kita. Jarak kita tuh jauh banget, bener-bener definisi LDR is not for the weak. Kadang capek banget gak sih cuma bisa tatapan lewat layar, kangen tapi cuma bisa kirim pap wkwk atau pengen bersandar di bahu kamu tapi kepentok guling campur tembokkk? Rintangannya banyak banget, dari yang misscom, aku yang kadang suka overthinking dan uring-uringan pas kamu ilang kabar, sampe nahan kangen yang nyesek banget. But guess what? Hebatnya kita selalu bisa lewatin itu semua karena kamu selalu sabar bimbing aku. Perasaan aku ke kamu gak pernah berkurang sedikit pun, malah makin hari makin all in.",
  "So, I think it’s time to upgrade our status. Aku gak berharap lebih buat sekarang kita yang kaya gini. Aku tahu ke depannya mungkin bakal tetep berat, tapi aku yakin banget kalau bareng kamu, kita pasti bisa komitmen dari awal lagi. Anggap aja jarak yang sekarang ini cuma ujian magang buat kita, karena aku mau ending-nya kita harus bisa bareng-bareng terus seterusnya. Kita bakal satu domisili, satu rumah, dan gak bakal ada kata pisah lagi. Maafin bocil satu ini yaa kalo masih suka banyak bikin marah-marah gajelas sama kamu yang sampe bikin emosional kamu tinggi ke akunya... It’s always been you, and it will always be miss you sayaannggg. 🥺🤍",
  "Di inget terus yaa pesan aku ga setiap saat, setiap waktu dan setiap umur ga seterusnya kamu bisa ngerokok terus rico. Emang susah klo udah kecanduan tapi coba dikurangin lagi yaa sampe bisa lepas dari rokok!! Aku mau liat kamu bisa hidup lebih lama lagi after kamu bisa ngurangin rokok itu jadi lebih sehat lagi, bareng sama siapa nya nanti aku bakal do’ain apapun itu yang terbaik untuk kita, kalo emang bisa aku paksain sih jujurr trobos aja hihiii😾‼️ ",
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   6. KENANGAN (TIMELINE)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   depth  = kedalaman yang ditampilkan (label saja)
   year   = judul bab
   title  = judul kenangan
   text   = isi cerita                                             */
const MEMORIES = [
  {
    depth: "2m",
    year:  "Chapter One",
    title: "Where It All Started",
    text:  "That moment when everything just clicked and suddenly made sense.",
  },
  {
    depth: "8m",
    year:  "Chapter Two",
    title: "The Quiet Days",
    text:  "Just you, me, and those simple moments that ended up meaning everything.",
  },
  {
    depth: "16m",
    year:  "Chapter Three",
    title: "Through the Storms",
    text:  "We've had our rough days, but honestly, we always found our way back.",
  },
  {
    depth: "24m",
    year:  "Chapter Four",
    title: "Finding the Light",
    text:  "You're literally the brightest part of my journey, even in the deepest waters.",
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   7. UCAPAN ULANG TAHUN
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   icon: wave | shell | star | compass | anchor | heart
   text: isi ucapannya                                            */
const WISHES = [
  { icon: "wave",    text: "May this year bring you the calmness of the ocean and the depth of your kindness." },
  { icon: "shell",   text: "Hope your days are as bright as the sun on the water, and your nights as peaceful as the receding tide." },
  { icon: "star",    text: "May every little wish of yours arrive right when you need it the most." },
  { icon: "compass", text: "Wherever this year takes you, I hope you always find your way back to the people who adore you." },
  { icon: "anchor",  text: "Stay grounded, stay grateful, and honestly, just stay as beautiful as you are right now." },
  { icon: "heart",   text: "Happy birthday — cheers to another year of memories totally worth keeping." },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   JANGAN EDIT DI BAWAH INI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
(function (window) {
  window.WEBSITE_PIN = String(WEBSITE_PIN);
  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   8. WHATSAPP REPLY BUTTON
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Nomor WA untuk membalas pesan setelah lilin ditiup.
   Gunakan format internasional tanpa tanda + (contoh: 62812...) */
const WHATSAPP_NUMBER = "6285883947743";   // ← GANTI NOMOR WA YANG ORDER
const WHATSAPP_MESSAGE = "Hey, I just opened the bottle. Thank you for making my day! ✨"; // ← GANTI PESAN OTOMATIS

window.OCEAN_SETTINGS = {
    recipientName:    String(RECIPIENT_NAME),
    galleryPhotos:    GALLERY_PHOTOS,
    musicTracks:      MUSIC_TRACKS,
    letterParagraphs: LETTER_PARAGRAPHS,
    memories:         MEMORIES,
    wishes:           WISHES,
    whatsappNumber:   WHATSAPP_NUMBER,
    whatsappMessage:  WHATSAPP_MESSAGE
  };
})(window);
