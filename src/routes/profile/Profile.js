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

const socialLinks = {
  fb: 'https://facebook.com/',
  soundcloud: 'https://soundcloud.com/',
  mixcloud: 'https://mixcloud.com/',
  insta: 'https://instagram.com/',
  twitter: 'https://twitter.com/',
  youtube: 'https://youtube.com/',
  website: 'https://',
};

function Profile({ artist }) {
  console.log(artist);
  let logo = null;
  if (artist.logo) {
    logo = <img className={s.logo} src={artist.logo} alt={`${artist.name} logo`} />;
  } else {
    logo = <h1 className={s.logo}>{artist.name}</h1>;
  }

  return (
      <div className={s.container}>
        {artist.picture && <img src={artist.picture}
          alt={`${artist.name}'s profile image`}
        />}
        <br />
        {logo}

        {artist.bio && <TextBackground className={s.bio}>
          {artist.bio}
        </TextBackground>}

        {/* Social Links */
        Object.keys(socialLinks).
          filter(key => artist[key]).
          map(key =>
          <a target="_blank" rel="noopener"
            href={socialLinks[key] + artist[key]}
          >
            {key}
          </a>)
        }
      </div>
  );
}

Profile.propTypes = {
  artist: PropTypes.object.isRequired,
};

export default withStyles(Profile, s);
