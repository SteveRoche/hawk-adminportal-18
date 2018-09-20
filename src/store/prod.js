import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "Reducers";

const configureStore = preloadedState => {
	const store = createStore(rootReducer, preloadedState, compose(applyMiddleware(thunk)));
	if (module.hot) {
		module.hot.accept("../reducers", () => {
			store.replaceReducer(rootReducer);
		});
	}
	return store;
};

export default configureStore;
