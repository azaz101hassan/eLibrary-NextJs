import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { HiSun, HiMoon } from "react-icons/hi";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header>
      <div className="border-b-2">
        <div
          className="px-4 py-4 flex items-center"
          style={{ marginRight: `3.5rem` }}
        >
          <h1 className="ml-10 text-lg">
            E-Dynamic Library
          </h1>
          <div className="ml-auto">
            {mounted &&
              (theme === "dark" ? (
                <HiSun
                  className="w-10 h-10 text-yellow-500"
                  role="button"
                  onClick={() => setTheme("light")}
                />
              ) : (
                <HiMoon
                  className="w-10 h-10 text-gray-900"
                  role="button"
                  onClick={() => setTheme("dark")}
                />
              ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
