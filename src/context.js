import React, {usestate, useeffect, useContext, userEducer} from "react"
import reducer from "./reducer"

const initialState ={
    niz:[],
    naziv:"",
    isEditing: false,
    editID:null,
    alert:{text:"", isAlert:false}

}
const AppContext = React.createContext();
const AppProvider = ({children}) => {
   
const [state, dispatch] = React.useReducer(reducer, initialState)

   const promjena = (nesto) => {
    dispatch ({type:'PROMJENA', payload:nesto })
   }
   const dodaj = (nesto) => {
  
    dispatch({type:'DODAJ', payload:nesto})
   }
   const edituj = (id) => {
    dispatch({type:'EDITUJ', payload:id})
   }
   const brisi = (id) => {
    dispatch({type:'BRISI', payload:id})
   }
   const clear = () => {
    dispatch({type:'CLEAR'})
   }
   React.useEffect(() => {
    const timeout = setTimeout(() => {dispatch({type:'ALERT'})}, 3000)
    return  () => clearTimeout(timeout)
    }, [state.niz])

    return(<AppContext.Provider value={{

        ...state, dodaj, edituj, brisi, promjena, clear


    }}>{children}</AppContext.Provider>)
}
export const  useGlobalContext = () => {
    return useContext(AppContext)
}
export {AppContext, AppProvider}