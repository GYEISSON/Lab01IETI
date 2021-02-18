
import React from 'react';


export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }   

    render() {
        return (  
            <div>
                <h2>{this.props.text}</h2> 
                //Do not forget to add the other properties of your TODO!
                <p>{this.props.priority}</p>
                <time>{this.props.dueDate}</time>
                

            </div>
        );
    }

}

