const kanjiData = [
    // ==================== DARI PDF KANJI JFT ====================
    { kanji: "千", hiragana: "せん", romaji: "sen", meaning: "1000" },
    { kanji: "万", hiragana: "まん", romaji: "man", meaning: "10000" },
    { kanji: "百円", hiragana: "ひゃくえん", romaji: "hyakuen", meaning: "100 yen" },
    { kanji: "千円", hiragana: "せんえん", romaji: "senen", meaning: "1000 yen" },
    { kanji: "一万円", hiragana: "いちまんえん", romaji: "ichimanen", meaning: "10000 yen" },
    { kanji: "行きます", hiragana: "いきます", romaji: "ikimasu", meaning: "Pergi" },
    { kanji: "来ます", hiragana: "きます", romaji: "kimasu", meaning: "Datang" },
    { kanji: "会います", hiragana: "あいます", romaji: "aimasu", meaning: "Bertemu" },
    { kanji: "休みます", hiragana: "やすみます", romaji: "yasumimasu", meaning: "Libur, istirahat" },
    { kanji: "日本", hiragana: "にほん", romaji: "nihon", meaning: "Jepang" },
    { kanji: "東京", hiragana: "とうきょう", romaji: "toukyou", meaning: "Tokyo" },
    { kanji: "私", hiragana: "わたし", romaji: "watashi", meaning: "Saya" },
    { kanji: "父", hiragana: "ちち", romaji: "chichi", meaning: "Ayah" },
    { kanji: "母", hiragana: "はは", romaji: "haha", meaning: "Ibu" },
    { kanji: "子供", hiragana: "こども", romaji: "kodomo", meaning: "Anak" },
    { kanji: "男", hiragana: "おとこ", romaji: "otoko", meaning: "Laki-laki" },
    { kanji: "女", hiragana: "おんな", romaji: "onna", meaning: "Perempuan" },
    { kanji: "人", hiragana: "ひと", romaji: "hito", meaning: "Orang" },
    { kanji: "お父さん", hiragana: "おとうさん", romaji: "otousan", meaning: "Ayah (orang lain)" },
    { kanji: "お母さん", hiragana: "おかあさん", romaji: "okaasan", meaning: "Ibu (orang lain)" },
    { kanji: "何人", hiragana: "なんにん", romaji: "nannin", meaning: "Berapa orang?" },
    { kanji: "国", hiragana: "くに", romaji: "kuni", meaning: "Negara" },
    { kanji: "外国", hiragana: "がいこく", romaji: "gaikoku", meaning: "Luar negeri" },
    { kanji: "語", hiragana: "ご", romaji: "go", meaning: "Bahasa" },
    { kanji: "日本語", hiragana: "にほんご", romaji: "nihongo", meaning: "Bahasa Jepang" },
    { kanji: "英語", hiragana: "えいご", romaji: "eigo", meaning: "Bahasa Inggris" },
    { kanji: "中国語", hiragana: "ちゅうごくご", romaji: "chuugokugo", meaning: "Bahasa China" },
    { kanji: "人", hiragana: "じん/にん", romaji: "jin/nin", meaning: "Orang" },
    { kanji: "日本人", hiragana: "にほんじん", romaji: "nihonjin", meaning: "Orang Jepang" },
    { kanji: "好き", hiragana: "すき", romaji: "suki", meaning: "Suka" },
    { kanji: "本", hiragana: "ほん", romaji: "hon", meaning: "Buku" },
    { kanji: "読書", hiragana: "どくしょ", romaji: "dokusho", meaning: "Bacaan" },
    { kanji: "何", hiragana: "なに", romaji: "nani", meaning: "Apa?" },
    { kanji: "春", hiragana: "はる", romaji: "haru", meaning: "Musim semi" },
    { kanji: "夏", hiragana: "なつ", romaji: "natsu", meaning: "Musim panas" },
    { kanji: "秋", hiragana: "あき", romaji: "aki", meaning: "Musim gugur" },
    { kanji: "冬", hiragana: "ふゆ", romaji: "fuyu", meaning: "Musim dingin" },
    { kanji: "今", hiragana: "いま", romaji: "ima", meaning: "Sekarang" },
    { kanji: "花", hiragana: "はな", romaji: "hana", meaning: "Bunga" },
    { kanji: "海", hiragana: "うみ", romaji: "umi", meaning: "Laut" },
    { kanji: "山", hiragana: "やま", romaji: "yama", meaning: "Gunung" },
    { kanji: "川", hiragana: "かわ", romaji: "kawa", meaning: "Sungai" },
    { kanji: "今日", hiragana: "きょう", romaji: "kyou", meaning: "Hari ini" },
    { kanji: "天気", hiragana: "てんき", romaji: "tenki", meaning: "Cuaca" },
    { kanji: "晴れ", hiragana: "はれ", romaji: "hare", meaning: "Cerah" },
    { kanji: "雨", hiragana: "あめ", romaji: "ame", meaning: "Hujan" },
    { kanji: "雪", hiragana: "ゆき", romaji: "yuki", meaning: "Salju" },
    { kanji: "雲", hiragana: "くも", romaji: "kumo", meaning: "Mendung" },
    { kanji: "風", hiragana: "かぜ", romaji: "kaze", meaning: "Angin" },
    { kanji: "空", hiragana: "そら", romaji: "sora", meaning: "Langit" },
    { kanji: "町", hiragana: "まち", romaji: "machi", meaning: "Kota" },
    { kanji: "店", hiragana: "みせ", romaji: "mise", meaning: "Toko" },
    { kanji: "人気", hiragana: "にんき", romaji: "ninki", meaning: "Popularitas" },
    { kanji: "多い", hiragana: "おおい", romaji: "ooi", meaning: "Banyak" },
    { kanji: "少ない", hiragana: "すくない", romaji: "sukunai", meaning: "Sedikit" },
    { kanji: "高い", hiragana: "たかい", romaji: "takai", meaning: "Mahal" },
    { kanji: "安い", hiragana: "やすい", romaji: "yasui", meaning: "Murah" },
    { kanji: "広い", hiragana: "ひろい", romaji: "hiroi", meaning: "Luas" },
    { kanji: "道", hiragana: "みち", romaji: "michi", meaning: "Jalan" },
    { kanji: "通り", hiragana: "とおり", romaji: "toori", meaning: "Jalan" },
    { kanji: "右", hiragana: "みぎ", romaji: "migi", meaning: "Kanan" },
    { kanji: "左", hiragana: "ひだり", romaji: "hidari", meaning: "Kiri" },
    { kanji: "一つ", hiragana: "ひとつ", romaji: "hitotsu", meaning: "Satu buah" },
    { kanji: "二つ", hiragana: "ふたつ", romaji: "futatsu", meaning: "Dua buah" },
    { kanji: "赤い", hiragana: "あかい", romaji: "akai", meaning: "Merah" },
    { kanji: "青い", hiragana: "あおい", romaji: "aoi", meaning: "Biru" },
    { kanji: "黒い", hiragana: "くろい", romaji: "kuroi", meaning: "Hitam" },
    { kanji: "白い", hiragana: "しろい", romaji: "shiroi", meaning: "Putih" },
    { kanji: "時間", hiragana: "じかん", romaji: "jikan", meaning: "Waktu" },
    { kanji: "場所", hiragana: "ばしょ", romaji: "basho", meaning: "Tempat" },
    { kanji: "駅", hiragana: "えき", romaji: "eki", meaning: "Stasiun" },
    { kanji: "日", hiragana: "ひ", romaji: "hi", meaning: "Matahari" },
    { kanji: "出かけます", hiragana: "でかけます", romaji: "dekakemasu", meaning: "Meninggalkan rumah" },
    { kanji: "待ちます", hiragana: "まちます", romaji: "machimasu", meaning: "Menunggu" },
    { kanji: "止まります", hiragana: "とまります", romaji: "tomarimasu", meaning: "Berhenti" },
    { kanji: "食事", hiragana: "しょくじ", romaji: "shokuji", meaning: "Makan bersama" },
    { kanji: "仕事", hiragana: "しごと", romaji: "shigoto", meaning: "Pekerjaan" },
    { kanji: "前", hiragana: "まえ", romaji: "mae", meaning: "Sebelum/depan" },
    { kanji: "後", hiragana: "あと", romaji: "ato", meaning: "Setelah" },
    { kanji: "朝", hiragana: "あさ", romaji: "asa", meaning: "Pagi" },
    { kanji: "昼", hiragana: "ひる", romaji: "hiru", meaning: "Siang" },
    { kanji: "夜", hiragana: "よる", romaji: "yoru", meaning: "Malam" },
    { kanji: "乗ります", hiragana: "のります", romaji: "norimasu", meaning: "Naik" },
    { kanji: "学校", hiragana: "がっこう", romaji: "gakkou", meaning: "Sekolahan" },
    { kanji: "小学校", hiragana: "しょうがっこう", romaji: "shougakkou", meaning: "SD" },
    { kanji: "中学校", hiragana: "ちゅうがっこう", romaji: "chuugakkou", meaning: "SMP" },
    { kanji: "高校", hiragana: "こうこう", romaji: "koukou", meaning: "SMA" },
    { kanji: "大学", hiragana: "だいがく", romaji: "daigaku", meaning: "Universitas" },
    { kanji: "先生", hiragana: "せんせい", romaji: "sensei", meaning: "Guru" },
    { kanji: "学生", hiragana: "がくせい", romaji: "gakusei", meaning: "Murid, siswa" },
    { kanji: "年生", hiragana: "ねんせい", romaji: "nensei", meaning: "Kelas ~" },
    { kanji: "勉強", hiragana: "べんきょう", romaji: "benkyou", meaning: "Pelajaran" },
    { kanji: "文化", hiragana: "ぶんか", romaji: "bunka", meaning: "Kebudayaan" },
    { kanji: "音楽", hiragana: "おんがく", romaji: "ongaku", meaning: "Musik" },
    { kanji: "旅行", hiragana: "りょこう", romaji: "ryokou", meaning: "Wisata" },
    { kanji: "留学", hiragana: "りゅうがく", romaji: "ryuugaku", meaning: "Belajar di luar negeri" },
    { kanji: "友達", hiragana: "ともだち", romaji: "tomodachi", meaning: "Teman" },
    { kanji: "楽しい", hiragana: "たのしい", romaji: "tanoshii", meaning: "Gembira" },
    { kanji: "週", hiragana: "しゅう", romaji: "shuu", meaning: "Minggu" },
    { kanji: "回", hiragana: "かい", romaji: "kai", meaning: "Kali" },
    { kanji: "食べ物", hiragana: "たべもの", romaji: "tabemono", meaning: "Makanan" },
    { kanji: "飲物", hiragana: "のみもの", romaji: "nomimono", meaning: "Minuman" },
    { kanji: "お茶", hiragana: "おちゃ", romaji: "ocha", meaning: "Teh hijau" },
    { kanji: "お酒", hiragana: "おさけ", romaji: "osake", meaning: "Sake" },
    { kanji: "作ります", hiragana: "つくります", romaji: "tsukurimasu", meaning: "Membuat" },
    { kanji: "持っていきます", hiragana: "もっていきます", romaji: "motteikimasu", meaning: "Membawa pergi" },
    { kanji: "お願いします", hiragana: "おねがいします", romaji: "onegaishimasu", meaning: "Tolong" },
    { kanji: "料理", hiragana: "りょうり", romaji: "ryouri", meaning: "Masakan" },
    { kanji: "味", hiragana: "あじ", romaji: "aji", meaning: "Rasa" },
    { kanji: "色", hiragana: "いろ", romaji: "iro", meaning: "Warna" },
    { kanji: "野菜", hiragana: "やさい", romaji: "yasai", meaning: "Sayuran" },
    { kanji: "少し", hiragana: "すこし", romaji: "sukoshi", meaning: "Sedikit" },
    { kanji: "中", hiragana: "なか", romaji: "naka", meaning: "Dalam" },
    { kanji: "入っています", hiragana: "はいっています", romaji: "haitteimasu", meaning: "Masuk" },
    { kanji: "会社", hiragana: "かいしゃ", romaji: "kaisha", meaning: "Perusahaan" },
    { kanji: "本社", hiragana: "ほんしゃ", romaji: "honsha", meaning: "Kantor pusat" },
    { kanji: "支社", hiragana: "ししゃ", romaji: "shisha", meaning: "Kantor cabang" },
    { kanji: "出張", hiragana: "しゅっちょう", romaji: "shucchou", meaning: "Dinas luar kota" },
    { kanji: "空港", hiragana: "くうこう", romaji: "kuukou", meaning: "Bandara" },
    { kanji: "出発", hiragana: "しゅっぱつ", romaji: "shuppatsu", meaning: "Keberangkatan" },
    { kanji: "到着", hiragana: "とうちゃく", romaji: "touchaku", meaning: "Kedatangan" },
    { kanji: "午前", hiragana: "ごぜん", romaji: "gozen", meaning: "AM" },
    { kanji: "午後", hiragana: "ごご", romaji: "gogo", meaning: "PM" },
    { kanji: "自分", hiragana: "じぶん", romaji: "jibun", meaning: "Sendiri" },
    { kanji: "電話", hiragana: "でんわ", romaji: "denwa", meaning: "Telepon" },
    { kanji: "電気", hiragana: "でんき", romaji: "denki", meaning: "Listrik" },
    { kanji: "電車", hiragana: "でんしゃ", romaji: "densha", meaning: "Kereta" },
    { kanji: "車", hiragana: "くるま", romaji: "kuruma", meaning: "Mobil" },
    { kanji: "送ります", hiragana: "おくります", romaji: "okurimasu", meaning: "Mengirim" },
    { kanji: "使います", hiragana: "つかいます", romaji: "tsukaimasu", meaning: "Menggunakan" },
    { kanji: "借ります", hiragana: "かります", romaji: "karimasu", meaning: "Meminjam" },
    { kanji: "体", hiragana: "からだ", romaji: "karada", meaning: "Badan" },
    { kanji: "頭", hiragana: "あたま", romaji: "atama", meaning: "Kepala" },
    { kanji: "目", hiragana: "め", romaji: "me", meaning: "Mata" },
    { kanji: "口", hiragana: "くち", romaji: "kuchi", meaning: "Mulut" },
    { kanji: "耳", hiragana: "みみ", romaji: "mimi", meaning: "Telinga" },
    { kanji: "手", hiragana: "て", romaji: "te", meaning: "Tangan" },
    { kanji: "足", hiragana: "あし", romaji: "ashi", meaning: "Kaki" },
    { kanji: "上", hiragana: "うえ", romaji: "ue", meaning: "Atas" },
    { kanji: "下", hiragana: "した", romaji: "shita", meaning: "Bawah" },
    { kanji: "毎", hiragana: "まい", romaji: "mai", meaning: "Setiap" },
    { kanji: "毎朝", hiragana: "まいあさ", romaji: "maiasa", meaning: "Setiap pagi" },
    { kanji: "毎日", hiragana: "まいにち", romaji: "mainichi", meaning: "Setiap hari" },
    { kanji: "週末", hiragana: "しゅうまつ", romaji: "shuumatsu", meaning: "Akhir pekan" },
    { kanji: "元気", hiragana: "げんき", romaji: "genki", meaning: "Sehat" },
    { kanji: "外", hiragana: "そと", romaji: "soto", meaning: "Luar" },
    { kanji: "起きます", hiragana: "おきます", romaji: "okimasu", meaning: "Bangun tidur" },
    { kanji: "歩きます", hiragana: "あるきます", romaji: "arukimasu", meaning: "Berjalan" },
    { kanji: "走ります", hiragana: "はしります", romaji: "hashirimasu", meaning: "Berlari" },
    { kanji: "泳ぎます", hiragana: "およぎます", romaji: "oyogimasu", meaning: "Berenang" },
    { kanji: "お祝い", hiragana: "おいわい", romaji: "oiwai", meaning: "Perayaan" },
    { kanji: "誕生日", hiragana: "たんじょうび", romaji: "tanjoubi", meaning: "Ulang tahun" },
    { kanji: "結婚", hiragana: "けっこん", romaji: "kekkon", meaning: "Pernikahan" },
    { kanji: "絵", hiragana: "え", romaji: "e", meaning: "Gambar, lukisan" },
    { kanji: "写真", hiragana: "しゃしん", romaji: "shashin", meaning: "Foto" },
    { kanji: "時計", hiragana: "とけい", romaji: "tokei", meaning: "Jam" },
    { kanji: "着ます", hiragana: "きます", romaji: "kimasu", meaning: "Memakai pakaian" },
    { kanji: "先", hiragana: "せん", romaji: "sen", meaning: "Lalu" },
    { kanji: "先週", hiragana: "せんしゅう", romaji: "senshuu", meaning: "Minggu lalu" },
    { kanji: "今月", hiragana: "こんげつ", romaji: "kongetsu", meaning: "Bulan ini" },
    { kanji: "来年", hiragana: "らいねん", romaji: "rainen", meaning: "Tahun depan" },
    { kanji: "今年", hiragana: "ことし", romaji: "kotoshi", meaning: "Tahun ini" },
    { kanji: "去年", hiragana: "きょねん", romaji: "kyonen", meaning: "Tahun lalu" },
    { kanji: "家", hiragana: "いえ", romaji: "ie", meaning: "Rumah" },
    { kanji: "思います", hiragana: "おもいます", romaji: "omoimasu", meaning: "Mengira" },
    { kanji: "自己紹介", hiragana: "じこしょうかい", romaji: "jikoshoukai", meaning: "Perkenalan" },
    { kanji: "名前", hiragana: "なまえ", romaji: "namae", meaning: "Nama" },
    { kanji: "意味", hiragana: "いみ", romaji: "imi", meaning: "Arti" },
    { kanji: "本屋", hiragana: "ほんや", romaji: "honya", meaning: "Toko buku" },
    { kanji: "近く", hiragana: "ちかく", romaji: "chikaku", meaning: "Dekat" },
    { kanji: "住みます", hiragana: "すみます", romaji: "sumimasu", meaning: "Tinggal" },
    { kanji: "働きます", hiragana: "はたらきます", romaji: "hatarakimasu", meaning: "Bekerja" },
    { kanji: "番目", hiragana: "ばんめ", romaji: "banme", meaning: "Urutan yang ~" },
    { kanji: "兄", hiragana: "あに", romaji: "ani", meaning: "Kakak laki-laki (sendiri)" },
    { kanji: "お兄さん", hiragana: "おにいさん", romaji: "oniisan", meaning: "Kakak laki-laki (orang lain)" },
    { kanji: "姉", hiragana: "あね", romaji: "ane", meaning: "Kakak perempuan (sendiri)" },
    { kanji: "お姉さん", hiragana: "おねえさん", romaji: "oneesan", meaning: "Kakak perempuan (orang lain)" },
    { kanji: "弟", hiragana: "おとうと", romaji: "otouto", meaning: "Adik laki-laki (sendiri)" },
    { kanji: "妹", hiragana: "いもうと", romaji: "imouto", meaning: "Adik perempuan (sendiri)" },
    { kanji: "家族", hiragana: "かぞく", romaji: "kazoku", meaning: "Keluarga" },
    { kanji: "長い", hiragana: "ながい", romaji: "nagai", meaning: "Panjang" },
    { kanji: "短い", hiragana: "みじかい", romaji: "mijikai", meaning: "Pendek" },
    { kanji: "低い", hiragana: "ひくい", romaji: "hikui", meaning: "Rendah" },
    { kanji: "上手", hiragana: "じょうず", romaji: "jouzu", meaning: "Pandai" },
    { kanji: "歌", hiragana: "うた", romaji: "uta", meaning: "Lagu" },
    { kanji: "歌います", hiragana: "うたいます", romaji: "utaimasu", meaning: "Menyanyi" },
    { kanji: "客", hiragana: "きゃく", romaji: "kyaku", meaning: "Tamu" },
    { kanji: "注文", hiragana: "ちゅうもん", romaji: "chuumon", meaning: "Pesanan" },
    { kanji: "洋食", hiragana: "ようしょく", romaji: "youshoku", meaning: "Makanan barat" },
    { kanji: "和食", hiragana: "わしょく", romaji: "washoku", meaning: "Makanan Jepang" },
    { kanji: "牛肉", hiragana: "ぎゅうにく", romaji: "gyuuniku", meaning: "Daging sapi" },
    { kanji: "地方", hiragana: "ちほう", romaji: "chihou", meaning: "Daerah, wilayah" },
    { kanji: "有名", hiragana: "ゆうめい", romaji: "yuumei", meaning: "Terkenal" },
    { kanji: "生", hiragana: "なま", romaji: "nama", meaning: "Mentah" },
    { kanji: "冷たい", hiragana: "つめたい", romaji: "tsumetai", meaning: "Dingin (benda)" },
    { kanji: "ご飯", hiragana: "ごはん", romaji: "gohan", meaning: "Nasi" },
    { kanji: "塩", hiragana: "しお", romaji: "shio", meaning: "Garam" },
    { kanji: "全部", hiragana: "ぜんぶ", romaji: "zenbu", meaning: "Semua" },
    { kanji: "方", hiragana: "かた", romaji: "kata", meaning: "Cara" },
    { kanji: "食べ方", hiragana: "たべかた", romaji: "tabekata", meaning: "Cara makan" },
    { kanji: "暑い", hiragana: "あつい", romaji: "atsui", meaning: "Panas" },
    { kanji: "苦手", hiragana: "にがて", romaji: "nigate", meaning: "Susah, tidak begitu suka" },
    { kanji: "入れます", hiragana: "いれます", romaji: "iremasu", meaning: "Memasukkan" },
    { kanji: "木", hiragana: "き", romaji: "ki", meaning: "Pohon" },
    { kanji: "森", hiragana: "もり", romaji: "mori", meaning: "Hutan" },
    { kanji: "島", hiragana: "しま", romaji: "shima", meaning: "Pulau" },
    { kanji: "自然", hiragana: "しぜん", romaji: "shizen", meaning: "Alam" },
    { kanji: "船", hiragana: "ふね", romaji: "fune", meaning: "Kapal" },
    { kanji: "帰ります", hiragana: "かえります", romaji: "kaerimasu", meaning: "Pulang" },
    { kanji: "予約します", hiragana: "よやくします", romaji: "yoyakushimasu", meaning: "Memesan" },
    { kanji: "運転します", hiragana: "うんてんします", romaji: "untenshimasu", meaning: "Menyetir" },
    { kanji: "中", hiragana: "ちゅう/じゅう", romaji: "chuu/juu", meaning: "Sedang/dalam ~" },
    { kanji: "旅行中", hiragana: "りょこうちゅう", romaji: "ryokouchuu", meaning: "Sedang wisata" },
    { kanji: "観光地", hiragana: "かんこうち", romaji: "kankouchi", meaning: "Tempat wisata" },
    { kanji: "女性", hiragana: "じょせい", romaji: "josei", meaning: "Wanita" },
    { kanji: "男性", hiragana: "だんせい", romaji: "dansei", meaning: "Pria" },
    { kanji: "動物", hiragana: "どうぶつ", romaji: "doubutsu", meaning: "Hewan" },
    { kanji: "空気", hiragana: "くうき", romaji: "kuuki", meaning: "Udara" },
    { kanji: "集まります", hiragana: "あつまります", romaji: "atsumarimasu", meaning: "Berkumpul" },
    { kanji: "始まります", hiragana: "はじまります", romaji: "hajimarimasu", meaning: "Mulai" },
    { kanji: "終わります", hiragana: "おわります", romaji: "owarimasu", meaning: "Selesai" },
    { kanji: "中止します", hiragana: "ちゅうしします", romaji: "chuushishimasu", meaning: "Mengurungkan" },
    { kanji: "教えます", hiragana: "おしえます", romaji: "oshiemasu", meaning: "Memberitahu" },
    { kanji: "祭り", hiragana: "まつり", romaji: "matsuri", meaning: "Perayaan" },
    { kanji: "日本祭り", hiragana: "にほんまつり", romaji: "nihonmatsuri", meaning: "Perayaan Jepang" },
    { kanji: "会場", hiragana: "かいじょう", romaji: "kaijou", meaning: "Ruang pertemuan" },
    { kanji: "入場料", hiragana: "にゅうじょうりょう", romaji: "nyuujouryou", meaning: "Tarif masuk" },
    { kanji: "参加者", hiragana: "さんかしゃ", romaji: "sankasha", meaning: "Peserta" },
    { kanji: "急ぎます", hiragana: "いそぎます", romaji: "isogimasu", meaning: "Buru-buru" },
    { kanji: "決めます", hiragana: "きめます", romaji: "kimemasu", meaning: "Menentukan" },
    { kanji: "知ります", hiragana: "しります", romaji: "shirimasu", meaning: "Kenal, tahu" },
    { kanji: "正月", hiragana: "しょうがつ", romaji: "shougatsu", meaning: "Tahun baru" },
    { kanji: "年末", hiragana: "ねんまつ", romaji: "nenmatsu", meaning: "Akhir tahun" },
    { kanji: "年始", hiragana: "ねんし", romaji: "nenshi", meaning: "Awal tahun" },
    { kanji: "親", hiragana: "おや", romaji: "oya", meaning: "Orang tua" },
    { kanji: "忙しい", hiragana: "いそがしい", romaji: "isogashii", meaning: "Sibuk" },
    { kanji: "特別", hiragana: "とくべつ", romaji: "tokubetsu", meaning: "Istimewa" },
    { kanji: "帰国", hiragana: "きこく", romaji: "kikoku", meaning: "Pulang ke negara" },
    { kanji: "喜びます", hiragana: "よろこびます", romaji: "yorokobimasu", meaning: "Merasa senang" },
    { kanji: "幸せ", hiragana: "しあわせ", romaji: "shiawase", meaning: "Bahagia" },
    { kanji: "成長", hiragana: "せいちょう", romaji: "seichou", meaning: "Pertumbuhan" },
    { kanji: "長生き", hiragana: "ながいき", romaji: "nagaiki", meaning: "Umur panjang" },
    { kanji: "願い事", hiragana: "ねがいこと", romaji: "negaigoto", meaning: "Keinginan" },
    { kanji: "合格", hiragana: "ごうかく", romaji: "goukaku", meaning: "Lulus" },
    { kanji: "試験", hiragana: "しけん", romaji: "shiken", meaning: "Ujian" },
    { kanji: "大人", hiragana: "おとな", romaji: "otona", meaning: "Orang dewasa" },
    { kanji: "式", hiragana: "しき", romaji: "shiki", meaning: "Upacara" },
    { kanji: "市", hiragana: "し", romaji: "shi", meaning: "Kota" },
    { kanji: "商品", hiragana: "しょうひん", romaji: "shouhin", meaning: "Barang dagangan" },
    { kanji: "電気製品", hiragana: "でんきせいひん", romaji: "denkiseihin", meaning: "Peralatan listrik" },
    { kanji: "電子レンジ", hiragana: "でんしレンジ", romaji: "denshirenji", meaning: "Oven" },
    { kanji: "機", hiragana: "き", romaji: "ki", meaning: "Mesin" },
    { kanji: "店員", hiragana: "てんいん", romaji: "tenin", meaning: "Penjaga toko" },
    { kanji: "調子", hiragana: "ちょうし", romaji: "choushi", meaning: "Keadaan" },
    { kanji: "悪い", hiragana: "わるい", romaji: "warui", meaning: "Jelek" },
    { kanji: "動きます", hiragana: "うごきます", romaji: "ugokimasu", meaning: "Bergerak" },
    { kanji: "考えます", hiragana: "かんがえます", romaji: "kangaemasu", meaning: "Berfikir" },
    { kanji: "音", hiragana: "おと", romaji: "oto", meaning: "Suara" },
    { kanji: "出ます", hiragana: "でます", romaji: "demasu", meaning: "Keluar" },
    { kanji: "機能", hiragana: "きのう", romaji: "kinou", meaning: "Fungsi" },
    { kanji: "省エネ", hiragana: "しょうエネ", romaji: "shouene", meaning: "Penghematan energi" },
    { kanji: "日本製", hiragana: "にほんせい", romaji: "nihonsei", meaning: "Produk Jepang" },
    { kanji: "重い", hiragana: "おもい", romaji: "omoi", meaning: "Berat" },
    { kanji: "軽い", hiragana: "かるい", romaji: "karui", meaning: "Ringan" },
    { kanji: "静か", hiragana: "しずか", romaji: "shizuka", meaning: "Tenang" },
    { kanji: "早く", hiragana: "はやく", romaji: "hayaku", meaning: "Cepat" },
    { kanji: "方", hiragana: "ほう", romaji: "hou", meaning: "Arah" },
    { kanji: "洗います", hiragana: "あらいます", romaji: "araimasu", meaning: "Mencuci" },
    { kanji: "満足します", hiragana: "まんぞくします", romaji: "manzokushimasu", meaning: "Puas" },
    { kanji: "京都", hiragana: "きょうと", romaji: "kyouto", meaning: "Kyoto" },
    { kanji: "神社", hiragana: "じんじゃ", romaji: "jinja", meaning: "Kuil Shinto" },
    { kanji: "お寺", hiragana: "おてら", romaji: "otera", meaning: "Kuil" },
    { kanji: "仏教", hiragana: "ぶっきょう", romaji: "bukkyou", meaning: "Agama Budha" },
    { kanji: "歴史", hiragana: "れきし", romaji: "rekishi", meaning: "Sejarah" },
    { kanji: "世界", hiragana: "せかい", romaji: "sekai", meaning: "Dunia" },
    { kanji: "中心", hiragana: "ちゅうしん", romaji: "chuushin", meaning: "Pusat" },
    { kanji: "世紀", hiragana: "せいき", romaji: "seiki", meaning: "Abad" },
    { kanji: "的", hiragana: "てき", romaji: "teki", meaning: "Berbau ~, ke~an" },
    { kanji: "日本的", hiragana: "にほんてき", romaji: "nihonteki", meaning: "Berbau Jepang" },
    { kanji: "歴史的", hiragana: "れきしてき", romaji: "rekishiteki", meaning: "Bersejarah" },
    { kanji: "飲食", hiragana: "いんしょく", romaji: "inshoku", meaning: "Makan minum" },
    { kanji: "禁止", hiragana: "きんし", romaji: "kinshi", meaning: "Larangan" },
    { kanji: "説明", hiragana: "せつめい", romaji: "setsumei", meaning: "Penjelasan" },
    { kanji: "道具", hiragana: "どうぐ", romaji: "dougu", meaning: "Peralatan" },
    { kanji: "博物館", hiragana: "はくぶつかん", romaji: "hakubutsukan", meaning: "Museum" },
    { kanji: "必要", hiragana: "ひつよう", romaji: "hitsuyou", meaning: "Keperluan" },
    { kanji: "階", hiragana: "かい", romaji: "kai", meaning: "Lantai" },
    { kanji: "油", hiragana: "あぶら", romaji: "abura", meaning: "Minyak" },
    { kanji: "紙", hiragana: "かみ", romaji: "kami", meaning: "Kertas" },
    { kanji: "温度", hiragana: "おんど", romaji: "ondo", meaning: "Suhu" },
    { kanji: "活動", hiragana: "かつどう", romaji: "katsudou", meaning: "Kegiatan" },
    { kanji: "会議室", hiragana: "かいぎしつ", romaji: "kaigishitsu", meaning: "Ruang rapat" },
    { kanji: "寒い", hiragana: "さむい", romaji: "samui", meaning: "Dingin (suhu)" },
    { kanji: "出します", hiragana: "だします", romaji: "dashimasu", meaning: "Mengeluarkan" },
    { kanji: "度", hiragana: "ど", romaji: "do", meaning: "Derajat" },
    { kanji: "点", hiragana: "てん", romaji: "ten", meaning: "Nilai" },
    { kanji: "服", hiragana: "ふく", romaji: "fuku", meaning: "Baju" },
    { kanji: "自転車", hiragana: "じてんしゃ", romaji: "jitensha", meaning: "Sepeda" },
    { kanji: "自動車", hiragana: "じどうしゃ", romaji: "jidousha", meaning: "Mobil" },
    { kanji: "売ります", hiragana: "うります", romaji: "urimasu", meaning: "Menjual" },
    { kanji: "貸します", hiragana: "かします", romaji: "kashimasu", meaning: "Meminjamkan" },
    { kanji: "返します", hiragana: "かえします", romaji: "kaeshimasu", meaning: "Mengembalikan" },
    { kanji: "替わります", hiragana: "かわります", romaji: "kawarimasu", meaning: "Mengganti" },
    { kanji: "用", hiragana: "よう", romaji: "you", meaning: "Urusan" },
    { kanji: "子供用", hiragana: "こどもよう", romaji: "kodomoyou", meaning: "Urusan anak" },
    { kanji: "人生", hiragana: "じんせい", romaji: "jinsei", meaning: "Kehidupan" },
    { kanji: "歌手", hiragana: "かしゅ", romaji: "kashu", meaning: "Penyanyi" },
    { kanji: "選手", hiragana: "せんしゅ", romaji: "senshu", meaning: "Atlit" },
    { kanji: "画家", hiragana: "がか", romaji: "gaka", meaning: "Pelukis" },
    { kanji: "作家", hiragana: "さっか", romaji: "sakka", meaning: "Pengarang" },
    { kanji: "入学", hiragana: "にゅうがく", romaji: "nyuugaku", meaning: "Masuk sekolah" },
    { kanji: "卒業", hiragana: "そつぎょう", romaji: "sotsugyou", meaning: "Lulus" },
    { kanji: "病気", hiragana: "びょうき", romaji: "byouki", meaning: "Sakit" },
    { kanji: "若い", hiragana: "わかい", romaji: "wakai", meaning: "Muda" },
    { kanji: "生まれます", hiragana: "うまれます", romaji: "umaremasu", meaning: "Lahir" },
    { kanji: "思い出", hiragana: "おもいで", romaji: "omoide", meaning: "Kenangan" },
    { kanji: "生活", hiragana: "せいかつ", romaji: "seikatsu", meaning: "Kehidupan" },
    { kanji: "映画", hiragana: "えいが", romaji: "eiga", meaning: "Film" },
    { kanji: "夫", hiragana: "おっと", romaji: "otto", meaning: "Suami (sendiri)" },
    { kanji: "妻", hiragana: "つま", romaji: "tsuma", meaning: "Istri (sendiri)" },
    { kanji: "両親", hiragana: "りょうしん", romaji: "ryoushin", meaning: "Orang tua" },
    { kanji: "不便", hiragana: "ふべん", romaji: "fuben", meaning: "Tidak nyaman" },
    { kanji: "庭", hiragana: "にわ", romaji: "niwa", meaning: "Halaman" },
    { kanji: "親友", hiragana: "しんゆう", romaji: "shinyuu", meaning: "Teman karib" },
    { kanji: "恋愛", hiragana: "れんあい", romaji: "renai", meaning: "Percintaan" },
    { kanji: "相談", hiragana: "そうだん", romaji: "soudan", meaning: "Musyawarah" },
    { kanji: "心", hiragana: "こころ", romaji: "kokoro", meaning: "Hati" },
    { kanji: "心配", hiragana: "しんばい", romaji: "shinbai", meaning: "Khawatir" },
    { kanji: "不安", hiragana: "ふあん", romaji: "fuan", meaning: "Kegelisahan" },
    { kanji: "お客様", hiragana: "おきゃくさま", romaji: "okyaku sama", meaning: "Tamu" },
    { kanji: "手続き", hiragana: "てつづき", romaji: "tetsuzuki", meaning: "Prosedur" },
    { kanji: "飛行機", hiragana: "ひこうき", romaji: "hikouki", meaning: "Pesawat terbang" },
    { kanji: "変更", hiragana: "へんこう", romaji: "henkou", meaning: "Perubahan" },
    { kanji: "予定", hiragana: "よてい", romaji: "yotei", meaning: "Rencana" },
    { kanji: "利用", hiragana: "りよう", romaji: "riyou", meaning: "Penggunaan" },
    { kanji: "忘れ物", hiragana: "わすれもの", romaji: "wasuremono", meaning: "Benda tertinggal" },
    { kanji: "助けます", hiragana: "たすけます", romaji: "tasukemasu", meaning: "Menolong" },
    { kanji: "航空", hiragana: "こうくう", romaji: "koukuu", meaning: "Penerbangan" },
    { kanji: "便", hiragana: "びん", romaji: "bin", meaning: "Penerbangan" },
    { kanji: "体力", hiragana: "たいりょく", romaji: "tairyoku", meaning: "Kekuatan" },
    { kanji: "協力", hiragana: "きょうりょく", romaji: "kyouryoku", meaning: "Kerjasama" },
    { kanji: "担当", hiragana: "たんとう", romaji: "tantou", meaning: "Petugas" },
    { kanji: "報告", hiragana: "ほうこく", romaji: "houkoku", meaning: "Melapor" },
    { kanji: "連絡", hiragana: "れんらく", romaji: "renraku", meaning: "Menghubungi" },
    { kanji: "募集", hiragana: "ぼしゅう", romaji: "boshū", meaning: "Penerimaan" },
    { kanji: "輸出", hiragana: "ゆしゅつ", romaji: "yushutsu", meaning: "Ekspor" },
    { kanji: "輸入", hiragana: "ゆにゅう", romaji: "yunyuu", meaning: "Impor" },
    { kanji: "会話", hiragana: "かいわ", romaji: "kaiwa", meaning: "Percakapan" },
    { kanji: "形", hiragana: "かたち", romaji: "katachi", meaning: "Bentuk" },
    { kanji: "漢字", hiragana: "かんじ", romaji: "kanji", meaning: "Kanji" },
    { kanji: "答え", hiragana: "こたえ", romaji: "kotae", meaning: "Jawaban" },
    { kanji: "質問", hiragana: "しつもん", romaji: "shitsumon", meaning: "Pertanyaan" },
    { kanji: "正しい", hiragana: "ただしい", romaji: "tadashii", meaning: "Benar" },
    { kanji: "読解", hiragana: "どっかい", romaji: "dokkai", meaning: "Bacaan" },
    { kanji: "表現", hiragana: "ひょうげん", romaji: "hyougen", meaning: "Pengucapan" },
    { kanji: "文", hiragana: "ぶん", romaji: "bun", meaning: "Kalimat" },
    { kanji: "文型", hiragana: "ぶんけい", romaji: "bunkei", meaning: "Pola kalimat" },
    { kanji: "文法", hiragana: "ぶんぽう", romaji: "bunpou", meaning: "Tata bahasa" },
    { kanji: "もう一度", hiragana: "もういちど", romaji: "mouichido", meaning: "Sekali lagi" },
    { kanji: "例", hiragana: "れい", romaji: "rei", meaning: "Contoh" },
    { kanji: "練習", hiragana: "れんしゅう", romaji: "renshuu", meaning: "Latihan" },
    { kanji: "枚", hiragana: "まい", romaji: "mai", meaning: "Lembar" },
    { kanji: "今週", hiragana: "こんしゅう", romaji: "konshuu", meaning: "Minggu ini" },
    { kanji: "今度", hiragana: "こんど", romaji: "kondo", meaning: "Lain kali" },
    { kanji: "横", hiragana: "よこ", romaji: "yoko", meaning: "Sebelah" },
    { kanji: "押します", hiragana: "おします", romaji: "oshimasu", meaning: "Menekan" },
    { kanji: "引きます", hiragana: "ひきます", romaji: "hikimasu", meaning: "Menarik" },
    { kanji: "温泉", hiragana: "おんせん", romaji: "onsen", meaning: "Pemandian air panas" },
    { kanji: "来週", hiragana: "らいしゅう", romaji: "raishuu", meaning: "Minggu depan" },
    { kanji: "犬", hiragana: "いぬ", romaji: "inu", meaning: "Anjing" },
    { kanji: "夕方", hiragana: "ゆうがた", romaji: "yuugata", meaning: "Sore" },
    { kanji: "季節", hiragana: "きせつ", romaji: "kisetsu", meaning: "Musim" },
    { kanji: "昨日", hiragana: "きのう", romaji: "kinou", meaning: "Kemarin" },
    { kanji: "明日", hiragana: "あした", romaji: "ashita", meaning: "Besok" },
    { kanji: "食堂", hiragana: "しょくどう", romaji: "shokudou", meaning: "Kantin" },
    { kanji: "銀行", hiragana: "ぎんこう", romaji: "ginkou", meaning: "Bank" },
    { kanji: "受付", hiragana: "うけつけ", romaji: "uketsuke", meaning: "Resepsionis" },
    { kanji: "門", hiragana: "もん", romaji: "mon", meaning: "Pintu gerbang" },
    { kanji: "登ります", hiragana: "のぼります", romaji: "noborimasu", meaning: "Mendaki" },
    { kanji: "教科書", hiragana: "きょうかしょ", romaji: "kyoukasho", meaning: "Buku panduan" },
    { kanji: "教室", hiragana: "きょうしつ", romaji: "kyoushitsu", meaning: "Ruang kelas" },
    { kanji: "参加します", hiragana: "さんかします", romaji: "sankashimasu", meaning: "Berpartisipasi" },
    { kanji: "用意します", hiragana: "よういします", romaji: "youishimasu", meaning: "Menyiapkan" },
    { kanji: "豚肉", hiragana: "ぶたにく", romaji: "butaniku", meaning: "Daging babi" },
    { kanji: "皿", hiragana: "さら", romaji: "sara", meaning: "Piring" },
    { kanji: "お湯", hiragana: "おゆ", romaji: "oyu", meaning: "Air panas" },
    { kanji: "調理方法", hiragana: "ちょうりほうほう", romaji: "chourihouhou", meaning: "Cara memasak" },
    { kanji: "甘い", hiragana: "あまい", romaji: "amai", meaning: "Manis" },
    { kanji: "辛い", hiragana: "からい", romaji: "karai", meaning: "Pedas" },
    { kanji: "数字", hiragana: "すうじ", romaji: "suuji", meaning: "Angka" },
    { kanji: "机", hiragana: "つくえ", romaji: "tsukue", meaning: "Meja" },
    { kanji: "都合", hiragana: "つごう", romaji: "tsugou", meaning: "Keadaan" },
    { kanji: "用事", hiragana: "ようじ", romaji: "youji", meaning: "Keperluan" },
    { kanji: "氏名", hiragana: "しめい", romaji: "shimei", meaning: "Nama lengkap" },
    { kanji: "理由", hiragana: "りゆう", romaji: "riyuu", meaning: "Alasan" },
    { kanji: "別に", hiragana: "べつに", romaji: "betsuni", meaning: "Beda-beda" },
    { kanji: "連絡先", hiragana: "れんらくさき", romaji: "renrakusaki", meaning: "Alamat yang dapat dihubungi" },
    { kanji: "吸います", hiragana: "すいます", romaji: "suimasu", meaning: "Menghisap" },
    { kanji: "取ります", hiragana: "とります", romaji: "torimasu", meaning: "Mengambil" },
    { kanji: "伝えます", hiragana: "つたえます", romaji: "tsutaemasu", meaning: "Menyampaikan" },
    { kanji: "熱", hiragana: "ねつ", romaji: "netsu", meaning: "Demam" },
    { kanji: "薬", hiragana: "くすり", romaji: "kusuri", meaning: "Obat" },
    { kanji: "医者", hiragana: "いしゃ", romaji: "isha", meaning: "Dokter" },
    { kanji: "才", hiragana: "さい", romaji: "sai", meaning: "Umur" },
    { kanji: "眠い", hiragana: "ねむい", romaji: "nemui", meaning: "Ngantuk" },
    { kanji: "記入します", hiragana: "きにゅうします", romaji: "kinyuushimasu", meaning: "Mengisi di kertas" },
    { kanji: "顔", hiragana: "かお", romaji: "kao", meaning: "Wajah" },
    { kanji: "泣きます", hiragana: "なきます", romaji: "nakimasu", meaning: "Menangis" },
    { kanji: "会計", hiragana: "かいけい", romaji: "kaikei", meaning: "Pembayaran" },
    { kanji: "電話番号", hiragana: "でんわばんごう", romaji: "denwabangou", meaning: "Nomor telepon" },
    { kanji: "牛乳", hiragana: "ぎゅうにゅう", romaji: "gyuunyuu", meaning: "Susu sapi" },
    { kanji: "禁煙", hiragana: "きんえん", romaji: "kinen", meaning: "Larangan merokok" },
    { kanji: "自由", hiragana: "じゆう", romaji: "jiyuu", meaning: "Bebas" },
    { kanji: "切ります", hiragana: "きります", romaji: "kirimasu", meaning: "Memotong" },
    { kanji: "焼きます", hiragana: "やきます", romaji: "yakimasu", meaning: "Memanggang" },
    { kanji: "旅館", hiragana: "りょかん", romaji: "ryokan", meaning: "Penginapan" },
    { kanji: "遊びます", hiragana: "あそびます", romaji: "asobimasu", meaning: "Bermain" },
    { kanji: "調べます", hiragana: "しらべます", romaji: "shirabemasu", meaning: "Memeriksa" },
    { kanji: "事故", hiragana: "じこ", romaji: "jiko", meaning: "Kecelakaan" },
    { kanji: "故障", hiragana: "こしょう", romaji: "koshou", meaning: "Kerusakan" },
    { kanji: "指定席", hiragana: "していせき", romaji: "shiteiseki", meaning: "Tempat duduk ditetapkan" },
    { kanji: "光ります", hiragana: "ひかります", romaji: "hikarimasu", meaning: "Bersinar" },
    { kanji: "お知らせ", hiragana: "おしらせ", romaji: "oshirase", meaning: "Pengumuman" },
    { kanji: "水道", hiragana: "すいどう", romaji: "suidou", meaning: "Ledeng" },
    { kanji: "工事", hiragana: "こうじ", romaji: "kouji", meaning: "Konstruksi" },
    { kanji: "場合", hiragana: "ばあい", romaji: "baai", meaning: "apabila" },
    { kanji: "条件", hiragana: "じょうけん", romaji: "jouken", meaning: "Syarat-syarat" },
    { kanji: "開きます", hiragana: "ひらきます", romaji: "hirakimasu", meaning: "Membuka" },
    { kanji: "生産します", hiragana: "せいさんします", romaji: "seisanshimasu", meaning: "Memproduksi" },
    { kanji: "体験", hiragana: "たいけん", romaji: "taiken", meaning: "Percobaan" },
    { kanji: "国際交流", hiragana: "こくさいこうりゅう", romaji: "kokusaikouryuu", meaning: "Pertukaran budaya internasional" },
    { kanji: "申し込みます", hiragana: "もうしこみます", romaji: "moushikomimasu", meaning: "Melamar/Mendaftar" },
    { kanji: "昨年", hiragana: "さくねん", romaji: "sakunen", meaning: "Tahun lalu" },
    { kanji: "毎年", hiragana: "まいとし", romaji: "maitoshi", meaning: "Setiap tahun" },
    { kanji: "袋", hiragana: "ふくろ", romaji: "fukuro", meaning: "Kantong plastik" },
    { kanji: "店長", hiragana: "てんちょう", romaji: "tenchou", meaning: "Manajer toko" },
    { kanji: "全員", hiragana: "ぜんいん", romaji: "zenin", meaning: "Semuanya" },
    { kanji: "習慣", hiragana: "しゅうかん", romaji: "shuukan", meaning: "Kebiasaan" },
    { kanji: "普通", hiragana: "ふつう", romaji: "futsuu", meaning: "Biasa" },
    { kanji: "暗い", hiragana: "くらい", romaji: "kurai", meaning: "Gelap" },
    { kanji: "怒ります", hiragana: "おこります", romaji: "okorimasu", meaning: "Marah" },
    { kanji: "入院します", hiragana: "にゅういんします", romaji: "nyuuin shimasu", meaning: "Masuk rumah sakit" },
    { kanji: "退院します", hiragana: "たいいんします", romaji: "taiin shimasu", meaning: "Keluar rumah sakit" },
    { kanji: "急に", hiragana: "きゅうに", romaji: "kyuuni", meaning: "Tiba-tiba" },
    { kanji: "営業します", hiragana: "えいぎょうします", romaji: "eigyou shimasu", meaning: "Buka" },
    { kanji: "案内します", hiragana: "あんないします", romaji: "annai shimasu", meaning: "Memandu" },
    { kanji: "値段", hiragana: "ねだん", romaji: "nedan", meaning: "Harga" },
    { kanji: "価格", hiragana: "かかく", romaji: "kakaku", meaning: "Harga" },
    { kanji: "消費税", hiragana: "しょうひぜい", romaji: "shouhizei", meaning: "Pajak konsumen" },
    { kanji: "税別", hiragana: "ぜいべつ", romaji: "zeibetsu", meaning: "Harga belum termasuk pajak" },
    { kanji: "図書館", hiragana: "としょかん", romaji: "toshokan", meaning: "Perpustakaan" },
    { kanji: "開きます", hiragana: "あきます", romaji: "akimasu", meaning: "Terbuka" },
    { kanji: "閉まります", hiragana: "しまります", romaji: "shimarimasu", meaning: "Tertutup" },
    { kanji: "利用します", hiragana: "りようします", romaji: "riyou shimasu", meaning: "Menggunakan" },
    { kanji: "窓口", hiragana: "まどぐち", romaji: "madoguchi", meaning: "Konter" },
    { kanji: "郵便局", hiragana: "ゆうびんきょく", romaji: "yuubinkyoku", meaning: "Kantor pos" },
    { kanji: "近所", hiragana: "きんじょ", romaji: "kinjo", meaning: "Tetangga" },
    { kanji: "自動", hiragana: "じどう", romaji: "jidou", meaning: "Otomatis" },
    { kanji: "危険", hiragana: "きけん", romaji: "kiken", meaning: "Bahaya" },
    { kanji: "種類", hiragana: "しゅるい", romaji: "shurui", meaning: "Jenis" },
    { kanji: "消します", hiragana: "けします", romaji: "keshimasu", meaning: "Memadamkan" },
    { kanji: "捨てます", hiragana: "すてます", romaji: "sutemasu", meaning: "Membuang" },
    { kanji: "分けます", hiragana: "わけます", romaji: "wakemasu", meaning: "Membagi" },
    { kanji: "燃えます", hiragana: "もえます", romaji: "moemasu", meaning: "Terbakar" },
    { kanji: "設定します", hiragana: "せっていします", romaji: "settei shimasu", meaning: "Mengeset" },
    { kanji: "地震", hiragana: "じしん", romaji: "jishin", meaning: "Gempa" },
    { kanji: "台風", hiragana: "たいふう", romaji: "taifuu", meaning: "Angin topan" },
    { kanji: "声", hiragana: "こえ", romaji: "koe", meaning: "Suara" },
    { kanji: "大切な", hiragana: "たいせつな", romaji: "taisetsuna", meaning: "Penting" },
    { kanji: "進みます", hiragana: "すすみます", romaji: "susumimasu", meaning: "Rekomendasi" },
    { kanji: "授業", hiragana: "じゅぎょう", romaji: "jugyou", meaning: "Pelajaran" },
    { kanji: "大変な", hiragana: "たいへんな", romaji: "taihenna", meaning: "Berat" },
    { kanji: "困ります", hiragana: "こまります", romaji: "komarimasu", meaning: "Susah" },
    { kanji: "違います", hiragana: "ちがいます", romaji: "chigaimasu", meaning: "Salah" },
    { kanji: "慣れます", hiragana: "なれます", romaji: "naremasu", meaning: "Terbiasa" },
    { kanji: "増えます", hiragana: "ふえます", romaji: "fuemasu", meaning: "Bertambah" },
    { kanji: "笑います", hiragana: "わらいます", romaji: "waraimasu", meaning: "Tertawa" },
    { kanji: "苦労します", hiragana: "くろうします", romaji: "kurou shimasu", meaning: "Bersusah-payah" },
    { kanji: "希望", hiragana: "きぼう", romaji: "kibou", meaning: "Harapan" },
    { kanji: "特に", hiragana: "とくに", romaji: "tokuni", meaning: "Terutama" },
    { kanji: "建てます", hiragana: "たてます", romaji: "tatemasu", meaning: "Mendirikan" },
    { kanji: "続けます", hiragana: "つづけます", romaji: "tsuzukemasu", meaning: "Melanjutkan" },
    { kanji: "役に立ちます", hiragana: "やくにたちます", romaji: "yakunitachimasu", meaning: "Bermanfaat" }
];

