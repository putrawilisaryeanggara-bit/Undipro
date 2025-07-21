const ebooks = [
  {
    id: 1,
    title: "Panduan Hidup Sehat",
    description: "Tips dan strategi menjaga kesehatan jasmani dan mental.",
    image: "/images/ebook1.jpg",
  },
  {
    id: 2,
    title: "Rahasia Bisnis Sukses",
    description: "Strategi membangun bisnis dari nol hingga sukses.",
    image: "/images/ebook2.jpg",
  },
  {
    id: 3,
    title: "Cara Mengatur Keuangan Pribadi",
    description: "Teknik budgeting dan mengelola keuangan harian.",
    image: "/images/ebook3.jpg",
  },
  {
    id: 4,
    title: "Mengasah Kreativitas",
    description: "Latihan dan metode untuk meningkatkan kreativitas.",
    image: "/images/ebook4.jpg",
  },
  {
    id: 5,
    title: "Menjadi Produktif Setiap Hari",
    description: "Cara mengatur waktu dan menghindari prokrastinasi.",
    image: "/images/ebook5.jpg",
  },
  {
    id: 6,
    title: "Belajar Investasi untuk Pemula",
    description: "Panduan mudah memulai investasi aman dan menguntungkan.",
    image: "/images/ebook6.jpg",
  },
  {
    id: 7,
    title: "Parenting di Era Digital",
    description: "Tips mendidik anak di tengah perkembangan teknologi.",
    image: "/images/ebook7.jpg",
  },
  {
    id: 8,
    title: "Mengelola Stres dan Emosi",
    description: "Teknik relaksasi dan manajemen stres yang efektif.",
    image: "/images/ebook8.jpg",
  },
  {
    id: 9,
    title: "Dasar-dasar Desain Interior",
    description: "Panduan dekorasi rumah sederhana dan elegan.",
    image: "/images/ebook9.jpg",
  },
  {
    id: 10,
    title: "Menulis Konten Menarik",
    description: "Rahasia membuat tulisan yang menjual dan memikat.",
    image: "/images/ebook10.jpg",
  },
];

export default function EbookPage() {
  return (
    <main className="min-h-screen bg-black text-white py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-yellow-400 mb-12">Daftar E-Book</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {ebooks.map((ebook) => (
          <div
            key={ebook.id}
            className="bg-zinc-900 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={ebook.image}
              alt={ebook.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-yellow-300 mb-2">{ebook.title}</h2>
              <p className="text-sm text-gray-300 mb-4">{ebook.description}</p>
              <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-lg">
                Beli Sekarang - Rp49.000
              </button>
              <p className="text-xs text-gray-400 mt-2 text-center">Bonus 2 kupon undian</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
