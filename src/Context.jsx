import { createContext, useState } from "react"

export const Contexto = createContext()

const ContextoProvider = ({ children }) => {

    let [ImagenesSmall, setImagenesSmall] = useState([])
    const [selectedImages, setSelectedImages] = useState([]);

    return(
        <Contexto.Provider value={{ImagenesSmall, setImagenesSmall, selectedImages, setSelectedImages}}>
            {children}
        </Contexto.Provider>


    )
}

export default ContextoProvider