// DOM Elements
const searchInput = document.getElementById("searchInput");
const shuffleBtn = document.getElementById("shuffleBtn");
const kanjiGrid = document.getElementById("kanjiGrid");
const totalKanji = document.getElementById("totalKanji");
const tampilKanji = document.getElementById("tampilKanji");
const levelDisplay = document.getElementById("levelDisplay");

// Tampilkan data awal
displayKanji(kanjiData);

// Event listeners
searchInput.addEventListener("input", filterKanji);
shuffleBtn.addEventListener("click", shuffleKanji);

// Fungsi untuk menampilkan kanji dalam grid
function displayKanji(data) {
    kanjiGrid.innerHTML = "";
    
    data.forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "kanji-card";
        card.innerHTML = `
            <span class="kanji-number">#${index + 1}</span>
            <span class="kanji-char">${item.kanji}</span>
            <span class="kanji-hiragana">${item.hiragana}</span>
            <span class="kanji-romaji">${item.romaji}</span>
            <span class="kanji-meaning">${item.meaning}</span>
        `;
        kanjiGrid.appendChild(card);
    });
    
    // Update statistik
    totalKanji.textContent = kanjiData.length;
    tampilKanji.textContent = data.length;
    if (levelDisplay) {
        levelDisplay.textContent = "JFT";
    }
}

