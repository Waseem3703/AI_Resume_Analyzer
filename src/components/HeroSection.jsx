import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa6";

function HeroSection() {
  const [resumeFile, setResumeFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const maxSize = 2 * 1024 * 1024;
    const allowedTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

    if (!allowedTypes.includes(file.type)) {
      alert("Only PDF and DOCX files are allowed.");
      return;
    }

    if (file.size > maxSize) {
      alert("File size should be less than 2MB.");
      return;
    }

    setResumeFile(file);
    setLoading(true);

    // Simulate analysis (mock logic)
    setTimeout(() => {
      const fakeAnalysis = {
        format: "Good",
        length: "Too Long",
        hardSkills: ["JavaScript", "React", "Node.js"],
        softSkills: ["Teamwork", "Communication"],
        design: "Clean",
        buzzwords: ["detail-oriented", "self-starter"],
      };

      setLoading(false);
      navigate("/result", { state: { analysis: fakeAnalysis } });
    }, 2000);
  };
  return (
    <section className="px-6 sm:px-8 md:px-30 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 items-center gap-8">
        <div className="md:col-span-3">
          <span className="text-indigo-600 dark:text-gray-300 text-xs uppercase block mt-4 sm:mt-6">
            Resume Checker
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-800 dark:text-white leading-snug mt-4 sm:mt-6">
            Is your resume good enough?
          </h1>

          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mt-4 ">
            A free and fast AI resume checker doing 16 crucial checks to ensure <br />
            your resume is ready to perform and get you interview callbacks.
          </p>

          {/* Upload Box */}
          <div className="w-full p-6 max-w-sm mt-6 text-center border border-dashed border-[#249a71] rounded-lg bg-gray-50 dark:bg-gray-800">
            {loading ? (
              <div className="text-green-600 text-sm font-medium animate-pulse">Analyzing your resume...</div>
            ) : (
              <form className="space-y-4">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Drop your resume here or click to upload.
                  <br />
                  <span className="text-gray-500 dark:text-gray-400">
                    PDF & DOCX only. Max 2MB file size.
                  </span>
                </p>

                <label
                  htmlFor="resume-upload"
                  className="inline-block bg-[#249a71] text-white font-medium px-6 py-2 rounded cursor-pointer hover:bg-green-700 transition"
                >
                  Upload Your Resume
                </label>

                <input
                  type="file"
                  id="resume-upload"
                  accept=".pdf"
                  onChange={handleFileUpload}
                  className="hidden"
                />

                <p className="flex items-center gap-2 justify-center text-sm text-gray-600 dark:text-gray-400">
                  <FaLock className="text-gray-500" />
                  Privacy Protected
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Image Section */}
        <div className="md:col-span-2 flex justify-center mt-10 md:mt-0">
          <img
            src="/HeroSection.svg"
            alt="AI Resume Checker"
            className="max-w-full h-auto w-4/5 sm:w-3/4 md:w-full mix-blend-multiply"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
