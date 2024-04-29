"use server";
import { redirect } from "next/navigation";
import { getUserData } from "@/utils/clerk";
import { supabase, IDiary } from "@/utils/supabase";
import { Redirect } from "next";

//! Create new diary action
export const createDiaryAction = async (
  formData: FormData
): Promise<Redirect> => {
  const content = formData.get("content") as string; // get content berupa(string diharapakan) dari form textarea
  const { avatar, email, username } = await getUserData(); // get user data, akan mengambil avatar, email, atau username
  const data: IDiary = { content, email, username, avatar }; // data yg ditampilkan content isi diary/content, email atau username, dan avatar
  await supabase.from("diary").insert(data); // insert data(Menyimpan/Menambahkan data ke database) ke tabel diary
  redirect("/dashboard/my-diary"); // redirect(diarahkan) ke halaman my-diary
};
