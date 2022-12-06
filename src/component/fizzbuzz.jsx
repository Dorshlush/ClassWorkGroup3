import React,{Component} from "react";

class Fizzbuzz extends Component {
    state = { list:[],
        counterKey:0,
        inputval:""

      }
      
    render() 
   
        { 
        return (
            <div >
                 <input type="text" className="form-control" aria-label="Text input with dropdown button" id="textbox" onChange={this.getVal1}></input>
                 <button onClick={this.addToList} className="btn btn-success">Check If your number is FIZZ or BUZZ!!!</button>
                <br>
                </br>
               { this.state.list.map(num=><p>{(num)+(this.checknum(num))}</p>)}

            </div>
        );
    }
    getVal1=(event)=>{
       
       this.setState({inputval: Number(event.target.value)})
    }
       
    


    addToList=()=>{
        
  
        let value=document.getElementById("textbox").value
        this.state.list.unshift(value)
        this.setState({list: this.state.list})
        document.getElementById("textbox").value=null
}
checknum=(num)=>{
    if( num%3==0&& num%5==0){
        return" FIZZBUZZ"}

    
  else if( num%5==0){

        return" BUZZ"}

    
   else if( num%3==0){
        return" FIZZ"}


    else{
        return " "
    }
    }
    
    
}


export default Fizzbuzz;