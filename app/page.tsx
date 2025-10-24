export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 text-black dark:bg-black dark:text-white font-sans">
      <main className="text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">Welcome to CC Site</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Your creative credit solutions, simplified and secure.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="px-6 py-3 bg-black text-white rounded-md hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition"
          >
            View Services
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-zinc-400 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
          >
            Contact Us
          </a>
        </div>
      </main>
      <footer className="absolute bottom-6 text-sm text-zinc-500 dark:text-zinc-400">
        © {new Date().getFullYear()} CC Site. All rights reserved.
      </footer>
    </div>
  )
}
