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
import s from './Profile.scss';

function Profile({ name }) {
  return (
      <div className={s.container}>
        <img src={'https://www.teamunhcr.org.au/images/empty-profile-image.jpg'}
          alt={`${name}'s profile image`}
        />
        <h1 className={s.nameText}>{name}</h1>
      </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
};

export default withStyles(Profile, s);
