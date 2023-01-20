const reducer = (state, action) =>{

if(action.type === 'BRISI'){
    return {...state, niz: state.niz.filter(item => item.id !== action.payload ), alert:{text:"Stavka uspjesno obrisana !" , isAlert: true}}
}
if(action.type === 'ALERT'){
    return {...state,  alert:{text:"", isAlert: false} }
}
if(action.type === 'PROMJENA'){
    return {...state,  naziv: action.payload}
}
if(action.type === 'CLEAR'){
    return {...state,  niz: [], alert:{text:"Sve stavke su obrisane !", isAlert: true} }
}
if(action.type === 'DODAJ'){
    if(state.isEditing === true){
        let noviNiz = state.niz.map(item => {
            return item.id === state.editID ? {...item, zadatak: action.payload} :item
        })
        return {...state,  niz:noviNiz, naziv: "", isEditing: false, editID:null, alert:{text:"Stavka uspjesno izmjenjena !", isAlert: true}}
    }
    else if (action.payload !== ""){
        let noviNiz = [...state.niz, {id:new Date().getTime().toString(), zadatak:action.payload }]
        return {...state,  niz:noviNiz, naziv: "", alert:{text:"Stavka uspjesno dodana !", isAlert: true}}
    }
    else  return {...state, alert:{text:"Unesite stavku u polje !", isAlert: true}}
    
}
if(action.type === 'EDITUJ'){
    let priv = state.niz.find(item => item.id === action.payload)
    return {...state,  naziv: priv.zadatak, isEditing: true, editID:action.payload }
}
}


export default reducer;