import React from 'react';
import {Todo} from './Todo';


export class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }   

    render() {
        return (  
            <h2>{this.props.text}</h2> 
            //Do not forget to add the other properties of your TODO!
        );
    }

}