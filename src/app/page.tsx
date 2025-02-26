import Navbar from "@/components/navbar";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

export default async function Home({ searchParams }: { searchParams?: { showAll?: string } }) {
  // Fetch data dari API
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  // Cek apakah query parameter showAll=true
  const showAll = searchParams?.showAll === "true";

  // Jika showAll true, tampilkan semua data, kalau tidak hanya 10 data pertama
  const visiblePosts = showAll ? posts : posts.slice(0, 10);

  return (
    <div className="h-screen">
      <Navbar />
      <div className="container mx-auto px-10 mt-10">
        <Table className="border border-gray-300 text-center font-semibold text-sm">
          <TableHeader className="border-b border-gray-300 ">
            <TableRow className="border-b text-center border-gray-300 bg-zinc-900 hover:bg-zinc-900 text-white">
              <TableHead className="w-[100px] border border-gray-300 text-center">No</TableHead>
              <TableHead className="border border-gray-300 text-center">Title</TableHead>
              <TableHead className="border border-gray-300 text-center">Body</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {visiblePosts.map((post: any, index: number) => (
              <TableRow key={post.id} className="border-b border-gray-300">
                <TableCell className="font-medium border border-gray-300 text-center">
                  {index + 1}
                </TableCell>
                <TableCell className="border border-gray-300 text-center">{post.title}</TableCell>
                <TableCell className="border border-gray-300 text-center">{post.body}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Tombol Lihat Semua Data */}
        <div className="text-center mt-8 pb-20">
          <Link
            href={showAll ? "/" : "/?showAll=true"}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            {showAll ? "Sembunyikan Data" : "Lihat Semua Data"}
          </Link>
        </div>
      </div>
    </div>
  );
}
