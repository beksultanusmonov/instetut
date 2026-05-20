import React, { useRef } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const LOGO_HOLD_MS = 2000;

function LogoAvatar() {
  const navigate = useNavigate();
  const holdTimerRef = useRef(null);

  const clearHoldTimer = () => {
    if (holdTimerRef.current) {
      clearTimeout(holdTimerRef.current);
      holdTimerRef.current = null;
    }
  };

  const handlePointerDown = () => {
    clearHoldTimer();
    holdTimerRef.current = setTimeout(() => {
      navigate("/secret");
    }, LOGO_HOLD_MS);
  };

  return (
    <div
      className="avatar cursor-pointer select-none touch-none"
      onPointerDown={handlePointerDown}
      onPointerUp={clearHoldTimer}
      onPointerLeave={clearHoldTimer}
      onPointerCancel={clearHoldTimer}
      onContextMenu={(e) => e.preventDefault()}
    >
      <div className="w-10 rounded-full ring-2 ring-transparent hover:ring-primary/30 transition-all">
        <img src="logo.png" alt="Logo" draggable={false} />
      </div>
    </div>
  );
}

function MainLayout() {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm max-w-[98vw] sm:max-w-none mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Testlar</Link>
              </li>
              <li>
                <a href="https://t.me/beksulton_usmonov">Aloqa</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link to="/" className="btn btn-ghost text-xl text-primary font-bold">
            SULTAN
          </Link>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <LogoAvatar />
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default MainLayout;
