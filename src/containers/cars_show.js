import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCars } from '../actions/index';


class CarsShow extends Component {
     componentDidMount() {
         if (!this.props.car) {
             this.props.fetchCars(this.props.match.params.id);
         }
     }
    render() {
        if (!this.props.car) {
            return <p>Loading...</p>;
        }
        return (
            <div>
                <div className="post-item">
                    <h3>{this.props.car.brand}</h3>
                    <p>{this.props.car.model}</p>
                    <p>{this.props.car.owner}</p>
                    <p>{this.props.car.plate}</p>
                </div>
                <Link to="/">
                    Back
                </Link>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const idFromUrl = parseInt(ownProps.match.params.id, 10); // From URL
    const car = state.cars.find(car => car.id === idFromUrl);
    return { car };
}

function mapDispatchToProps(dispatch) {
 return bindActionCreators({ fetchCars }, dispatch);
} 

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow)