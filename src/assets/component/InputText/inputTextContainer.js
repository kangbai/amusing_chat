import React, { Component } from 'React';

export const inputTextContainer = (inputComponent) => 
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: ''
      }
      this.onNameChage = (e) => {
        this.setState({
          name: e.targe.value
        })
      }
    }

    render() {
      const newProps = {
        name: {
          value: this.state.name,
          onChange: this.onChange
        }
      }

      return <inputComponent {...this.props} {...newProps} />
    }
  }

  