export default function Navbar() {
  return (
    <nav className="p-4 shadow bg-white flex justify-between">
      <a href="/" className="font-bold text-pink-600">MomVerse</a>
      <div className="flex gap-4">
        <a href="/explore">Explore</a>
        <a href="/ask">Ask</a>
        <a href="/quizzes">Quizzes</a>
      </div>
    </nav>
  );
}
