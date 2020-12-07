import React from 'react';
import MainButton from './Mainbutton';
class Home extends React.Component{
    constructor(){
        super();
        this.state={
         position:"top",
         visible:"false"
        }
    }
    componentDidMount(){
                           
    var dropdown=document.getElementById("dropdown");
    var Mainbutton=document.getElementsByClassName("Mainbutton")[0];
    
    Mainbutton.onmouseout=()=>{
        console.log("mousedown");
        this.setState({
            position:dropdown.value,
            visible:false
        })
       }
    Mainbutton.onmouseover=()=>{
        console.log("mouseover");
        this.setState({
         position:dropdown.value,
         visible:true
     })
    }
    

    }

    render(){

        return(
            <div>
              <div className="drop-down">
                    <form >
                            <select name="position" id="dropdown">
                                <option value="top">top</option>
                                <option value="bottom">bottom</option>
                                <option value="left">left</option>
                                <option value="right">right</option>
                            </select>
                    </form>
                    
                </div>
                <div>
                <MainButton 
                position={this.state.position}
                visible={this.state.visible}
                 />
                </div>
    </div>
        )
        

    }


}
export default Home;