import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCars, destroyCar } from '../actions/index';

class CarsShow extends Component {
    handleClick = () => {
        this.props.destroyCar(this.props.history, this.props.car);
    }

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
            <div className="content-container">
                <div className="car-container">
                    <div className="car-card">
                        <img className="car-picture" src="/assets/images/car-icon.png" />
                        <div className="car-details">
                            <span>{this.props.car.brand} - {this.props.car.model}</span>
                            <ul>
                                <li><strong>Owner:</strong> {this.props.car.owner}</li>
                            </ul>
                            <span className="plate">{this.props.car.plate}</span>
                            <Link to="/">
                                Back
                            </Link>
                        </div>
                        <button onClick={this.handleClick}>Delete</button>
                    </div>
                </div>
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
    return bindActionCreators({ fetchCars, destroyCar }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow)