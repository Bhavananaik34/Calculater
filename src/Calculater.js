import React, { useState } from "react";
import "./Calculater.css"
const  Calculater = () =>
{
 let[value,set]=useState('')
 return(
     <>
         <center>
            <table>
            <tr>
                     <td colSpan={5}><input type="text" value={value} /></td>
                 </tr>

         <tr>           
     <td><input type="button" value="AC" id="ac" onClick={e =>set('')} /></td>
     <td><input type="button" value="DE" id="ce" onClick={e =>set(value.slice(0,-1))}/></td>
   <td><input type="button" value="." className="x" onClick={e =>set(value+e.target.value)}/> </td>
   <td><input type="button" value="/" className="x" onClick={e =>set(value+e.target.value)}/> </td>
   </tr> 

  <tr>  
    <td><input type="button" value="7" className="x" onClick={e =>set(value+e.target.value)}/> </td>
    <td><input type="button" value="8" className="x" onClick={e =>set(value+e.target.value)} /> </td>
    <td><input type="button" value="9" className="x" onClick={e =>set(value+e.target.value)}/> </td>
    <td><input type="button" value="*" className="x" onClick={e =>set(value+e.target.value)}/></td>
</tr> 
    
    <tr>  
    <td><input type="button" value="4" className="x" onClick={e =>set(value+e.target.value)}/> </td>
    <td><input type="button" value="5" className="x" onClick={e =>set(value+e.target.value)}/> </td>
    <td><input type="button" value="6" className="x" onClick={e =>set(value+e.target.value)}/> </td>
    <td><input type="button" value="+" className="x" onClick={e =>set(value+e.target.value)}/> </td>
    </tr> 

    <tr>  
    <td><input type="button" value="1" className="x" onClick={e =>set(value+e.target.value)}/> </td>
    <td><input type="button" value="2" className="x" onClick={e =>set(value+e.target.value)}/> </td>
    <td><input type="button" value="3" className="x" onClick={e =>set(value+e.target.value)}/> </td>
    <td><input type="button" value="-" className="x" onClick={e =>set(value+e.target.value)}/> </td>
    </tr> 

    <tr>  
    <td><input type="button" value="00" className="x" onClick={e =>set(value+e.target.value)}/> </td>
    <td><input type="button" value="0" className="x" onClick={e =>set(value+e.target.value)}/> </td>
    <td><input type="button" value="="  id="r"  onClick={e =>set(eval(value))}/></td> 
                 </tr> 
                 </table>
     </center>
  </>
 )
}
export default Calculater