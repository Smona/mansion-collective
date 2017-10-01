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
import TextBackground from '../../components/TextBackground';

function Profile({ artist }) {
  let logo = null;
  if (artist.hasOwnProperty('logo')) {
    logo = <img className={s.logo} src={artist.logo} alt={`${artist.name} logo`} />;
  } else {
    logo = <h1 className={s.logo}>{artist.name}</h1>;
  }

  return (
      <div className={s.container}>
        <img src={artist.picture}
          alt={`${artist.name}'s profile image`}
        />
        <br />
        {logo}
        <TextBackground>
          <p className={s.bio}>
            {artist.bio}
          </p>
        </TextBackground>
      </div>
  );
}

Profile.propTypes = {
  artist: PropTypes.isRequired,
};

export default withStyles(Profile, s);
