
import "./todocounter.css"
function Todocounter({total, van }) {
    return(
      <div className="container-counter">
      
        <h1>componente en counter <span>{van} </span> de  <span>{total}</span></h1>
        
    </div>
    )
  }
  export {Todocounter}