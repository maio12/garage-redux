import { FETCH_CARS, CAR_DESTROYED } from '../actions';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_CARS:
            return action.payload;
        case CAR_DESTROYED:
            return state.filter((car) => car !== action.payload);
        default:
            return state
    }
}