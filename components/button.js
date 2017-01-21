
import React from 'react';
import ReactDOM from 'react-dom';

class NavButton extends React.components {

  propTypes: {
    section: React.PropTypes.string.isRequired
  },

  render() {
    return (
      <h1>{this.props.section}</h1>
    )
  }
}

ReactDOM.render(
  <NavButton section="Finance"/>, document.getElementById('finance')
)
