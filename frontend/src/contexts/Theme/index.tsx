import { createContext, ReactNode, useState } from "react";

type Theme = {
    palette: "light" | "dark";
    toggleTheme: () => void;
};

const ThemeContext = createContext<Theme>({} as Theme);

type ThemeProviderProps = {
    children: ReactNode | ReactNode[];
};

const ThemeProvider = (props: ThemeProviderProps): ReactNode => {
    const [palette, setPalette] = useState<"light" | "dark">("dark");

    const toggleTheme = () => {
        const newTheme = (palette == "dark" ? "light" : "dark");
        setPalette(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ palette, toggleTheme }}>
            { props.children }
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProvider };