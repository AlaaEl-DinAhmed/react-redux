import { createStore } from 'redux';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (counter = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return counter + action.payload;
        case DECREMENT:
            return counter - 1;
        default:
            return counter;
    }
}

const store = createStore(counterReducer)

export default store;