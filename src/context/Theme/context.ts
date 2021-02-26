import { createContext, useContext } from "react";
import { IThemeContext } from "./interface";

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export function useTheme(): IThemeContext {
    const context = useContext(ThemeContext);

    if (!context){
        throw new Error('useTheme must be used within the Theme Provider');
    }

    return context;
}