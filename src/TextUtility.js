import React from 'react'
import './currencyconverter.css'
export default function TextUtility() {
 
    const toUpper=()=>{
      var count=0;
      document.getElementById('text').value=document.getElementById('text').value.toUpperCase();
     
      var Str=document.getElementById('text').value;
      document.getElementById('words').innerHTML="Total Words: "+(Str).match(/\w+/g).length;
      for(var i=0;i<Str.length;i++){       
          count++;          
      }
      document.getElementById('char').innerHTML="Total Charactres: "+count;
     }

    const toLower=()=>{
      var count=0;
      document.getElementById('text').value= document.getElementById('text').value.toLowerCase();
      var Str=document.getElementById('text').value;
      document.getElementById('words').innerHTML="Total Words: "+(Str).match(/\w+/g).length;
      for(var i=0;i<Str.length;i++){       
          count++;
      }
      document.getElementById('char').innerHTML="Total Charactres: "+count;
    }
    
  return (
  <>
  <div className='main1'>
    <div><h1>Text Utility App</h1></div>
    <div>
        <textarea id='text'></textarea>
    </div>
    <div>
        <button type='button' id='upper' onClick={toUpper}>UpperCase</button>
        &emsp;
        <button type='button' id='lower'onClick={toLower}>LowerCase</button>
        <p id='words'> </p>
        <p id='char'></p>
    </div>
    </div>
  </>
   
  )
}
