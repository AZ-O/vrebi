export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-8">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tight bg-gradient-to-r from-white via-purple-300 to-cyan-300 bg-clip-text text-transparent">
        Vrebi
      </h1>

      <p className="mt-6 max-w-2xl text-center text-xl text-zinc-400">
        Your AI Life Operating System.
      </p>

      <button className="mt-10 rounded-full bg-white px-8 py-4 text-black font-semibold hover:scale-105 transition">
        Join the Waitlist →
      </button>
    </main>
  );
}