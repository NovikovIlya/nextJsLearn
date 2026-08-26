export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <header className="flex items-center justify-between px-6 py-4 max-w-5xl mx-auto">
        <span className="text-xl font-bold">Brand</span>
        <nav className="space-x-4 text-sm text-gray-600">
          <a href="#" className="hover:text-black">Features</a>
          <a href="#" className="hover:text-black">Pricing</a>
          <a href="#" className="hover:text-black">About</a>
        </nav>
      </header>

      <section className="text-center px-6 py-24 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Build something amazing
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          A simple, fast and modern platform to launch your next product.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#"
            className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800"
          >
            Get started
          </a>
          <a
            href="#"
            className="border border-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-white"
          >
            Learn more
          </a>
        </div>
      </section>

      <section className="grid gap-6 px-6 py-16 max-w-5xl mx-auto sm:grid-cols-3">
        {["Fast", "Secure", "Scalable"].map((f) => (
          <div key={f} className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-2">{f}</h3>
            <p className="text-sm text-gray-600">
              Everything you need to grow your business, out of the box.
            </p>
          </div>
        ))}
      </section>

      <footer className="text-center text-sm text-gray-500 py-8">
        © {new Date().getFullYear()} Brand. All rights reserved.
      </footer>
    </main>
  );
}
