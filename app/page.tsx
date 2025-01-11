import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="text-center mb-20">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-6">
            FOSServe: Democratizing Digital Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital workspace solutions for NGOs and small businesses.
          </p>
        </header>

        <main>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <article className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center">
                  🎯
                </span>
                Assessment and Planning
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                  Understanding organizational needs
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                  Identifying appropriate FOSS solutions
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                  Creating implementation roadmaps
                </li>
              </ul>
            </article>

            <article className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center">
                  🚀
                </span>
                Implementation
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                  Setting up Linux-based systems
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                  Configuring productivity tools
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                  Establishing collaboration platforms
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                  Implementing "Open Source AI Tools Andhra Pradesh"
                </li>
              </ul>
            </article>

            <article className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center">
                  👥
                </span>
                Training and Support
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                  Conducting hands-on workshops
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                  Providing technical documentation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                  Offering ongoing maintenance
                </li>
              </ul>
            </article>

            <article className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center">
                  💰
                </span>
                Cost Optimization
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                  Replacing expensive proprietary software
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                  Reducing licensing costs
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                  Maximizing resource efficiency
                </li>
              </ul>
            </article>
          </section>
        </main>

        <footer className="flex flex-wrap items-center justify-center gap-8">
          <a
            className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow text-gray-700 hover:text-indigo-600"
            href="https://fosserve.org/learn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={20}
              height={20}
            />
            Learn More
          </a>
          <a
            className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow text-gray-700 hover:text-indigo-600"
            href="https://fosserve.org/contact"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/contact.svg"
              alt="Contact icon"
              width={20}
              height={20}
            />
            Contact Us
          </a>
        </footer>
      </div>
    </div>
  );
}
