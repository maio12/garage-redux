import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//import { fetchCars } from '../actions';
//import { bindActionCreators } from 'redux';


class CarsIndex extends Component {
    //  componentDidMount() {
    //      this.props.fetchPosts();
    //  }
     renderCars() {
         return this.props.cars.map((car) => {
             return (
                  <Link to={`/cars/${car.id}`} key={car.id}>
                      <div className="post-item">
                          <h3>{car.brand}{car.model}</h3>
                          <p>{car.owner}</p>
                          <h2>{car.plate}</h2>
                      </div>
                  </Link>
              );
          });
      }
    render() {
        return (
            <div>
                <div className="first-row">
                    <h3>Garage</h3>
                    <Link className="btn btn-primary btn-cta" to="/posts/new">
                        Let's do something!
                    </Link>
                </div>
                {this.renderCars()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cars: state.cars
    }
}

// function mapDispatchToProps(dispatch) {
//      return bindActionCreators({ fetchCars }, dispatch);
//  }

export default connect(mapStateToProps)(CarsIndex);