function HeroSection() {
  return (
    <section className="px-30 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 items-center gap-8">
        {/* Text Section (3/5 width) */}
        <div className="md:col-span-3 text-indigo-600">
          <span className="text-xs font-semibold uppercase block mb-2">Resume Checker</span>
          <h1 className="text-6xl font-semibold text-gray-800 dark:text-white leading-snug">
            Is your resume <span className="inline">good</span><br />enough?
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg mt-4 pr-30">
            A free and fast AI resume checker doing 16 crucial checks to ensure
            your resume is ready to perform and get you interview callbacks.
          </p>
        </div>

        {/* Image Section (2/5 width) */}
        <div className="md:col-span-2 flex justify-center">
          <img
            src="/HeroSection.svg"
            alt="AI Resume Checker"
            className="max-w-full h-auto mix-blend-multiply"
          />
        </div>
      </div>
    </section>
  );
}
export default HeroSection;