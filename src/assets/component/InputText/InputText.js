import React from 'react';
import { inputTextContainer } from './inputTextContainer';

@inputTextContainer
 class InputText extends React.Component{
  render() {
    return(
      <div>
        <input type="text" name="name" {...this.props.name} />
      </div>
    )
  }
}

export default InputText 
