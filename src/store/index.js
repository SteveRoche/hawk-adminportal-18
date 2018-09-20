import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "Reducers";

const configureStore = preloadedState => {
	//TODO: Disable redux logger in production
	const store = createStore(rootReducer, preloadedState, composeWithDevTools(applyMiddleware(thunk)));
	if (module.hot) {
		module.hot.accept("../reducers", () => {
			store.replaceReducer(rootReducer);
		});
	}
	return store;
};

export default configureStore;
