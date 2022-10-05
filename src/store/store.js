import { compose, createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { rootReducer } from './root-reducer'
import logger from 'redux-logger'
// import { loggerMiddleware } from './middleware/logger'
import thunk from 'redux-thunk'

const persistConfig = {
    key: 'root',
    storage,
    // blacklist: ['user'] // 放入不想要持久化的(user通常會放在local storage所以可以不用在redux中持久化)
    whitelist: ['cart'] // 放入想要持久化的(只想要cart持久化)
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleware = [process.env.NODE_ENV !== 'production' && logger, thunk].filter(Boolean) // production => development
// const middleware = [loggerMiddleware]



// Chrome Redux Dev Tools
const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const composeEnhancers = composeEnhancer(applyMiddleware(...middleware))

export const store = createStore(persistedReducer, undefined, composeEnhancers)

export const persistor = persistStore(store)