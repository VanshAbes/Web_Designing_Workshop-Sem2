function App() {
  return (
    <div className="bg-gray-200 min-h-screen flex justify-center items-center p-4">

      {/* Main Container */}
      <div className="w-full max-w-6xl border-2 border-black bg-white">

        {/* Navbar */}
        <nav className="bg-slate-800 text-white flex justify-between items-center px-6 py-4">

          <h1 className="text-3xl font-bold">
            FitLife
          </h1>

          <ul className="flex gap-6 text-sm">
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">Programs</a></li>
            <li><a href="#" className="hover:text-gray-300">Trainers</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact</a></li>
          </ul>

        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-200 to-indigo-400 text-center py-24">

          <h2 className="text-5xl font-bold text-white mb-6">
            Transform Your Body & Mind
          </h2>

          <p className="text-white text-lg mb-8">
            Join FitLife today and achieve your fitness goals with expert trainers.
          </p>

          <button className="bg-white px-6 py-3 rounded-lg font-semibold shadow-md hover:scale-105 transition">
            Join Now
          </button>

        </section>

        {/* Programs Section */}
        <section className="py-20 px-6 bg-gray-100">

          <h2 className="text-4xl font-bold text-center mb-14">
            Our Programs
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {/* Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md text-center">

              <h3 className="text-red-500 text-2xl font-bold mb-4">
                Weight Training
              </h3>

              <p className="text-gray-700">
                Build strength and muscle with guided weight training programs.
              </p>

            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md text-center">

              <h3 className="text-red-500 text-2xl font-bold mb-4">
                Yoga Classes
              </h3>

              <p className="text-gray-700">
                Improve flexibility and mental wellness through yoga sessions.
              </p>

            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md text-center">

              <h3 className="text-red-500 text-2xl font-bold mb-4">
                Diet Plans
              </h3>

              <p className="text-gray-700">
                Personalized diet plans to complement your fitness routine.
              </p>

            </div>

          </div>

        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-blue-200 to-indigo-400 text-white text-center py-8">

          <p className="mb-2">
            © 2026 FitLife | All Rights Reserved
          </p>

          <p>
            Contact: info@fitlife.com
          </p>

        </footer>

      </div>

    </div>
  )
}

export default App