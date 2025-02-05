"use client";
import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function DarkModeToggle() {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		document.documentElement.classList.toggle("dark", darkMode);
	}, [darkMode]);

	return (
		<button
			onClick={() => setDarkMode(!darkMode)}
			className="flex items-center gap-2 mt-6"
		>
			{darkMode ? <FaSun /> : <FaMoon />}{" "}
			{darkMode ? "Light Mode" : "Dark Mode"}
		</button>
	);
}
