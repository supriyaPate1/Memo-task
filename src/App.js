import './App.css';
import { useState, createContext} from "react";
import TextUtility from './TextUtility';
import CurrencyConverter from './CurrencyConverter';
import ContextApi1 from './ContextApi1';
import NumToWord from './NumToWord';
import WillMount from './WillMount';

export const myContext = createContext();
function App() {
  const [user, setUser] = useState("Jack");
  return (
 <>   
 <h1 style={{textAlign:"center" ,color:"blueviolet"}}>Memo Tasks</h1>
  <myContext.Provider value={{name:user,setUser:setUser}}>
    <ContextApi1/>  
  </myContext.Provider>
    <hr></hr>
    <WillMount/>
    <hr></hr>
    <TextUtility/>
    <hr></hr>
    <CurrencyConverter/>
    <hr></hr>
    <NumToWord/>
    <hr></hr>
   
 </>
  );
}

export default App;
