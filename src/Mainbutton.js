import React from 'react';

function Mainbutton(props) {
   
  const pos=props.position;
  
  return (  
      <div className="Mainbutton" >
      { props.visible===true ?
       [ pos==="left" || pos==="right" ?
      
          <div className="tip" style={{width:50,height:100,[pos]:-120}}>
            Tip for u
          </div>
          
          :
          
          <div className="tip" style={{[pos]:-120}}>
              Tip for u
            </div>
      
      ]
         :
         null
      
      }
       
      <h2> {props.position.toUpperCase()} </h2>
      </div>
    )
  }
  
  export default Mainbutton;