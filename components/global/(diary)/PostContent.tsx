import React from "react"; // Mengimpor modul React untuk membuat komponen React
import Image from "next/image"; // Mengimpor modul Image dari Next.js untuk menampilkan gambar dengan optimal
import { IDiary } from "@/utils/supabase"; // Mengimpor interface IDiary dari utilitas supabase untuk menentukan tipe properti yang diterima oleh komponen ini
import Link from "next/link"; // Mengimpor modul Link dari Next.js untuk menangani navigasi di aplikasi React

// Deklarasi komponen PostContent dengan menerima properti dari tipe IDiary
const PostContent = ({
  diary_id, // ID diary
  avatar, // Avatar pengguna
  content, // Konten diary
  username, // Nama pengguna
  email, // Email pengguna
}: IDiary): React.ReactElement => {
  return (
    <div className="card card-body card-bordered shadow-lg bg-base-300 cursor-pointer duration-300 ease-in-out hover:shadow-xl hover:bg-secondary hover:scale-105 h-72">
      {/* Menggunakan komponen Link untuk membuat link ke halaman detail diary */}
      <div className="flex items-center gap-4">
        <Image
          src={avatar as string} // Sumber gambar avatar
          alt={avatar as string} // Teks alternatif untuk avatar
          width={50} // Lebar gambar
          height={50} // Tinggi gambar
          className="rounded-full bg-primary object-fit" // Menambahkan kelas CSS untuk styling gambar
        />
        {/* Menampilkan nama pengguna atau email sebagai judul posting */}
        <p className="font-semibold text-lg">{username || email}</p>
      </div>
      {/* Menampilkan konten diary/isi diary tersebut */}
      <p className="overflow-y-auto text-md">{content}</p>
      <div className="flex justify-end items-end mt-auto">
        <Link
          href={`/diary/${diary_id}`} // Mengarahkan link ke halaman diary spesifik berdasarkan diary_id
          className="btn btn-secondary" // Menambahkan kelas CSS untuk styling link dan efek hover
        >
          Comment
        </Link>
      </div>
    </div>
  );
};

export default PostContent; // Mengekspor komponen PostContent agar dapat digunakan di tempat lain dalam aplikasi React
