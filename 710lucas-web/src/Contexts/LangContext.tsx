import { ReactNode, createContext, useContext, useState } from "react";

export const LangContext = createContext<{lang: string, setLang: (newLang : string)=> void}>({lang: 'en', setLang: () => {}});

export const LangContextProvider = ({children} : {children : ReactNode}) => {
    const [langState, setLangState] = useState('en');

    const changeLang = (newLang : string)=>{
        setLangState(newLang)
    }

    const contextValue = {
        lang: langState,
        setLang: changeLang
    }

    return(
        <LangContext.Provider value={contextValue}>
            {children}
        </LangContext.Provider>
    )
}

export const useLangState = () => useContext(LangContext);