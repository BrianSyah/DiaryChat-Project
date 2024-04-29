import React, { ReactElement } from "react"; // Mengimpor modul React dan ReactElement dari React untuk membuat komponen React

// Mendefinisikan tipe props yang diterima oleh komponen Wrapper
type ParamsProps = {
  title?: string; // Properti opsional title dengan tipe string
  children?: React.ReactNode; // Properti opsional children dengan tipe ReactElement
};

// Deklarasi komponen Wrapper
const Wrapper = ({ title, children }: ParamsProps): ReactElement => {
  return (
    // Membungkus konten dalam sebuah section dengan kelas CSS untuk styling
    <section className="container mx-auto px-4">
      {/* Menampilkan judul (jika disediakan) di tengah halaman */}
      <h1 className="text-center text-xl mb-8">{title}</h1>
      {/* Menampilkan konten yang dilewatkan sebagai children */}
      {children}
    </section>
  );
};

export default Wrapper; // Mengekspor komponen Wrapper agar dapat digunakan di tempat lain dalam aplikasi React
