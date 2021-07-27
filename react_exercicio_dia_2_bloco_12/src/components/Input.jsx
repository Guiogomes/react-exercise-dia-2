import React from 'react';
import PropTypes from 'prop-types';
class Input extends React.Component {
	render() {
		const {type, name, id, maxLength, required, value, handleChange, handleBlur} = this.props;
		return(
			<input
					type={ type }
					name={ name }
					id={ id }
					maxLength={ maxLength }
					required={ required }
					value={ value }
					onChange={ handleChange }
					onBlur={ handleBlur }
			/>
		)
	}
}

Input.propTypes = {
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	maxLength: PropTypes.string.isRequired,
	required: PropTypes.bool.isRequired,
	value: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
	handleBlur: PropTypes.func
}

export default Input;