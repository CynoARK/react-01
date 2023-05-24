// import logo from './platzi.webp';
// import './App.css';
import { Implement } from './implement';
import { Todosearch } from './todosearch';
import { Createtodobutton } from './createtodobutton';
import { Todolist } from './todolist'; 
import { Todocounter } from './todocounter';
const defaultTodos = [
{ text:"sebastien", completed: true},
{ text:"CAMILO", completed:false },
{ text:"17", completed:false },{ text:"manzana", completed:false },
];
function App() {

  return (

    <div className="App">
            
            
    <Todocounter total={20} van={15} />
    <Todosearch/>

         <Todolist/>
        
                  {defaultTodos.map((todo) => {
                    return <Implement 
                    key={todo.text} 
                    text={todo.text}
                    completed={todo.completed}    
                    />;
        })}
              
          <Todolist/>
                
        
 
  <Createtodobutton/>
    
  </div>

  )
}
  
          
          
            

           
          
  
  

 


export default App;
