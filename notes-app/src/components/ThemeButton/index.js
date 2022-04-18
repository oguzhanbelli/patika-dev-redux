// import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "../../contexts/ThemeContext";

function ThemeButton() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <button
        className="button"
        type="button"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <div
          id="switch-toggle"
        
          className="w-full h-full  relative rounded-full transition duration-500 transform  -translate-x-2 mt-2 ml-2 text-white"
        >
          {theme === "light" ? (
            <svg
              width="42px"
              height="48px"
              viewBox="0 0 44 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.551 48C31.9537 48 38.7147 44.632 43.1939 39.1133C43.8565 38.2969 43.134 37.1042 42.1099 37.2992C30.4659 39.5168 19.7729 30.5889 19.7729 18.8348C19.7729 12.0639 23.3974 5.83772 29.2883 2.48531C30.1964 1.96856 29.968 0.591844 28.9362 0.40125C27.4897 0.134525 26.0219 0.000219032 24.551 0C11.3033 0 0.551025 10.7354 0.551025 24C0.551025 37.2477 11.2864 48 24.551 48Z"
                fill="#3C3C3C"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="44px"
              height="48px"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="#f7f8f9"
                d="M12 6a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm9 5h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2ZM6 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm.22-7a1 1 0 0 0-1.39 1.47l1.44 1.39a1 1 0 0 0 .73.28a1 1 0 0 0 .72-.31a1 1 0 0 0 0-1.41ZM17 8.14a1 1 0 0 0 .69-.28l1.44-1.39A1 1 0 0 0 17.78 5l-1.44 1.42a1 1 0 0 0 0 1.41a1 1 0 0 0 .66.31ZM12 18a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1Zm5.73-1.86a1 1 0 0 0-1.39 1.44L17.78 19a1 1 0 0 0 .69.28a1 1 0 0 0 .72-.3a1 1 0 0 0 0-1.42Zm-11.46 0l-1.44 1.39a1 1 0 0 0 0 1.42a1 1 0 0 0 .72.3a1 1 0 0 0 .67-.25l1.44-1.39a1 1 0 0 0-1.39-1.44ZM12 8a4 4 0 1 0 4 4a4 4 0 0 0-4-4Z"
              />
            </svg>
          )}
        </div>
      </button>
    </div>
  );
}

export default ThemeButton;
