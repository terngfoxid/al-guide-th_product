import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function ThemeSwitcher() {
  const [themeState, setThemeState] = useState<Theme>();

  useEffect(() => {
    let theme = localStorage.getItem("Mode") as Theme | null;

    if (!theme) {
      theme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }

    setTheme(theme);
    setThemeState(theme);
  }, []);

  function setTheme(mode: Theme) {
    if (mode == "dark") {
      document.body.classList.add("dark");
      document.body.classList.remove("bg-[#f5f3f0]");
      document.body.classList.add("bg-neutral-900");

      localStorage.setItem("Mode", "dark");
      setThemeState("dark");
    }

    if (mode == "light") {
      document.body.classList.remove("dark");
      document.body.classList.remove("bg-neutral-900");
      document.body.classList.add("bg-[#f5f3f0]");

      localStorage.setItem("Mode", "light");
      setThemeState("light");
    }
  }

  function toggleTheme() {
    if (!themeState) return;

    localStorage.setItem("theme", themeState);

    if (themeState === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  return (
    <button
      className={`theme-switcher ${themeState}`}
      onClick={() => toggleTheme()}
    >
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <mask className="moon" id="theme-switcher-moon-mask">
          <rect x="0" y="0" width="100%" height="100%" fill="white"></rect>
          <circle cx="24" cy="10" r="6" fill="black"></circle>
        </mask>
        <circle
          className="sun"
          cx="12"
          cy="12"
          r="6"
          mask="url(#theme-switcher-moon-mask)"
          fill="currentColor"
        ></circle>
        <g
          className="sun-beams"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2px"
        >
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </g>
      </svg>
      <style jsx>{`
        :where(.theme-switcher > svg) {
          block-size: 2rem;
        }

        :where(.theme-switcher) :where(.sun, .moon, .sun-beams) {
          transform-origin: center center;
        }

        :where(.theme-switcher) :where(.sun, .sun-beams) {
          color: hsl(40 95% 50%);
        }

        :where(.dark) :where(.sun) {
          color: hsl(0 0% 100%);
        }

        :where(.dark) :where(.theme-switcher .sun) {
          transform: scale(1.5);
        }

        :where(.dark) :where(.theme-switcher .sun-beams) {
          opacity: 0;
          transform: rotate(-90deg);
        }

        :where(.dark) :where(.theme-switcher .moon > circle) {
          transform: translate(-7px);
        }

        @media (prefers-reduced-motion: no-preference) {
          :where(.theme-switcher) :where(.sun, .sun-beams, .moon > circle) {
            transition: 0.5s cubic-bezier(0.5, 1.5, 0.75, 1.25);
          }
        }
      `}</style>
    </button>
  );
}
