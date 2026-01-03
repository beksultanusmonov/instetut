import { useState } from "react";
import { Link } from "react-router-dom";
import Quiz from "../Quiz";
import { quizQuestions, quizTarmoq } from "../data/quizQuestions";

function Home() {
  const [quiz, setQuiz] = useState(false);
  return (
    <div className="relative">
      <img src="https://img.freepik.com/premium-photo/blue-pink-purple-abstract-wallpaper-vivid-light-glow-elements-modern-minimalist-digital-wallpaper_657790-27532.jpg?semt=ais_hybrid&w=740&q=80" className="top-0 left-0 absolute w-screen h-[calc(100vh-70px)] object-cover -z-10" />
      {!quiz && <>
        <div className="flex justify-center py-6">
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
      </div>
      <div className="flex flex-wrap gap-5 px-[5%]">
        <div className="card sm:max-w-sm shadow-xl max-w-[96vw] hover:cursor-pointer transition-all duration-500 hover:scale-105 bg-white">
            <div className="card-body">
            <h5 className="card-title mb-2.5">Kampuyuter Tarmoqlari</h5>
            <p className="mb-4">
                Yakuniy nazorat uchun
            </p>
            <div className="card-actions">
                <p onClick={() => setQuiz(quizTarmoq)} className="btn btn-primary">Ishlash</p>
            </div>
            </div>
        </div>
        <div className="card sm:max-w-sm shadow-xl max-w-[96vw] hover:cursor-pointer transition-all duration-500 hover:scale-105 bg-white">
            <div className="card-body">
            <h5 className="card-title mb-2.5">Malumotlar bazasi</h5>
            <p className="mb-4">
                21-kunlik test oraliq sinov uchun
            </p>
            <div className="card-actions">
                <p onClick={() => setQuiz(quizQuestions)} className="btn btn-primary">Ishlash</p>
            </div>
            </div>
        </div>
      </div>
      </>}
      {quiz && <Quiz quiz={quiz} setQuiz={setQuiz} />}
    </div>
  );
}

export default Home;
