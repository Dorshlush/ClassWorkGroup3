import React,{Component} from "react";

class Todolist extends Component {
    state = { list: [],
       
    inputval: "" } 
    render() { 
        return (<div id="container">
            <div  className="input-group mb-3">
                <label id="option" className="input-group-text" for="inputGroupSelect01">Options</label>
                <select className="form-select" id="inputGroupSelect01">
                
                <option id="1" value="1">Importent Tasks</option>
                <option id="2" value="2">Less Importent Tasks</option>
                
            </select>
            <input type="text" className="form-control" aria-label="Text input with dropdown button" id="textbox" onChange={this.getVal1}></input>
            <button onClick={this.addToList} className="btn btn-success">ADD assignment</button>
            </div>
           <div>
                
           {this.state.list.map(todo=> <ul style={this.checkbox} key={this.state.list.indexOf(todo) }> <input type="checkbox" value="yes" onChange={this.checkbox} ></input > {todo} </ul> )}



           </div>
                

            </div>
        );
    }
    getVal1=(event)=>{
        this.setState({inputval: event.target.value})
      
}
addToList=()=>{

  
        let value=document.getElementById("textbox").value
        this.state.list.unshift(value)
        
   


        
        this.setState({list: this.state.list})
        document.getElementById("textbox").value=null
}
checkbox=(e)=>{
let innerstyle    
if(e.target.checked==true){
        innerstyle="text-decoration: line-through"
        return innerstyle
   
    
  }

    

}
}
export default Todolist;