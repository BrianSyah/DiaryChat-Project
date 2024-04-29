import React from "react";
import PostContent from "@/components/global/(diary)/PostContent";
import Wrapper from "@/components/global/Wrapper";
import { supabase } from "@/utils/supabase";
import { getUserData } from "@/utils/clerk";

// Page My Diary
const page = async (): Promise<React.ReactElement> => {
  const { email } = await getUserData(); // get user data email from clerk

  // get data from supabase
  const { data, error } = await supabase
    .from("diary") // connect from diary table
    .select() // select all
    .order("created_at", { ascending: false }) // order by created_at, descending menampilkan data query terbaru (Menurun)
    .eq("email", email);
  /* .eq("email", email); Berguna untuk menyaring data berdasarkan email, ketika seorang login kembali dengan email yg sama
    maka tampilkan data query yg sudah user input sebelumnya
    */

  // error handling
  if (error) return <p>Please reload the page...</p>;

  return (
    // Card Diary
    <Wrapper title="My Diary">
      <div className="grid md:grid-cols-3 gap-4">
        {/* Looping data */}
        {data.map((diary) => {
          return (
            // Tampilkan data Seuai Komponen PostContent
            <PostContent
              key={diary.id}
              diary_id={diary.id}
              avatar={diary.avatar}
              content={diary.content}
              email={diary.email}
              username={diary.username}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

export default page;
