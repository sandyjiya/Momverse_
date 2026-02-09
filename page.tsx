export default function Home() {
  return (
    <main className="px-6 py-20 text-center">
      <h1 className="text-4xl font-bold">Motherhood isn’t meant to be lonely.</h1>
      <p className="mt-4 text-lg">A global village for pregnant women & nursing mothers.</p>
      <div className="mt-8 flex justify-center gap-4">
        <a href="/ask" className="btn-primary">Ask a Question</a>
        <a href="/quizzes" className="btn-secondary">Take a Fun Quiz</a>
      </div>
    </main>
  );
}
