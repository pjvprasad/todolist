import React from 'react';


class HelloUser extends React.Component{
    
    state={
        name:"Rohan",
        age:50,
        b1:1,
        b2:2,
    };
    constructor(props){
        super(props)
        this.changeColor = this.changeColor.bind(this);
    }
    render(){
        const colors = ["red","green","yellow"];
        return <div className="text-center">
            <h1>Hello {this.state.name} you are {this.state.age} years old</h1>
            <button onClick={()=>this.changeColor("b1")} style={{"background-color":colors[this.state.b1]}} className="btn">Button1</button>
            <button onClick={()=>this.changeColor("b2")} style={{"background-color":colors[this.state.b2]}} class={"btn"}>Button2</button>
        </div>
    }
    changeColor(key){
        let color = this.state[key];
        color = (color+1)%3;
        this.setState({...this.state,[key]:color});
    }
}
export default HelloUser;