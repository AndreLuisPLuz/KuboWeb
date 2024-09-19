import { createContext, ReactNode, useEffect, useState } from "react";

type Theme = {
    palette: "light" | "dark";
    toggleTheme: () => void;
};

const ThemeContext = createContext<Theme>({} as Theme);

type ThemeProviderProps = {
    children: ReactNode | ReactNode[];
};

const ThemeProvider = (props: ThemeProviderProps): ReactNode => {
    const [palette, setPalette] = useState<"light" | "dark">("light");

    const toggleTheme = () => {
        const newTheme = (palette == "dark" ? "light" : "dark");
        setPalette(newTheme);
    };

    useEffect(() => {
        const isDark = (palette == "dark");
        document.documentElement.classList.toggle("dark", isDark);
    }, [palette]);

    return (
        <ThemeContext.Provider value={{ palette, toggleTheme }}>
            { props.children }
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProvider };