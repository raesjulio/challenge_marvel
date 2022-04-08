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
    valuePage: string
    setValuePage: Dispatch<SetStateAction<string>>;
}

const Context = createContext<IContextValue>({} as IContextValue);

export const DataProvider = ({ children }: Props) => {

    const [team, setTeam] = useState<ICharacters[]>([])
    const [valuePage, setValuePage] = useState("1")
    return (
        <Context.Provider value={{ team, setTeam, valuePage, setValuePage}}>
            {children}
        </Context.Provider>
    )
}

export const useData = () => {
    const context = useContext(Context)
    return context
}