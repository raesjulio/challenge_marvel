import React, { createContext, useContext, useState } from "react";

import { ICharacters, IContextValue } from "../interfaces/interfaces";

type Props = {
    children: React.ReactNode;
};

const Context = createContext<IContextValue>({} as IContextValue);
export const DataProvider = ({ children }: Props) => {

    const [team, setTeam] = useState<ICharacters[]>([])
    const [valuePage, setValuePage] = useState("1")
    return (
        <Context.Provider value={{ team, setTeam, valuePage, setValuePage }}>
            {children}
        </Context.Provider>
    )
}

export const useData = () => {
    const context = useContext(Context)
    return context
}