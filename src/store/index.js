import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "Reducers";
import logger from 'redux-logger';

const initialState = {

};

const configureStore = preloadedState => {
	const store = createStore(rootReducer, preloadedState, compose(applyMiddleware(thunk, logger)));
	if (module.hot) {
		module.hot.accept("../reducers", () => {
			store.replaceReducer(rootReducer);
		});
	}
	return store;
};

export default configureStore;
