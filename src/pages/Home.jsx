import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
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
        <div class="card sm:max-w-sm shadow-xl max-w-[96vw] hover:cursor-pointer transition-all duration-500 hover:scale-105">
            <div class="card-body">
            <h5 class="card-title mb-2.5">Malumotlar bazasi</h5>
            <p class="mb-4">
                21-kunlik test oraliq sinov uchun
            </p>
            <div class="card-actions">
                <Link to={'test/'} class="btn btn-primary">Ishlash</Link>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
