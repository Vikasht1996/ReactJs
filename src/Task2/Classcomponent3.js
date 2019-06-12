import React, { Component } from 'react';
import Functioncomponent3 from './Functioncomponent3';

class Classcomponent3 extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
            <Functioncomponent3 dob="23-12-1992">Karthik</Functioncomponent3>
            <Functioncomponent3 dob="28-02-1993">Arun</Functioncomponent3>
            <Functioncomponent3 dob="19-03-1991">Janendra</Functioncomponent3>
            <Functioncomponent3 dob="02-09-1996">Vikas</Functioncomponent3>
            </div>
        );
    }
}

export default Classcomponent3;