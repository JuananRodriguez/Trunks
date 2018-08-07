import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Headers.scss';

const propTypes = {};
const defaultProps = {};

export default
class Headers extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className="headers">
        <p>hola</p>
      </div>
    );
  }
}

Headers.propTypes = propTypes;
Headers.defaultProps = defaultProps;
