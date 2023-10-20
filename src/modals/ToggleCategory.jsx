/** @format */

import { Form, Input, Modal } from 'antd';
import React, { useEffect } from 'react';

const ToggleCategory = ({ isVisible, onClose, category, onSaveData }) => {
	const [form] = Form.useForm();

	useEffect(() => {
		isVisible && category && form.setFieldsValue(category);
	}, [category, isVisible]);

	const handleToggleCategy = (values) => {
		onSaveData(values);
		handleCloseModal();
	};

	const handleCloseModal = () => {
		form.resetFields();
		onClose();
	};

	return (
		<Modal
			title='Category'
			open={isVisible}
			onCancel={handleCloseModal}
			onOk={() => form.submit()}>
			<Form layout='vertical' form={form} onFinish={handleToggleCategy}>
				<Form.Item name={'title'} label='Title'>
					<Input placeholder='title' />
				</Form.Item>
				<Form.Item name={'description'} label='Description'>
					<Input.TextArea rows={5} placeholder='content' />
				</Form.Item>
			</Form>
		</Modal>
	);
};

export default ToggleCategory;
