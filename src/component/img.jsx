import React,{Component} from "react";


class Img extends Component {
    state = { counter: 0,
        x: "https://picsum.photos/500"}

    render() { 
        const mystyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            
            height: '80vh',
            width:'100vh'
          };
        return (<div id="container" style={mystyle} onClick={this.imgFunc}>

            

            <img src={this.state.x} alt="" />



        </div>);
    }

     imgFunc=()=>{
         if(this.state.counter%2==0){
            this.setState({x:"https://picsum.photos/500" })
            this.setState({counter :this.state.counter+1} )

         }

         else{this.setState({x:null })
                this.setState({counter :this.state.counter+1} )

         }
            }  

}
 
export default Img;