import React from 'react'
import { useContext } from "react";
import { myContext } from './App';
import './currencyconverter.css'
export default function ContextApi5Final() {
    const user = useContext(myContext); 
    
  return (
    <>
     <div>ContextApi5Final</div>
     <h2>{`Hello ${user.name} again!`}</h2>
    </>
   
  )
}
