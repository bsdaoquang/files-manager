/** @format */

import { Layout, Menu } from 'antd';
import {
	CalendarAdd,
	CloudLightning,
	Element4,
	Home,
	Profile2User,
	Star1,
} from 'iconsax-react';
import React from 'react';
import { useNavigate, useRoutes } from 'react-router-dom';

const { Sider } = Layout;

const SiderComponent = () => {
	const navigate = useNavigate();

	const menuOptions = {
		size: 20,
		color: '#676767',
	};

	const items = [
		{
			key: '',
			icon: <Element4 size={menuOptions.size} color={menuOptions.color} />,
			label: 'Home',
		},
		{
			key: 'schedulers',
			icon: <CalendarAdd size={menuOptions.size} color={menuOptions.color} />,
			label: 'Scheduler',
		},
		{
			key: 'recents',
			icon: (
				<CloudLightning size={menuOptions.size} color={menuOptions.color} />
			),
			label: 'Recents',
		},
		{
			key: 'users',
			icon: <Profile2User size={menuOptions.size} color={menuOptions.color} />,
			label: 'Users',
		},
		{
			key: 'favourites',
			icon: <Star1 size={menuOptions.size} color={menuOptions.color} />,
			label: 'Favourites',
		},
	];

	return (
		<Sider theme='light' collapsed style={{ height: '100vh' }}>
			<Menu items={items} onClick={(e) => navigate(`/${e.key}`)} />
		</Sider>
	);
};

export default SiderComponent;
