import { createClient } from "@supabase/supabase-js"; // Mengimpor fungsi createClient dari supabase-js untuk membuat klien Supabase
import { UUID } from "crypto"; // Mengimpor tipe UUID dari modul crypto untuk digunakan dalam ID komentar

// Membuat klien Supabase menggunakan URL dan kunci rahasia yang disediakan dari variabel lingkungan
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string, // URL Supabase (dipublikasikan)
  process.env.SUPABASE_SECRET_KEY as string // Kunci rahasia Supabase
);

// Definisi interface IDiary untuk menentukan bentuk data diary
export interface IDiary {
  diary_id?: number; // ID diary (opsional)
  content: string; // Konten diary
  email: string | undefined; // Alamat email pengguna
  username?: string | null; // Nama pengguna (opsional)
  avatar: string | undefined; // URL avatar pengguna
  created_at?: string; // Tanggal pembuatan diary (opsional)
  comments?: Array<IComments>; // Komentar-komentar yang terkait dengan diary ini
}

// Definisi interface IComments yang merupakan turunan dari IDiary untuk menentukan bentuk data komentar
export interface IComments extends IDiary {
  comment_id: UUID; // ID unik untuk komentar
}
