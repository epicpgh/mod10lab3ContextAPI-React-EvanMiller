



import { useTheme } from "../context/ThemeContext";

export default function ThemeToggleButton() {

    const { theme, toggleTheme } = useTheme();

    return(
        <div>
            <button onClick={toggleTheme}>{theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}</button>
        </div>
    );
}