import { compose, createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { rootReducer } from './root-reducer'


const loggerMiddleware = (store) => (next) => (action) => {
    if(!action.type) {
        return next(action)
    }

    console.log('type: ', action.type)
    console.log('payload: ', action.payload)
    console.log('currentState: ', store.getState())

    next(action)

    console.log('next state: ', store.getState())
}

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user'] // 放入不想要持久化的(user通常會放在local storage所以可以不用在redux中持久化)
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleware = [loggerMiddleware]

const composeEnhancers = compose(applyMiddleware(...middleware))

export const store = createStore(persistedReducer, undefined, composeEnhancers)

export const persistor = persistStore(store)