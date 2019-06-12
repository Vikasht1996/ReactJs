import React, { Component } from 'react';

class Setstatebind extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            Name:'karthik',
            age:'24',
            city:'Pandavapura'
        }
        this.changeName=this.changeName.bind(this);
    }
    changeName()
    {
        this.setState({ Name:'Vikas',age:'22'});
    }
    handleChanges
    render() {
        return (
                <div>
                <h1>{this.state.Name}| {this.state.age}</h1>
                <button onClick={this.changeName}>Change</button>
                </div>  
            
        );
    }
}

export default Setstatebind;