import { ReactNode } from "react";

interface IChallenge{
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

export interface IChallengeContext{
    activeChallenge: IChallenge;
    challangesCompleted: number;
    currentExperience: number;
    experienceToNextLevel: number;
    level: number;
    startNewChallenge: () => void;
    resetChallenge: () => void;
    completeChallenge: () => void;
    closeLevelUpModal: () => void;
}

export interface IChallangeProviderProps{
    level: number;
    currentExperience: number;
    challangesCompleted: number;
    children: ReactNode;
}