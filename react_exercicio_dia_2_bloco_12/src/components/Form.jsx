import React from 'react';
import Input from './Input';
import states from '../arrayStates';

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
			selecionado: '',				
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
		this.handleOptionChange = this.handleOptionChange.bind(this);
	}

	handleChange({ target }) {
		const { name } = target;
		const value = target.type === 'radio' ? target.checked : target.value;
		this.setState({
			[name]: value,
		});
	}

	handleBlur(event){		
		(Number.isInteger(parseInt(event.target.value[0]))) ? 
			event.target.value = '' : 
			event.target.value = this.state.cidade
	}

	handleOptionChange({ target }) {
		this.setState({
			selecionado: target.value,
		})
	}

	render() {
		const { name, email, cpf, endereco, cidade, selecionado } = this.state;
		return (
			<fieldset>
				<label htmlFor="input-name">
					Nome:
					<Input 
						type="text" 
						name="name"
						id="input-name"
						maxLength="40"
						required={ true }
						value={ name.toUpperCase() }
						handleChange={ this.handleChange } 
					/>					
				</label>
				<label htmlFor="input-email">
					Email:
					<Input 
						type="email" 
						name="email"
						id="input-email"
						maxLength="50"
						required={ true }
						value={ email }
						handleChange={ this.handleChange } 
					/>				
				</label>
				<label htmlFor="input-cpf">
					CPF:
					<Input 
						type="text" 
						name="cpf"
						id="input-cpf"
						maxLength="11"
						required={ true }
						value={ cpf }
						handleChange={ this.handleChange } 
					/>			
				</label>
				<label htmlFor="input-endereco">
					Endereço:
					<Input 
						type="text" 
						name="endereco"
						id="input-endereco"
						maxLength="200"
						required={ true }
						value={ endereco.replace(/\W/g, '') }
						handleChange={ this.handleChange } 
					/>		
				</label>
				<label htmlFor="input-endereco">
					Cidade:
					<Input 
						type="text" 
						name="cidade"
						id="input-cidade"
						maxLength="28"						
						required={ true }
						value={ cidade }
						handleChange={ this.handleChange }
						handleBlur={this.handleBlur} 
					/>		
				</label>
				<label htmlFor="state-label">
					Estado:
					<select id="state-label">
						{states.sort().map((state, index) => <option key={index}>{state}</option>)}
					</select>
				</label>
				<label>
				Moradia:
					<label htmlFor="input-moradia-casa">
					Casa:
					<Input 
						type="radio" 
						name="selecionado"
						id="input-moradia-casa"
						maxLength="28"
						checked={ selecionado }
						required={ true }
						value="casa" 
						handleChange={ this.handleOptionChange } 
					/>
					</label>
					<label htmlFor="input-moradia-apartamento">
						Apartamento:
						<Input 
							type="radio" 
							name="selecionado"
							id="input-moradia-apartamento"
							maxLength="28"
							checked={ selecionado }
							required={ true }
							value="apartamento"
							handleChange={ this.handleOptionChange }				
						/>
					</label>
				</label>
				
			</fieldset>
		);
	}
}