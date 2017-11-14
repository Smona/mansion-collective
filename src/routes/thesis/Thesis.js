/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Thesis.scss';
import TextBackground from '../../components/TextBackground';

function Thesis({ children }) {
  return (
    <div className={s.root}>
      <h1>Power To Artists</h1>
      <div className={s.container}>
        <TextBackground>
          {children}
        </TextBackground>
      </div>
    </div>
  );
}

Thesis.propTypes = {
  children: PropTypes.string,
};

export default withStyles(Thesis, s);
