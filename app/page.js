import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">CPRG 306: Web Development 2 - Assignments</h1>
      <nav className=" flex flex-col">
        <Link href="/week-2" className="hover:underline">
          Week 2 Assignment
        </Link>
        <Link href="/week-3"className="hover:underline">
          Week 3 Assignment
        </Link>
        <Link href="/week-4" className="hover:underline">
          Week 4 Assignment
        </Link>
      </nav>
    </main>
  );
}
