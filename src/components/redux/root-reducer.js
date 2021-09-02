import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import basketReducer from './basket/basket.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['basket'],
};

const rootReducer = combineReducers({
  user: userReducer,
  basket: basketReducer,
});

export default persistReducer(persistConfig, rootReducer);
