import { compose, createStore, applyMiddleware } from 'redux'
// import logger from 'redux-logger'

import { rootReducer } from './root-reducer'

// const curryFunc = (a) => (b, c) => {
//     a + b -c
// }

// const with3 = curryFunc(3)
// const with10 = curryFunc(10)

// with3(2, 4); // 3 + 2 - 4
// with10(9, 2); // 10 + 9 - 2

const loggerMiddleware = (store) => (next) => (action) => {
    if(!action.type) {
        return next(action)
    }

    // console.log('type: ', action.type)
    // console.log('payload: ', action.payload)
    // console.log('currentState: ', store.getState())

    next(action)

    console.log('next state: ', store.getState())
}

const middleware = [loggerMiddleware]

const composeEnhancers = compose(applyMiddleware(...middleware))

export const store = createStore(rootReducer, undefined, composeEnhancers)