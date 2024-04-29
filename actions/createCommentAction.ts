"use server";

import { getUserData } from "@/utils/clerk";
import { IComments, supabase } from "@/utils/supabase";
import { randomUUID } from "crypto";
import { Redirect } from "next";
import { redirect } from "next/navigation";

//! Create new comment acton
export const createCommentAction = async (
  formData: FormData
): Promise<Redirect> => {
  const content = formData.get("content") as string; // get content berupa(string diharapakan) dari form textarea
  const diary_id = formData.get("diary_id"); // get diary_id from element input
  const comment_id = randomUUID(); // menghasilkan random uuid, akan menjadi Id comment
  const { avatar, email, username } = await getUserData(); // get data from function getUserData{avatar, email, usernam}

  const data: IComments = { comment_id, avatar, email, username, content }; // Data Komentar yg akan di tambahkan
  //! Memeriksa/Menampilkan komen terahir terlebih dahulu,
  const getComment = await supabase
    .from("diary") // connect from diary table database
    .select("comments") // get columns("comments") from table "diary" database
    .eq("id", diary_id) // get entri dengan ID yg sesuai dengan diary_id
    .single(); // Saya meminta supabase untuk mendapatkan satu baris data saja yg sama yaitu "id", diary_id
  const existingComment: Array<IComments> = getComment.data?.comments || [];
  //! tambahkan komen baru ke object comment sebelumnya yang ada di database
  const newComment = [...existingComment, data];
  await supabase
    .from("diary") // send data to table diary
    .update({ comments: newComment }) // update data new comment to colums comments
    .eq("id", diary_id); // get entri data, add new id colums, then it will be adjusted(Sesuaikan) to diary_id
  redirect(`/diary/${diary_id}`); // After the data has been successfully processed/added then navigate/redirect to (`/diary/${diary_id}`
};
