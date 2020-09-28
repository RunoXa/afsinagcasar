import React, {Component} from "react";

export default class KocKatimi extends Component {

   render() {
      return (
         <div style={{
            border: "3px solid #50001B",
            padding: "1rem",
            borderRadius: "10px 10px 10px 10px",
            backgroundColor: "#f5f5f5"
         }}>
            <div>
               <h2 style={{fontWeight: "bold", color: "#50001B"}}>Koç Katımı</h2>
            </div>
            <div style={{marginTop: "50px"}}>

               <p style={{color: 'red', fontSize: "40px"}}>***</p>
               <p>
                  Ali Rıza ARSLAN<br/>
                  09.10.2007<br/>
               </p>
            </div>
         </div>
      )
   }
}