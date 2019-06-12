import React, { Component } from 'react';
import Functioncomponent2 from './Functioncomponent2';

class Classcomponent2 extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
            <Functioncomponent2 city="Pandavpura">Karthik</Functioncomponent2>
            <Functioncomponent2 city="Mysore">Arun</Functioncomponent2>
            <Functioncomponent2 city="Pandavapura">Janendra</Functioncomponent2>
            <Functioncomponent2 city="Mandya">Vikas</Functioncomponent2>
            </div>
        );
    }
}

export default Classcomponent2;