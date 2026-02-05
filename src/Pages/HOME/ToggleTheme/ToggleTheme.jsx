import useTheme from "../../../Hooks/useTheme/useTheme";
import { FaSun, FaMoon, FaDesktop } from "react-icons/fa";

function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  const themes = [
    { value: "light", label: "Light", icon: <FaSun /> },
    { value: "dark", label: "Dark", icon: <FaMoon /> },
    // { value: "system", label: "System", icon: <FaDesktop /> },
  ];

  return (
    <div className="flex items-center gap-1 bg-[var(--bg-card)] border border-[var(--border)] rounded-full mr-2 p-1">
      {themes.map((t) => (
        <button
          key={t.value}
          onClick={() => setTheme(t.value)}
          className={`
            flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300
            hover:bg-indigo-500 hover:text-white
            ${theme === t.value ? "bg-indigo-500 text-white shadow-lg" : "text-gray-500"}
          `}
        >
          {t.icon}
          <span className="hidden text-xs sm:inline">{t.label}</span>
        </button>
      ))}
    </div>
  );
}

export default ToggleTheme;
