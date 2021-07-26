import React from 'react';

export default class Form extends React.Component {
	constructor(){
		super();
		this.state={
			name: '',
			email: '',
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange({ target }) {
		const { name, value } = target;
		this.setState({
			[name]: value,
		});
	}

	render() {
		const { name, email } = this.state;
		return (
			<fieldset>
				<label htmlFor="input-name">
					Nome:
					<input
					type="text"
					name="name"
					id="input-name"
					maxLength="40"
					required="true"
					value={ name.toUpperCase() }
					onChange={ this.handleChange }
					/>
				</label>
				<label htmlFor="input-email">
					Email:
					<input
					type="email"
					name="email"
					id="input-email"
					maxLength="50"
					required="true"
					value={ email }
					onChange={ this.handleChange }
					/>
				</label>
			</fieldset>
		);
	}
}