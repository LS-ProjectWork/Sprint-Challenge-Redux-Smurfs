import React from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';

class SmurfList extends React.Component {
    componentDidMount() {
        console.log(this.props)
        this.props.getSmurfs()
    }

    render() {
        return (
            <div>
                <h2>Our Favorite Smurfs</h2>
                {this.props.fetchingSmurfs && (
                    <h3>Loading...</h3>
                )}
                {this.props.smurfs.map(smurf => {
                    return (
                        <div>
                            <h2>{smurf.name}</h2>
                            <h4>{smurf.age}</h4>
                            <h4>{smurf.height}</h4>
                       </div>
                    )
                })}
                {this.props.error && <p>{this.props.error}</p>}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    fetchingSmurfs: state.fetchingSmurfs,
    smurfs: state.smurfs,
    error: state.error
})

export default connect(
    mapStateToProps,
    {getSmurfs}
)(SmurfList)