import { createContext, useContext } from "react";
import { ICountdownContext } from "./interface";

export const ContdownContext = createContext<ICountdownContext>({} as ICountdownContext);

export function useCountdown(): ICountdownContext {
    const context = useContext(ContdownContext);

    if (!context){
        throw new Error('useContdown must be used within the Contdown Provider');
    }

    return context;
}