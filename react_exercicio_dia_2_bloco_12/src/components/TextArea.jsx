import React from 'react';

export default class TextArea extends React.Component {
  render() {
    const { name, id, maxLength, required, mouseOver } = this.props;
    return (
      <textarea name={ name } id={ id } maxLength={ maxLength } required={ required } onMouseEnter={ mouseOver } />
    )
  }
}