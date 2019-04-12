import React from 'react';
import { connect } from 'react-redux';

class SmurfForm extends React.Component {
    state = {
        name: '',
        age: '',
        height: '',
    }

    render(){
        return (
            <form>
                <input
                type='text'
                name='name'
                placeholder='name'
                value={this.state.name}
                onChange={this.handleChange}/>
                <input
                type='text'
                name='age'
                placeholder='age'
                value={this.state.age}
                onChange={this.handleChange} />
                <input
                type='text'
                name='height'
                placeholder='height'
                value={this.state.height}
                onChange={this.handleChange} />
            </form>
        )
    }
}