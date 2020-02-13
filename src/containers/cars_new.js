import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createCar } from '../actions';

class CarsNew extends Component {
    onSubmit = (values) => {
        this.props.createCar(this.props.garage, values, () => {
            this.props.history.push('/'); // Navigate after submit
            //return car;
        });
    }
    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type={field.type}
                    {...field.input}
                />
            </div>
        );
    }
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="InputBrand">Brand</label>
                        <Field name="brand" type="text" placeholder="Aston Martin" component="input" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="InputModel">Model</label>
                        <Field name="model" type="text" placeholder="DB Mark III" component="input" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="InputOwner">Owner</label>
                        <Field name="owner" type="text" placeholder="James Bond" component="input" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="InputPlate">Plate</label>
                        <Field name="plate" type="text" placeholder="DB Mark III" component="input" className="form-control" />
                    </div>
                    <button type="submit">Add car</button>
                </form>

            </div>

        )
    }
}

function mapStateToProps(state) {
  return {
    garage: state.garage
  };
}

export default reduxForm({ form: 'newCarsForm' })(
    connect(mapStateToProps, { createCar })(CarsNew)
);