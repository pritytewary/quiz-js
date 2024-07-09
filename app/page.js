import Link from "next/link";

export default function Home() {
  return (
    <main className="p-4">
      <div>
        <h1 className="text-white">Quiz App</h1>
        <Link href={"/quiz"}>
          <button className="p-4 mt-3 text-lg rounded-md cursor-pointer bg-gray-500 text-white w-full">
            Start Quiz
          </button>
        </Link>
      </div>
    </main>
  );
}
