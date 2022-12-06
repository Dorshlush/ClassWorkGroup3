import React,{Component} from "react";

class Keyworddisplay extends Component {
    state = {text1: "" ,
num1:"",
num2:"",
sum:"" } 
    render() { 
        return (<div>

                <input type="text" class="form-control" id="textBar" onChange={this.internalVal}></input>
                <label id="inputLabel">{}</label>

                <br></br>
               


        </div>);
    }

    internalVal=(e)=>{
        this.setState({text1: e.target.value})
        document.getElementById("inputLabel").innerHTML=this.state.text1
        
    }
   
}
 
export default Keyworddisplay;