import { applyMiddleware, createStore } from "redux";
import reducers from './root'
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const presistedReducer = persistReducer(persistConfig, reducers );
const store = createStore(presistedReducer, 
composeWithDevTools(applyMiddleware(thunk)));
const persistor = persistStore(store);
export default store;
export { persistor };