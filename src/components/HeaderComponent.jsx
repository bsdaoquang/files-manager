/** @format */

import { Avatar, Dropdown, Input, Space, Button } from 'antd';
import { SearchNormal1 } from 'iconsax-react';
import React from 'react';

const HeaderComponent = () => {
	return (
		<div className='row' style={{ alignItems: 'center' }}>
			<div className='col p-3'>
				<Input
					style={{ width: '100%' }}
					prefix={<SearchNormal1 size={18} color='#676767' />}
					placeholder='Search....'
					bordered={false}
				/>
			</div>
			<div style={{ padding: '0 15px' }}>
				<Button>
					<Space>
						<Avatar size={20}>VA</Avatar>
						Mind X
					</Space>
				</Button>
			</div>
		</div>
	);
};

export default HeaderComponent;
