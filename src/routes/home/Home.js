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
    this.state = {
      fill: randInt(LogoFills.length)
    };
    this.changeFill = this.changeFill.bind(this);
  }

  changeFill() {
    let newIdx;
    do {
      newIdx = randInt(LogoFills.length);
    } while (newIdx === this.fill);

    setTimeout(() => {
      this.setState({ fill: newIdx });
    }, 100);
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Link className={s.link} to="/menu" onMouseLeave={this.changeFill}>
            <img className={s.fill} src={LogoFills[this.state.fill]} />
            <img className={s.logo} src={LogoTransparent} />
          </Link>
        </div>
      </div>
    );
  }
}

export default withStyles(Home, s);
