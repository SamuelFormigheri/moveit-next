import { createContext, useContext } from "react";
import { IChallengeContext } from "./interface";

export const ChallengeContext = createContext<IChallengeContext>({} as IChallengeContext);

export function useChallenge(): IChallengeContext {
    const context = useContext(ChallengeContext);

    if (!context){
        throw new Error('useChallenge must be used within the Challenge Provider');
    }

    return context;
}