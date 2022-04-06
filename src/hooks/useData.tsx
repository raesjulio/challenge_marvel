import React, { ChildContextProvider, createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getCharactersAll } from "../services/getCharacters";

interface ICharactersResponse {
    data: {
        results: []
    }
}

interface ICharacters {
    id: string
    name: string
    description: string
    thumbnail: {
        extension: string
        path: string
    }
}

type Props = {
    children: React.ReactNode;
};
interface IContextValue {
    team: ICharacters[];
    setTeam: Dispatch<SetStateAction<ICharacters[]>>;
}
const Context = createContext<IContextValue>({} as IContextValue);

export const DataProvider = ({ children }: Props) => {

    const [team, setTeam] = useState<ICharacters[]>([])
    return (
        <Context.Provider value={{ team, setTeam }}>
            {children}
        </Context.Provider>
    )
}

export const useData = () => {
    const context = useContext(Context)
    return context
}