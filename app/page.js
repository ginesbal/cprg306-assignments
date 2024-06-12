export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='z-10 max-w-5xl w-full items-center justify-between text-sm'>
        <h1 className="text-3xl font-bold mb-6">CPRG 306: Web Development 2 - Assignments</h1>
        <div className=" text-lg">
          <ul>
              <li className="hover:underline">
                <a href ="/week-2">Week 2 Assignment</a>
              </li>
              <li className="hover:underline">
                <a href ="/week-3">Week 3 Assignment</a>
              </li>
              <li className="hover:underline">
                <a href ="/week-4">Week 4 Assignment</a>
              </li>
              <li className="hover:underline">
                <a href ="/week-5">Week 5 Assignment</a>
              </li>
            </ul>
          </div>
        </div>
    </main>
  );
}
