// File Path: pages/index.js

import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>FOSServe - Digitalizing Educational Institutions</title>
        <meta
          name="description"
          content="Explore FOSServe, a program by FOSS Andhra Foundation, offering innovative solutions to digitalize educational institutions with free and open-source software."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <header className="bg-blue-500 text-white p-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">FOSServe</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="#modules">Modules</Link>
              </li>
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-6">
        <section className="text-center py-10">
          <h2 className="text-4xl font-bold">Revolutionizing Education with FOSServe</h2>
          <p className="mt-4 text-lg text-gray-600">
            FOSServe is a flagship initiative by FOSS Andhra Foundation, aiming to digitalize educational institutions through cutting-edge free and open-source solutions.
          </p>
        </section>

        <section id="modules" className="py-10">
          <h3 className="text-3xl font-bold mb-6">Our Modules</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "FOSS Campus Manage",
                description:
                  "Transform college administration with streamlined and automated processes for maximum efficiency.",
              },
              {
                title: "FOSS Admission CRM",
                description:
                  "Digitize the college admissions process with advanced features and a seamless experience.",
              },
              {
                title: "FOSSFee",
                description:
                  "Revolutionize fee collection with online payments, automated reminders, and financial transparency.",
              },
              {
                title: "FOSS Exam Management",
                description:
                  "Simplify exam management with enhanced security and efficient result processing.",
              },
              {
                title: "FOSSHR",
                description:
                  "Streamline HR processes and boost productivity with advanced technology.",
              },
              {
                title: "FOSS Hostel Management",
                description:
                  "Ensure a well-organized hostel environment and enhance student living experiences.",
              },
              {
                title: "FOSS LMS",
                description:
                  "Empower academic institutions with innovative tools for exceptional learning experiences.",
              },
              {
                title: "FOSS Transport",
                description:
                  "Enhance college transportation with real-time tracking and efficient route planning.",
              },
            ].map((module, index) => (
              <div key={index} className="border rounded-lg p-4 shadow-md">
                <h4 className="text-xl font-semibold mb-2">{module.title}</h4>
                <p className="text-gray-600">{module.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="py-10 bg-gray-100">
          <h3 className="text-3xl font-bold mb-4">About FOSServe</h3>
          <p className="text-gray-700">
            FOSServe is a comprehensive program dedicated to transforming educational institutions by harnessing the power of free and open-source software. Our mission is to simplify operations, enhance productivity, and create a seamless experience for all stakeholders in the education ecosystem.
          </p>
        </section>

        <section id="contact" className="py-10">
          <h3 className="text-3xl font-bold mb-4">Contact Us</h3>
          <p className="text-gray-700 mb-4">
            Have questions or want to learn more about FOSServe? Reach out to us today!
          </p>
          <form className="grid gap-4 max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              className="border p-2 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border p-2 rounded"
            />
            <textarea
              placeholder="Your Message"
              className="border p-2 rounded h-32"
            ></textarea>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
              Submit
            </button>
          </form>
        </section>
      </main>

      <footer className="bg-blue-500 text-white text-center p-4">
        <p>&copy; {new Date().getFullYear()} FOSS Andhra Foundation. All rights reserved.</p>
      </footer>
    </div>
  );
}
