import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class SmurfForm extends React.Component {
    state = {
        name: '',
        age: '',
        height: '',
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleAddSmurf = () => {
        const {name, age, height} = this.state;
        this.props.addSmurf({name, age, height})
        this.setState({name: '', age: '', height: ''})
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
                <button onClick={() => this.handleAddSmurf()} type='button'>
                    Add Smurf
                </button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        smurf: state.addSmurf
    }
}

export default connect(
    mapStateToProps,
    {addSmurf}
)(SmurfForm)