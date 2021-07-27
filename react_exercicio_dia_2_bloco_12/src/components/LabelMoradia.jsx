import React from 'react';
import Input from './Input';

export default class Label extends React.Component {
	render() {
		const { id } = this.props;

		return(
			<label htmlFor={
				id === 'input-moradia-casa' ? 
				'input-moradia-casa' : 
				'input-moradia-apartamento'
			}>
				<Input />
			</label>
		);
	}
}