import { createStore } from 'redux';
import themeReducer from './reducer';

const store = createStore(themeReducer, { isDarkMode: true });

export default store;