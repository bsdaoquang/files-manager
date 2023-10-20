/** @format */

import { Layout } from 'antd';
import './App.css';
import { SiderComponent } from './components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
	FavouritesScreen,
	HomeScreen,
	RecentScreen,
	SchedulerScreen,
	UserScreen,
} from './screens';
import FoldersScreen from './screens/FoldersScreen';

const { Content, Sider } = Layout;

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<SiderComponent />
				<div className='container-fluid mt-4'>
					<Routes>
						<Route path='/' element={<HomeScreen />} />
						<Route path='/recents' element={<RecentScreen />} />
						<Route path='/schedulers' element={<SchedulerScreen />} />
						<Route path='/users' element={<UserScreen />} />
						<Route path='/favourites' element={<FavouritesScreen />} />
						<Route path='/folders' element={<FoldersScreen />} />
					</Routes>
				</div>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
