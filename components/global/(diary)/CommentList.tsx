import { IComments, supabase } from "@/utils/supabase"; // Mengimpor interface IComments dan objek supabase dari utilitas supabase
import Image from "next/image"; // Mengimpor modul Image dari Next.js untuk menampilkan gambar dengan optimal
import React from "react"; // Mengimpor modul React untuk membuat komponen React

// Definisi tipe props yang diterima oleh komponen CommentList
type ParamsProps = {
  diary_id: number; // Properti diary_id dengan tipe number
};

// Deklarasi komponen CommentList sebagai sebuah fungsi asynchronous
const CommentList = async ({ diary_id }: ParamsProps) => {
  // Memanggil API supabase untuk mendapatkan data diary berdasarkan diary_id
  const { data, error } = await supabase
    .from("diary") // Mengambil data dari tabel "diary"
    .select() // Mengambil semua kolom
    .eq("id", diary_id) // Memfilter data berdasarkan kolom "id" yang sesuai
    .single(); // Mengambil satu baris data saja yg difilter

  // Menangani kasus ketika terjadi error saat mengambil data
  if (error) return <p>please reload the page...</p>;

  // Menangani kasus ketika tidak ada komentar yang ditemukan untuk diary ini
  if (!data.comments?.length) return null;

  // Mengonversi tanggal yang diposting menjadi format yang lebih mudah dibaca
  // get time
  // Mengembalikan elemen JSX untuk menampilkan daftar komentar
  return (
    <div className="flex flex-col gap-4">
      <div className="divider"></div>

      {/* Mengiterasi melalui setiap komentar dalam data.comments */}
      {data.comments.map((comment: IComments) => {
        return (
          <div className="chat chat-start" key={comment.comment_id}>
            <div className="chat-image avatar">
              <div className="w-12 rounded-full">
                <Image
                  src={comment.avatar as string}
                  alt={comment.avatar as string}
                  width={60}
                  height={60}
                />
              </div>
            </div>
            <div className="chat-header font-semibold text-md flex">
              <p className="text-md xl:ml-2 md:ml-0 mt-3">
                {comment.username || comment.email}
              </p>
              {/* <i className="text-xs opacity-50 mt-4 ml-1">
                | <PostTime past_time={data.comment.created_at} />
              </i> */}
            </div>
            <div className="chat-bubble">{comment.content}</div>
            <div className="chat-footer opacity-50">Delivered</div>
          </div>

          // <div
          //   className="ml-4 card card-body card-bordered p-4 bg-base-200"
          //   key={comment.comment_id} // Menggunakan comment_id sebagai key untuk setiap komentar
          // >
          //   <div className="xl:flex md:grid-cols-1 ">
          //     {/* Menampilkan avatar pengguna yang memberi komentar */}
          //     <Image
          //       src={comment.avatar as string}
          //       alt={comment.avatar as string}
          //       width={60}
          //       height={60}
          //       className="rounded-full bg-primary"
          //     />
          //     {/* Menampilkan nama pengguna atau email yang memberi komentar */}
          //     <p className="text-md xl:ml-2 md:ml-0 mt-3">
          //       {comment.username || comment.email}
          //     </p>
          //   </div>
          //   {/* Menampilkan tanggal posting komentar dalam format yang telah diformat sebelumnya */}
          //   <i className="text-sm font-light">{formattedDate}</i>
          //   {/* Menampilkan isi komentar */}
          //   <div className="chat chat-start">
          //     <div className="chat-header">Message sent</div>
          //     <div className="chat-bubble">{comment.content}</div>
          //     <div className="chat-footer opacity-50">Seen</div>
          //   </div>
          // </div>
        );
      })}
      <div className="divider"></div>
    </div>
  );
};

export default CommentList; // Mengekspor komponen CommentList agar dapat digunakan di tempat lain dalam aplikasi React
