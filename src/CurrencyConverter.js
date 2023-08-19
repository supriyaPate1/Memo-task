import React from 'react'
import './currencyconverter.css'
export default function CurrencyConverter() {
   const convert=()=>{
     var changedAmt=0;
     var amt=document.getElementById('amt').value;
     var coun1=document.getElementById('from').value;
     var coun2=document.getElementById('to').value;
     if(coun1==='USD'&&coun2==='INR'){
      changedAmt=amt*79.67;
      document.getElementById('change').innerHTML=amt+" "+coun1+"="+changedAmt+" "+coun2;
     }
    else  if(coun1==='INR'&&coun2==='USD'){
      changedAmt=amt/79.67;
      document.getElementById('change').innerHTML=amt+" "+coun1+"="+changedAmt+" "+ coun2;
     }
     else if(coun1 ==='USD'&&coun2==='USD'){
      changedAmt=amt
      document.getElementById('change').innerHTML=amt+" "+coun1+"="+changedAmt+" "+ coun2;
     }
     else if(coun1==='INR'&&coun2==='INR'){
      changedAmt=amt
      document.getElementById('change').innerHTML=amt+" "+coun1+"="+changedAmt+" "+ coun2;
     }
   }
  return (
    <>
    <div className='main3'>
       <div><h1>Currency Converter</h1></div>
       <div>
          <h5>Enter amount:</h5>
       </div>
       <div>
          <input type='number' placeholder='enter amount' id='amt'></input>
       </div>
       <div className='option'>
          <div >
              <select id='from'>
                <option>USD</option>
                <option>INR</option>
              </select>
          </div>
          &emsp;
          <div className='arrow'>
            <p id='left'> &#8594;</p>
            <p id='right'> &#8592;</p>        
          </div>
          <div>
              <select id='to'>
                <option>INR</option>
                <option>USD</option>
              </select>
          </div>
          &emsp;
       </div>
       <div id='display'></div>
       <div>
         <button type='button' id='convertrate' onClick={convert}>Get Exchange Rate</button>
         <p id='change'></p>
       </div>
       </div>
    </>
    
  )
}
