import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCars } from '../actions';
import { bindActionCreators } from 'redux';


class CarsIndex extends Component {
    componentWillMount() {
        this.props.fetchCars(this.props.garage);
    }
    renderCars() {
        return this.props.cars.map((car) => {
            return (
                <Link to={`/cars/${car.id}`} key={car.id}>
                    <div className="car-smallad">
                        <img className="car-logo" src="assets/images/car-icon.png" />
                        <div className="car-details">
                            <span>{car.brand} - {car.model}</span>
                            <ul>
                                <li><strong>Owner: </strong>{car.owner}</li>
                                <li>Car plate: {car.plate}</li>
                            </ul>
                        </div>
                    </div>
                </Link>
            );
        });
    }
    render() {
        return (
            <div className="content-container">
                <div className="list-container">
                    <h3><strong>Redux Garage</strong></h3>
                    <Link  to="/cars/new">
                        Add a new car!
                    </Link>

                    <div className="cars-container">
                        {this.renderCars()}
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cars: state.cars,
        garage: state.garage
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);

// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { fetchCars } from '../actions';
// import { bindActionCreators } from 'redux';


// class CarsIndex extends Component {
//        componentWillMount() {
//            this.props.fetchCars(this.props.garage);
//        }
//      renderCars() {
//          return this.props.cars.map((car) => {
//              return (
//                   <Link to={`/cars/${car.id}`} key={car.id}>
//                       <div className="post-item">
//                           <h3>{car.brand}{car.model}</h3>
//                           <p>{car.owner}</p>
//                           <h2>{car.plate}</h2>
//                       </div>
//                   </Link>
//               );
//           });
//       }
//     render() {
//         return (
//             <div>
//                 <div className="first-row">
//                     <h3>Garage</h3>
//                     <Link className="btn btn-primary btn-cta" to="/posts/new">
//                         Let's do something!
//                     </Link>
//                 </div>
//                 {this.renderCars()}
//             </div>
//         );
//     }
// }

// function mapStateToProps(state) {
//     return {
//         cars: state.cars,
//         garage: state.garage
//     }
// }

//  function mapDispatchToProps(dispatch) {
//       return bindActionCreators({ fetchCars }, dispatch);
//   }

// export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);