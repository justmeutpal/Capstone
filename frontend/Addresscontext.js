import { createContext, useContext , useState } from "react";

const Addresscontext = createContext();

export function AddressProvider({children}){
    const [address,setAddress] = useState('')
    return(
        <Addresscontext.Provider value={{address,setAddress}}>{children}</Addresscontext.Provider>
    )
}

export default Addresscontext;