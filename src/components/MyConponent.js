import React from "react";
class MyComponent extends React.Component{

    state = {
        name : "tuan anh",
        address : "Nam dinh"
    };
    handleCLick(event){
        console.log("Nguyen Tuan Anh ne")
    }
    handleOnMoverOver(){
        console.log("ok")
    }
    //JSX
    render(){
        return(
            <div>
                My name is {this.state.name}
                <button onClick = {
                    this.handleCLick
                    }>
                    Click me now !
                </button>
                <button onMouseOver={this.handleOnMoverOver}>
                    Holder
                </button>
            </div>
        ) 
    }
}

export default MyComponent;