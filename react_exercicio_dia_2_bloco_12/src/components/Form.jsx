import React from 'react';

export default class Form extends React.Component {
	constructor(){
		super();
		this.state={
			name:'',
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
		return (
			<fieldset>
				<label htmlFor="input-name">
					Nome:
					<input
					name="name"
					id="input-name"
					maxLength="40"
					required="true"
					value={this.handleChange}			
					/>
				</label>
			</fieldset>
		);
	}
}