// Fungsi untuk memfilter kanji
function filterKanji() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        displayKanji(kanjiData);
        return;
    }
    
    const filteredData = kanjiData.filter(item => 
        item.kanji.includes(searchTerm) || 
        item.hiragana.includes(searchTerm) ||
        item.romaji.toLowerCase().includes(searchTerm) ||
        item.meaning.toLowerCase().includes(searchTerm)
    );
    
    displayKanji(filteredData);
}

// Fungsi untuk mengacak urutan kanji
function shuffleKanji() {
    const shuffledData = [...kanjiData];
    for (let i = shuffledData.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
    }
    displayKanji(shuffledData);
}

// ============================================
// MUSIK PLAYER - FIX BUG
// ============================================
const audio = document.getElementById('audioPlayer');
const speakerBtn = document.getElementById('speakerBtn');

// Ganti dengan file musik Anda
const songFile = "365akb48.mp3";

let isPlaying = false;
let audioStarted = false;

// Set lagu
audio.src = songFile;
audio.loop = true;

// Fungsi mulai audio (pertama kali)
function startAudio() {
    if (audioStarted) return;
    
    audio.play().then(() => {
        isPlaying = true;
        audioStarted = true;
        speakerBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
        speakerBtn.classList.remove('muted');
        speakerBtn.classList.add('playing');
        console.log('🎵 Musik mulai diputar!');
    }).catch(e => {
        console.log('⏳ Auto play di-block, menunggu interaksi user...');
    });
}

