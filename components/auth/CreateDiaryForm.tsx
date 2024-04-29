import React from "react";
import { createDiaryAction } from "@/actions/createDiaryAction";

// CreateDiaryForm
const CreateDiaryForm = (): React.ReactElement => {
  return (
    <form
      action={createDiaryAction} // submit createDiaryAction function, aksi yg dijalankan ketika membuat diary baru
      className="flex flex-col gap-4 max-w-xl mx-auto"
    >
      <textarea
        placeholder="isi diary kamu disini..."
        className="h-52 p-4 text-lg border border-primary textarea"
        name="content" // berfungsi sebagai penanda atau identifikasi untuk nilai yang dimasukkan ke dalam textarea tersebut.
        required
      />
      <button className="btn btn-primary" type="submit">
        Create Now
      </button>
    </form>
  );
};

export default CreateDiaryForm;
