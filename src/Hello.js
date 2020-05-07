import React from 'react';
import './Hello.css';

class Hello extends React.Component {
    render() {
        return (
            // font 1 and text center
            <div className='f1 tc'>
                <h1>Hello World</h1>
                <p>Lets learn React</p>
                <p>{this.props.greeting}</p>
            </div>
        )
    }
}

export default Hello;