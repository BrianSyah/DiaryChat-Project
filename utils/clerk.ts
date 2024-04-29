import { currentUser } from "@clerk/nextjs/server"; // Mengimpor fungsi currentUser dari Clerk untuk mendapatkan informasi pengguna saat ini

// Definisi interface IUser untuk menentukan bentuk data pengguna
export interface IUser {
  email: string | undefined; // Alamat email pengguna
  username?: string | null | undefined; // Nama pengguna (opsional)
  avatar: string | undefined; // URL avatar pengguna
}

// Fungsi async getUserData untuk mendapatkan informasi pengguna saat ini
export const getUserData = async (): Promise<IUser> => {
  // Mendapatkan informasi pengguna saat ini menggunakan fungsi currentUser dari Clerk
  const user = await currentUser();

  // Mendapatkan alamat email pengguna dari emailAddresses (jika tersedia)
  const email = user?.emailAddresses[0].emailAddress;

  // Mendapatkan nama pengguna pengguna (jika tersedia)
  const username = user?.username;

  // Mendapatkan URL avatar pengguna (jika tersedia)
  const avatar = user?.imageUrl;

  // Mengembalikan objek dengan informasi pengguna yang telah diperoleh
  return { email, username, avatar };
};
