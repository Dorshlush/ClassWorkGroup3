import React,{Component} from "react";

class SumCalc extends Component {
    state = { num1:"",
    num2:"",
    sum:"",
    var:""  } 
    render() { 
        return ( <div>
            <h1>Enter for result!</h1>
            <br></br>
            <input type="text" class="form-control" id="num1" onChange={this.getVal1}></input>
            <input type="text" class="form-control" id="var" onChange={this.getVal3}></input>
            <input type="text" class="form-control" id="num2" onChange={this.getVal2}></input>
            <button onClick={this.sum}>Calculate</button>
            <br></br>
            <label >{this.state.sum}</label>
            </div>);
    }
    getVal1=(event)=>{
        this.setState({num1: event.target.value})
        
        }
    getVal2=(event)=>{
        this.setState({num2: event.target.value})
    }

    getVal3=(event)=>{
        this.setState({val: event.target.value})
        
        
        }

    sum=()=>{
        switch(this.state.val){
        case '+':
        this.state.sum =Number (this.state.num1)+Number (this.state.num2)
        this.setState ({sum: this.state.sum})
     
        break;

        case '-':
        this.state.sum =Number (this.state.num1)-Number (this.state.num2)
        this.setState ({sum: this.state.sum})
     
        break;

        case '*':
        this.state.sum =Number (this.state.num1)*Number (this.state.num2)
        this.setState ({sum: this.state.sum})
        
        break;

        case '/':
        this.state.sum =Number (this.state.num1)/Number (this.state.num2)
        this.setState ({sum: this.state.sum})
        
        break;
    }
}
}

export default SumCalc;