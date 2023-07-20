import { useEffect, useState } from "react";
import { BiSun } from "react-icons/bi";
import { HiMoon } from "react-icons/hi";

const Theme = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div onClick={handleTheme}>
      {theme === "dark" ? (
        <HiMoon
          className="transform scale-x-[-1] bg-gray-800 text-white rounded-full p-2"
          size={32}
        />
      ) : (
        <BiSun
          className="bg-gray-500 text-amber-400 rounded-full p-2"
          size={32}
        />
      )}
    </div>
  );
};

export default Theme;
