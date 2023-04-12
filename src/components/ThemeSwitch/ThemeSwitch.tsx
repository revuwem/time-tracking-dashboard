type ThemeSwitchProps = {
  isDark: boolean;
  toggle: () => void;
};

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ isDark, toggle }) => {
  return (
    <button
      onClick={toggle}
      className={`border-2 transition px-4 py-2 rounded ${
        isDark
          ? "text-blue-pale border-blue-pale"
          : "text-blue-lighten border-blue-desaturated"
      }`}
    >
      {isDark ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 17a5 5 0 100-10 5 5 0 000 10z"
            clipRule="evenodd"
          ></path>
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
          ></path>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79v0z"
            clipRule="evenodd"
          ></path>
        </svg>
      )}
    </button>
  );
};

export default ThemeSwitch;
