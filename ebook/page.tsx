import Image from "next/image";

const ebooks = [
  {
    id: 1,
    title: "Rahasia Sukses Finansial",
    description: "Strategi sederhana membangun masa depan keuangan yang lebih baik.",
    image: "/ebook/1.jpg",
  },
  {
    id: 2,
    title: "Bisnis Online dari Nol",
    description: "Panduan praktis memulai bisnis online meski tanpa modal besar.",
    image: "/ebook/2.jpg",
  },
  {
    id: 3,
    title: "Manajemen Waktu Efektif",
    description: "Kelola waktu lebih baik untuk hasil kerja yang maksimal.",
    image: "/ebook/3.jpg",
  },
  {
    id: 4,
    title: "Cara Cepat Mengatur Keuangan Rumah Tangga",
    description: "Teknik mudah mengatur pengeluaran dan pemasukan harian.",
    image: "/ebook/4.jpg",
  },
  {
    id: 5,
    title: "Menghasilkan Uang dari Hobi",
    description: "Ubah hobi menjadi peluang bisnis yang menjanjikan.",
    image: "/ebook/5.jpg",
  },
  {
    id: 6,
    title: "Panduan Investasi Pemula",
    description: "Langkah awal memahami investasi dengan risiko minim.",
    image: "/ebook/6.jpg",
  },
  {
    id: 7,
    title: "Membangun Personal Branding",
    description: "Jadilah pribadi yang dikenal dan dipercaya orang.",
    image: "/ebook/7.jpg",
  },
  {
    id: 8,
    title: "Strategi Usaha Kuliner Rumahan",
    description: "Mulai usaha makanan dari rumah dengan modal kecil.",
    image: "/ebook/8.jpg",
  },
  {
    id: 9,
    title: "Rahasia Pemasaran Digital",
    description: "Teknik promosi online agar produk cepat dikenal.",
    image: "/ebook/9.jpg",
  },
  {
    id: 10,
    title: "Menjadi Freelancer Sukses",
    description: "Cara mendapatkan klien dan penghasilan dari rumah.",
    image: "/ebook/10.jpg",
  },
];

export default function EbookPage() {
  return (
    <main className="bg-white text-black min-h-screen py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-10 text-yellow-500">
        Daftar E-Book UndiPro
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {ebooks.map((ebook) => (
          <div key={ebook.id} className="border border-gray-300 rounded-2xl shadow-lg p-4 bg-white">
            <Image
              src={ebook.image}
              alt={`Ebook ${ebook.id}`}
              width={500}
              height={300}
              className="w-full h-auto rounded-xl mb-4"
            />
            <h2 className="text-xl font-bold text-yellow-600">{ebook.title}</h2>
            <p className="text-gray-700 my-2">{ebook.description}</p>
            <p className="font-semibold text-black">
              Rp49.000 + 2 Kupon Undian
            </p>
            <button className="mt-3 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded w-full">
              Beli Sekarang
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
