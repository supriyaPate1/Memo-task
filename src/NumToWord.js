import React, { useState } from 'react'
import './currencyconverter.css'
export default function NumToWord() {

  const [name,setName]=useState(0);

  var ones=["","one","two","three","four","five","six","seven","eight","nine","Ten", "Eleven", "Twelve",       "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"]
  var arrTen=["","","twenty","thirty","fourty","fifty","sixty","seventy","eighty","ninety"]
  var arrTh=["","Thousand","Million","Billion","Trillion"]
  var NoTOWords="";
  var notZero;
  var term="";

    const NtoWord=()=>{
      var inpNum= document.getElementById('num').value; 
      if(inpNum===""||inpNum==="0"){
        setName("zero")
      }   
      //convert to number
      if(inpNum>0){
         var temp=(+inpNum).toLocaleString();     
         notZero=temp.split(",").map((e)=>+e);       
         var lenOfNum=notZero.length;

         notZero.forEach((e,i) => {

          var hun=Math.floor(e/100);
          var th=e%100;
          term="";
          if(e%100===0){
            term+=ones[hun]+" Hundred";
          }
          else if(e>100){
            term+=ones[hun]+" Hundred and ";
          }
          if(th<20){
            term+=ones[th];
          }
          else if(th>=20&&th<100){
            term+=arrTen[Math.floor(th/10)]+" "+ones[th%10];
          }
        
          if(e!==0){
            NoTOWords +=term+arrTh[lenOfNum-i-1]+",";
            setName(NoTOWords)
          }
          
        });
      }
    }
  return (
    <>
    <div className='main4'>
       <div><h1>Number To Words</h1></div>
       <div>
        <h5>Enter a number:</h5>
         <input type='number' placeholder='Enter a number' id='num' onChange={NtoWord}></input>
         <p>{name}</p>
       </div>
      </div>
    </>
    
  )
}
