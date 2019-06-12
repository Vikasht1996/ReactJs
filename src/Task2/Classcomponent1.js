import React, { Component } from 'react';
import Functioncomponent1 from './Functioncomponent1';
import Classcomponent2 from './Classcomponent2';
import Classcomponent3 from './Classcomponent3';

class Classcomponent1 extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
            <Functioncomponent1 age="23">Karthik</Functioncomponent1>
            <Functioncomponent1 age="24">Arun</Functioncomponent1>
            <Functioncomponent1 age="26">Janendra</Functioncomponent1>
            <Functioncomponent1 age="22">Vikas</Functioncomponent1><br/><br/><br/>
            <Classcomponent2/><br/><br/><br/>
            <Classcomponent3/>

            </div>
        );
    }
}

export default Classcomponent1;