// Fungsi toggle play/pause (ON/OFF)
function togglePlayPause() {
    if (!audioStarted) {
        startAudio();
        return;
    }

    if (isPlaying) {
        audio.pause();
        isPlaying = false;
        speakerBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
        speakerBtn.classList.remove('playing');
        speakerBtn.classList.add('muted');
    } else {
        audio.play().catch(e => console.log('Error play:', e));
        isPlaying = true;
        speakerBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
        speakerBtn.classList.add('playing');
        speakerBtn.classList.remove('muted');
    }
}

// ============================================
// EVENT LISTENERS
// ============================================

// Saat halaman dimuat, speaker merah dan coba play
window.addEventListener('load', () => {
    speakerBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    speakerBtn.classList.remove('playing');
    speakerBtn.classList.add('muted');
    startAudio();
});

// Klik pertama di mana saja akan memulai musik
document.addEventListener('click', function firstClick() {
    if (!audioStarted) {
        startAudio();
        document.removeEventListener('click', firstClick);
    }
});

// Klik tombol speaker
speakerBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    togglePlayPause();
});

// ============================================
// HENTIKAN MUSIK SAAT PAGE DITUTUP / DI-REFRESH
// ============================================
window.addEventListener('beforeunload', function() {
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
        isPlaying = false;
    }
});

// Hentikan musik saat tab tidak aktif
document.addEventListener('visibilitychange', function() {
    if (document.hidden && isPlaying) {
        audio.pause();
        isPlaying = false;
        speakerBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
        speakerBtn.classList.remove('playing');
        speakerBtn.classList.add('muted');
    }
});

console.log('🎌 613 Kanji JFT siap dipelajari!');
console.log(`📚 Total kanji: ${kanjiData.length}`);
console.log('🔊 Klik tombol speaker untuk ON/OFF musik');
console.log('🔇 Musik akan otomatis berhenti saat halaman ditutup');