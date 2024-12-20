import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";
class MyComponent extends React.Component{

    state = {
        name : "tuan anh",
        address : "Nam dinh"
    };
    handleCLick = (event) => {
        console.log("Nguyen Tuan Anh ne")
        this.setState({
            name : "ok"
        })
    }
    ChangeText = (event) =>{
        this.setState({
            name : event.target.value
        })
    }
    PickValue=(event) =>{
        event.preventDefault();
        console.log(this.state.name +"\n"+this.state.address)
    }
    //JSX
    render(){
        return(
            <div>
                My name is {this.state.name}
                <form onSubmit={(event)=>this.PickValue(event)}>
                    <input type = 'text'
                    onChange={(event) => this.ChangeText(event)}/>
                    <button>click</button>
                    
                </form>
            </div>
        ) 
    }
}

export default MyComponent;