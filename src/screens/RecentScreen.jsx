/** @format */

import React from 'react';
import { HeaderComponent, TabbarComponent } from '../components';
import { Button, Space } from 'antd';
import { Setting3 } from 'iconsax-react';
import { Link } from 'react-router-dom';

const RecentScreen = () => {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-8'>
					<HeaderComponent />
					<TabbarComponent
						title={'Folders'}
						right={
							<Link to={'/folders'} type='link'>
								See all
							</Link>
						}
					/>
				</div>
				<div className='col bg-white'>sidr</div>
			</div>
		</div>
	);
};

export default RecentScreen;
