/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './TextBackground.scss';

function TextBackground({ className, children }) {
  return (
    <div className={cx(s.root, className)} role="navigation">
      {children}
    </div>
  );
}

TextBackground.propTypes = {
  className: PropTypes.string,
};

export default withStyles(TextBackground, s);
