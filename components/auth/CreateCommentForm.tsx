"use client";

import React, { RefObject, useRef } from "react";
import { createCommentAction } from "@/actions/createCommentAction";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

type ParamsProps = {
  diary_id: number;
};

const CreateCommentForm = ({ diary_id }: ParamsProps) => {
  const formRef: RefObject<HTMLFormElement> = useRef<HTMLFormElement>(null);

  const { isSignedIn } = useAuth();

  /*
  Dengan cara ini, setelah pengguna mengirimkan komentar, formulir akan secara otomatis 
  direset setelah 1 detik, sehingga pengguna dapat dengan mudah menulis komentar 
  baru tanpa harus secara manual menghapus isian sebelumnya.
  */
  const resetForm = (): void => {
    setTimeout(() => {
      formRef.current?.reset();
    }, 1000);
  };

  // Page Form Comment/Komentar
  return (
    <form
      action={createCommentAction} // aksi yg jalankan ketika buat komentar
      className="flex flex-col gap-4 mx-auto w-full"
      onSubmit={resetForm} // aksi yg akan dijalankan jika form di submit
      ref={formRef} // digunakan untuk refrensi ke elment form, 'formRef' didefinisikan menggunakan useRef untuk membuat referensi ke elemen HTML yang akan diakses dalam komponen tersebut.
    >
      <textarea
        placeholder="tuliskan komentarmu disini..."
        className="h-52 p-4 text-lg border border-primary textarea"
        name="content" // berfungsi sebagai penanda atau identifikasi untuk nilai yang dimasukkan ke dalam textarea tersebut.
        required
      />
      {/* Input Hidden: Element di sembunyikan, 
      value={diary_id}:  Nilai ini mungkin digunakan sebagai identifikasi diary yang berkaitan dengan komentar yang akan dibuat, 
      name="diary_id":  Nilai ini mungkin digunakan sebagai identifikasi diary yang berkaitan dengan komentar yang akan dibuat. */}
      <input type="hidden" value={diary_id} name="diary_id" />
      {!isSignedIn ? (
        <Link href="/sign-in">
          <div className="flex justify-center">
            <button
              className="btn btn-primary max-w-sm mx-auto w-full"
              type="submit"
            >
              Login for Comment
            </button>
          </div>
        </Link>
      ) : (
        <button
          className="btn btn-primary max-w-sm mx-auto w-full"
          type="submit"
        >
          Comment Now
        </button>
      )}
    </form>
  );
};

export default CreateCommentForm;
