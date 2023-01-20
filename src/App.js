import React from "react"
import Alert from "./Alert"
import './index.css'
import { useGlobalContext } from "./context";

function App() {
  
  const {niz, naziv, alert, isEditing, dodaj, edituj, brisi, promjena, clear} = useGlobalContext();
  return (
    <div>
      <div class="centar" >
      {alert.isAlert && <Alert {...alert} />}
      <h1>TO DO Lista</h1>
      <div class="vodoravno">
      <input type="text"
             placeholder="Unesite naziv zadatka..."
             name="naziv"
             value={naziv}
             onChange={e => promjena(e.target.value) }
      />
      <button onClick={() => dodaj(naziv)}>{isEditing ? "Edit" : "Generate"}</button>
      </div>
      </div>
      <div class="centar">
         {niz.map(item => {
            return(
            <div class="stavka">
            <p>{item.zadatak}</p>
            <div>
            <button onClick= {() => edituj(item.id)}>Edit</button>
            <button onClick= {() => brisi(item.id)}>Remove</button>
            </div>
            </div>
    
          )
          })}
        </div>
        <br/>
        <div class="centar">
         {niz.length > 0 && <button onClick={clear}>Clear all tasks</button>}
        </div>
</div>
  );
}

export default App;
