export default function EbookPage() {
  const ebooks = [
    {
      id: 1,
      title: "Ebook 1 - Sukses di Era Digital",
      description: "Panduan lengkap membangun bisnis online dari nol.",
      image: "/images/ebook1.jpg",
    },
    {
      id: 2,
      title: "Ebook 2 - Rahasia Investasi Aman",
      description: "Strategi investasi jangka panjang yang terbukti berhasil.",
      image: "/images/ebook2.jpg",
    },
    {
      id: 3,
      title: "Ebook 3 - Hidup Sehat Alami",
      description: "Tips sehat tanpa obat berbahan kimia.",
      image: "/images/ebook3.jpg",
    },
    {
      id: 4,
      title: "Ebook 4 - Menjadi Freelancer Sukses",
      description: "Langkah-langkah praktis membangun karier sebagai freelancer.",
      image: "/images/ebook4.jpg",
    },
    {
      id: 5,
      title: "Ebook 5 - Jago Public Speaking",
      description: "Cara percaya diri berbicara di depan umum.",
      image: "/images/ebook5.jpg",
    },
    {
      id: 6,
      title: "Ebook 6 - Memulai Usaha Kuliner",
      description: "Ide dan strategi memulai bisnis makanan rumahan.",
      image: "/images/ebook6.jpg",
    },
    {
      id: 7,
      title: "Ebook 7 - Pintar Mengatur Keuangan",
      description: "Cara cerdas mengelola penghasilan bulanan.",
      image: "/images/ebook7.jpg",
    },
    {
      id: 8,
      title: "Ebook 8 - Strategi Belajar Efektif",
      description: "Teknik belajar cepat dan tidak membosankan.",
      image: "/images/ebook8.jpg",
    },
    {
      id: 9,
      title: "Ebook 9 - Rahasia Jualan Laris di Sosmed",
      description: "Cara promosi yang terbukti menarik banyak pembeli.",
      image: "/images/ebook9.jpg",
    },
    {
      id: 10,
      title: "Ebook 10 - Mengatasi Stres & Cemas",
      description: "Latihan sederhana untuk pikiran tenang dan fokus.",
      image: "/images/ebook10.jpg",
    },
  ];

  return (
    <main className="bg-white min-h-screen py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Daftar E-Book
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {ebooks.map((ebook) => (
          <div
            key={ebook.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200"
          >
            <img
              src={ebook.image}
              alt={ebook.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{ebook.title}</h2>
              <p className="text-gray-700 text-sm mb-4">{ebook.description}</p>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded w-full">
                Beli Sekarang - Rp49.000
              </button>
              <p className="text-xs text-center mt-2 text-gray-500">Bonus 2 Kupon Undian</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
