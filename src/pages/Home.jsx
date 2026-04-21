import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50">
      {/* Quiz Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-4">
            Mavjud Testlar
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            O'zingizga mos testni tanlang
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Suniy Intelekt Quiz */}
          <div className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className="h-24 md:h-32 bg-linear-to-r from-cyan-500 to-indigo-600 flex items-center justify-center">
                <svg
                  className="h-10 w-10 md:h-12 md:w-12 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 3a.75.75 0 00-.75.75V6h6V3.75A.75.75 0 0014.25 3h-4.5zM7.5 6v12a3 3 0 003 3h3a3 3 0 003-3V6m-9 0h9M9 10.5h6M9 13.5h6M9 16.5h3"
                  />
                </svg>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                  SuniyIntelekt Quiz
                </h3>
                <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">
                  Sun'iy intellekt test yakuniy nazorat uchun
                </p>
                <Link
                  to="/test?quiz=suniyintelekt"
                  className="inline-flex items-center px-3 md:px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium text-sm md:text-base"
                >
                  Boshlash
                  <svg
                    className="ml-2 h-3 w-3 md:h-4 md:w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* KiberXavfsizlik — Linux va OT */}
          <div className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className="h-24 md:h-32 bg-linear-to-r from-slate-700 to-slate-900 flex items-center justify-center">
                <svg
                  className="h-10 w-10 md:h-12 md:w-12 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                  Kiber Xavfsizlik
                </h3>
                <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">
                  IV semestr KiberXavfsizlik fani uchun oraliq test
                </p>
                <Link
                  to="/test?quiz=kiberxavfsizlik"
                  className="inline-flex items-center px-3 md:px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-colors duration-200 font-medium text-sm md:text-base"
                >
                  Boshlash
                  <svg
                    className="ml-2 h-3 w-3 md:h-4 md:w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* 1C Enterprise */}
          <div className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className="h-24 md:h-32 bg-linear-to-r from-red-500 to-red-600 flex items-center justify-center">
                <svg
                  className="h-10 w-10 md:h-12 md:w-12 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                  1C Enterprise
                </h3>
                <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">
                  IV semestr Test oraliq sinov va yakuniy nazorat uchun
                </p>
                <Link
                  to="/test?quiz=enterprise"
                  className="inline-flex items-center px-3 md:px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium text-sm md:text-base"
                >
                  Boshlash
                  <svg
                    className="ml-2 h-3 w-3 md:h-4 md:w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Database Quiz */}
          <div className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className="h-24 md:h-32 bg-linear-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                <svg
                  className="h-10 w-10 md:h-12 md:w-12 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                  />
                </svg>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                  Ma'lumotlar Bazasi
                </h3>
                <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">
                  III-semestr Yakuniy nazorat uchun
                </p>
                <Link
                  to="/test?quiz=baza"
                  className="inline-flex items-center px-3 md:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-sm md:text-base"
                >
                  Boshlash
                  <svg
                    className="ml-2 h-3 w-3 md:h-4 md:w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Networks Quiz */}
          <div className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className="h-24 md:h-32 bg-linear-to-r from-green-500 to-green-600 flex items-center justify-center">
                <svg
                  className="h-10 w-10 md:h-12 md:w-12 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                  Kompyuter Tarmoqlari
                </h3>
                <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">
                  III-semestr Yakuniy nazorat uchun
                </p>
                <Link
                  to="/test?quiz=tarmoq"
                  className="inline-flex items-center px-3 md:px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium text-sm md:text-base"
                >
                  Boshlash
                  <svg
                    className="ml-2 h-3 w-3 md:h-4 md:w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Database Test */}
          <div className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className="h-24 md:h-32 bg-linear-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                <svg
                  className="h-10 w-10 md:h-12 md:w-12 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                  Ma'lumotlar Bazasi
                </h3>
                <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">
                  III-semestr 21-kungi test oraliq sinov uchun
                </p>
                <Link
                  to="/test?quiz=questions"
                  className="inline-flex items-center px-3 md:px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 font-medium text-sm md:text-base"
                >
                  Boshlash
                  <svg
                    className="ml-2 h-3 w-3 md:h-4 md:w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
