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

import Facebook from 'react-icons/lib/fa/facebook';
import Twitter from 'react-icons/lib/fa/twitter';
import Youtube from 'react-icons/lib/fa/youtube-play';
import Soundcloud from 'react-icons/lib/fa/soundcloud';
import Instagram from 'react-icons/lib/fa/instagram';
import Mixcloud from 'react-icons/lib/fa/mixcloud';

const socialLinks = {
  fb: {
    url: 'https://facebook.com/',
    icon: Facebook,
  },
  soundcloud: {
    url: 'https://soundcloud.com/',
    icon: Soundcloud,
  },
  mixcloud: {
    url: 'https://mixcloud.com/',
    icon: Mixcloud,
  },
  insta: {
    url: 'https://instagram.com/',
    icon: Instagram,
  },
  twitter: {
    url: 'https://twitter.com/',
    icon: Twitter,
  },
  youtube: {
    url: 'https://youtube.com/',
    icon: Youtube,
  },
  website: {
    url: 'https://',
    icon: () => <span className={s.icon}>www</span>,
  },
};

function Profile({ artist }) {
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

        <div className={s.icons}>
          {/* Social Links */
          Object.keys(socialLinks).
            filter(key => artist[key]).
            map(key => {
              const Component = socialLinks[key].icon;
              return (<a target="_blank" rel="noopener"
                href={socialLinks[key].url + artist[key]}
                key={key}
              >
                <Component className={s.icon} />
              </a>);
            })
          }
        </div>
      </div>
  );
}

Profile.propTypes = {
  artist: PropTypes.object.isRequired,
};

export default withStyles(Profile, s);
