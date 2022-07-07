import React from 'react';
// Redux
import store from './redux/store';
import { Provider } from 'react-redux';
// Components
import MainScreen from './components/MainScreen';

const App = () => {
	return (
		<div className='App'>
			<Provider store={store}>
				<MainScreen></MainScreen>
			</Provider>
		</div>
	);
};

export default App;
