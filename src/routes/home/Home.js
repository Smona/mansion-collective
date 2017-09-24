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
import s from './Home.scss';
import Link from '../../components/Link';
import DynamicLogo from '../../components/DynamicLogo';

class Home extends Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Link className={s.link} to="/menu">
            <DynamicLogo/>
          </Link>
        </div>
      </div>
    );
  }
}

export default withStyles(Home, s);
