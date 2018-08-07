import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bulma/css/bulma.css';
// import 'bulma/sass/layout/hero.sass'
import './Hero.scss';

const propTypes = {
  background: PropTypes.string,
  children: PropTypes.any,
  head: PropTypes.any,
  foot: PropTypes.any,
  size: PropTypes.string,
  gradient: PropTypes.bool
};
const defaultProps = {
  background: null,
  children: <p>Write JSX code between Hero Tags</p>,
  head: null,
  foot: null,
  size: 'medium',
  gradient: false
};

const allowedColorsString = ['primary', 'black', 'light', 'warning', 'danger', 'info', 'success'];


export default
class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  // componentWillUpdate(prevProps) {
  //   if (this.props !== prevProps) {
  //     this.setState({ background: this.props.background })
  //   }
  // }

  allowedColors = (colorString) => {
    return allowedColorsString.find((allowed) => allowed === colorString);
  };

  render() {
    let { background, children, head, foot, size, gradient } = this.props;
    const HeroCore = () => (
      <section className={`hero is-${background} is-${size} ${gradient && 'is-bold'}`}>
        {head && <div className={'hero-head'}>{head}</div>}
        <div className={'hero-body'}>
          <div className={'container'}>
            {children}
          </div>
        </div>
        {foot && <div className={'hero-foot'}>{foot}</div>}
      </section>
    );
    return (
      this.allowedColors(background) ? HeroCore() : <div style={{ backgroundColor: background }}>{ HeroCore() }</div>
    );
  }
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;
