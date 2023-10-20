/** @format */
import { Button, Card, List, Space, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import ToggleCategory from '../modals/ToggleCategory';
import { Edit } from 'iconsax-react';

const FoldersScreen = () => {
	const [isVisibleModalCaterogy, setIsVisibleModalCaterogy] = useState(false);
	const [category, setCategory] = useState();
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		getAllCategories();
	}, []);

	const getAllCategories = async () => {
		const res = await localStorage.getItem('categories');

		res && setCategories(JSON.parse(res));
	};

	const handleAddNewCategory = async (values) => {
		if (values) {
			if (category) {
				const index = categories.findIndex(
					(element) => element.id === category.id
				);

				if (index) {
					const items = [...categories];
					items[index] = values;

					localStorage.setItem('categories', JSON.stringify(items));
				}

				// updayt
			} else {
				const items = [...categories];
				items.push(values);

				await localStorage.setItem('categories', JSON.stringify(items));
			}

			getAllCategories();
		}
	};

	const columns = [
		{
			key: 'fa',
			dataIndex: 'title',
			title: 'Title',
		},
		{
			key: 'btn',
			dataIndex: '',
			title: '',
			align: 'right',
			render: (item) => (
				<Space>
					<Button
						type='link'
						icon={<Edit size={16} color='#212121' />}
						onClick={() => {
							setCategory(item);
							setIsVisibleModalCaterogy(true);
						}}
					/>
				</Space>
			),
		},
	];

	return (
		<div className='container'>
			<div className='row'>
				<div className='col'>
					<h1>Folders</h1>
					<div className='mt-4'>
						<Table dataSource={categories} columns={columns} />
					</div>
				</div>
				<Button type='primary' onClick={() => setIsVisibleModalCaterogy(true)}>
					Add new
				</Button>
			</div>
			<ToggleCategory
				isVisible={isVisibleModalCaterogy}
				onClose={() => {
					setCategory(undefined);
					setIsVisibleModalCaterogy(false);
				}}
				category={category}
				onSaveData={(vals) => handleAddNewCategory(vals)}
			/>
		</div>
	);
};

export default FoldersScreen;
