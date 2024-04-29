import React from "react";
import PostContent from "./PostContent";
import { supabase } from "@/utils/supabase";

const CardDiaries = async (): Promise<React.ReactElement> => {
  // Tampilan Card Diary Page Utama
  const { data, error } = await supabase
    .from("diary")
    .select()
    .order("created_at", { ascending: false });
  if (error) return <p>Please reload the page...</p>;

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {/* Looping data dri supabase berdesarkan Komponen PostContent*/}
      {data.map((diary) => (
        // Komponen PostContent
        <PostContent
          key={diary.id}
          diary_id={diary.id}
          avatar={diary.avatar}
          username={diary.username}
          email={diary.email}
          content={diary.content}
        />
      ))}
    </div>
  );
};

export default CardDiaries;
