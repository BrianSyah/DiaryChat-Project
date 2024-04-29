import CreateCommentForm from "@/components/auth/CreateCommentForm";
import CommentList from "@/components/global/(diary)/CommentList";
import Wrapper from "@/components/global/Wrapper";
import { supabase } from "@/utils/supabase";
import Image from "next/image";
import React from "react";

/* Dengan cara ini, Anda memberikan petunjuk kepada TypeScript bahwa fungsi page akan menerima objek dengan struktur yang sesuai dengan yang didefinisikan 
dalam tipe ParamsProps, yang akan memiliki properti params yang berisi objek dengan properti id bertipe number. */
type ParamsProps = {
  params: {
    id: number;
  };
};

// Komponent Diary Detail
const page = async ({ params }: ParamsProps) => {
  // mengambil data tabel diary berdasarkan id
  const { data, error } = await supabase // get data from supabase
    .from("diary") // from diary table
    .select() // select all
    .eq("id", params.id) // where id = params(sesuai idnya)
    .single(); // get only one

  if (error) return <p>Please reload the page...</p>; // error handling
  const posted_time = new Date(data.created_at).toLocaleTimeString(); // get time
  const posted_date = new Date(data.created_at).toLocaleDateString(); // get date

  return (
    <Wrapper>
      {/* Diary Content Detail */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col mx-auto justify-center">
          <Image
            src={data.avatar}
            alt={data.avatar}
            width={250}
            height={250}
            className="rounded-md"
          />
          <i className="text-center font-light">Posted at {posted_time}</i>
          <i className="text-center text-sm font-light">{posted_date}</i>
        </div>
        {/* Tampilkan email atau username */}
        <h3 className="italic xl:text-xl font-semibold">
          ~{data.username || data.email}
        </h3>
        <p className="text-lg font-extrabold">{data.content}</p>
        {/* Comment Page */}
        <CommentList diary_id={data.id} />
        {/*  */}
        <CreateCommentForm diary_id={data.id} />
      </div>
    </Wrapper>
  );
};

export default page;
