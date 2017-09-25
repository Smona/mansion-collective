import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './DynamicLogo.scss';
import { randInt } from '../../core/math';
import LogoFills from '../../assets/MansionLogoFills';
import LogoTransparent from '../../assets/mansion_logo_transparent.png';

class DynamicLogo extends Component {

  constructor() {
    super();
    if (typeof document === 'undefined' || !document.querySelector(`.${s.fill}`)) {
      this.state = { fill: LogoFills[randInt(LogoFills.length)] };
    } else {
      const ssrFill = document.querySelector(`.${s.fill}`).src;
      const splitURL = ssrFill.split('/');
      const path = `/${splitURL[splitURL.length - 1]}`;
      this.state = { fill: path };
    }

    this.changeFill = this.changeFill.bind(this);
  }

  changeFill() {
    let newFill;
    do {
      const newIdx = randInt(LogoFills.length);
      newFill = LogoFills[newIdx];
    } while (newFill === this.fill);

    setTimeout(() => {
      this.setState({ fill: newFill });
    }, 100);
  }

  render() {
    return (
      <div className={s.root} onMouseLeave={this.changeFill}
        style={{ width: `${this.props.size}px`, height: `${this.props.size}px` }}
      >
        <img className={s.fill} src={this.state.fill} />
        <img className={s.logo} src={LogoTransparent} />
      </div>
    );
  }
}

DynamicLogo.propTypes = {
  size: PropTypes.number.isRequired,
};

export default withStyles(DynamicLogo, s);
