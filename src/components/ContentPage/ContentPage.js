/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ContentPage.scss';
import Link from '../Link';
import DynamicLogo from '../DynamicLogo';

class ContentPage extends Component {

  static propTypes = {
    path: PropTypes.string,
    content: PropTypes.string,
    title: PropTypes.string,
  };

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(this.props.title);
  }

  render() {
    return (
      <div className={s.root}>
        {/* Home Link */}
        <Link to={'/menu'} className={s.homeLink}>
          <DynamicLogo size={50} />
        </Link>
        <div className={s.container}>
          {this.props.children}
        </div>
      </div>
    );
  }

}

export default withStyles(ContentPage, s);
