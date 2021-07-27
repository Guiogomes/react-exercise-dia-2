import React from 'react';
// exercício realizado no modelo Dojo por Fabio Juvenal, Rodrigo Augusto e
// Guilherme Gomes
export default class Form extends React.Component {
	constructor(){
		super();
		this.state={
			name: '',
			email: '',
			cpf:'',
			endereco: '',
			cidade: '',
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
		const { name, email, cpf, endereco, cidade } = this.state;
		return (
			<fieldset>
				<label htmlFor="input-name">
					Nome:
					<input
					type="text"
					name="name"
					id="input-name"
					maxLength="40"
					required={ true }
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
					required={ true }
					value={ email }
					onChange={ this.handleChange }
					/>
				</label>
				<label htmlFor="input-cpf">
					CPF:
					<input
					type="text"
					name="cpf"
					id="input-cpf"
					maxLength="11"
					required={ true }
					value={ cpf }
					onChange={ this.handleChange }
					/>
				</label>
				<label htmlFor="input-endereco">
					Endereço:
					<input
					type="text"
					name="endereco"
					id="input-endereco"
					maxLength="200"
					required={ true }
					value={ endereco.replace(/\W/g, '') }
					onChange={ this.handleChange }
					/>
				</label>
				<label htmlFor="input-endereco">
					Cidade:
					<input
					type="text"
					name="cidade"
					id="input-cidade"
					maxLength="28"
					required={ true }
					value={ cidade }
					onChange={ this.handleChange }
					onBlur={(event) => 
						(Number.isInteger(parseInt(event.target.value[0]))) ? 
							event.target.value = '' : 
							event.target.value = cidade
					}
					/>
				</label>
			</fieldset>
		);
	}
}