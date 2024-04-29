import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"; // Mengimpor clerkMiddleware dan createRouteMatcher dari Clerk untuk menangani middleware otentikasi

// Membuat matcher untuk rute-rute yang dilindungi (protected routes)
const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);

// Ekspor middleware clerkMiddleware untuk menangani otentikasi
export default clerkMiddleware(
  (auth, req) => {
    // Memeriksa apakah rute saat ini adalah rute yang dilindungi
    if (isProtectedRoute(req)) auth().protect();
  },
  { afterSignInUrl: "/dashboard" } // Setelah pengguna berhasil masuk, arahkan ke rute /dashboard
);

// Konfigurasi untuk middleware
export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)", // Jangan jalankan middleware pada file statis
    "/", // Jalankan middleware pada halaman indeks
    "/(api|trpc)(.*)", // Jalankan middleware pada rute API
  ],
};
