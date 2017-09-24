/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import LogoFills from '../../assets/MansionLogoFills';
import LogoTransparent from '../../assets/mansion_logo_transparent.png';
import s from './Home.scss';
import Link from '../../components/Link';
import { randInt } from '../../core/math';

class Home extends Component {

  constructor() {
    super();
    if (typeof document === 'undefined') {
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
      <div className={s.root}>
        <div className={s.container}>
          <Link className={s.link} to="/menu" onMouseLeave={this.changeFill}>
            <img className={s.fill} src={this.state.fill} />
            <img className={s.logo} src={LogoTransparent} />
          </Link>
        </div>
      </div>
    );
  }
}

export default withStyles(Home, s);
