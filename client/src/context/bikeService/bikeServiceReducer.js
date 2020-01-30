import { SHOW_LOADER, HIDE_LOADER, ADD_BIKE, REMOVE_BIKE, FETCH_BIKES } from '../types';

const handlers = {
    [SHOW_LOADER]: state => ({
        ...state,
        loading: true
    }),
    [HIDE_LOADER]: state => ({
        ...state,
        loading: false
    }),
    [ADD_BIKE]: (state, { payload }) => ({
        ...state,
        bikes: [...state.bikes, payload]
    }),
    [REMOVE_BIKE]: (state, { payload: id }) => ({
        ...state,
        bikes: state.bikes.filter(bike => bike.id !== id)
    }),
    [FETCH_BIKES]: (state, { payload }) => ({ ...state, bikes: payload, loading: false }),
    DEFAULT: state => state
};

export const bikeServiceReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action);
}