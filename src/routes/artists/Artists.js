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
import s from './Artists.scss';
import Link from '../../components/Link/Link';

const hover = {
  enable(e) {
    const originalText = e.target.innerHTML;
    // Use an odd number so middle copy remains in place
    const wrappedText = new Array(21).fill(originalText).join(' ');
    e.target.innerHTML = wrappedText;
    e.target.dataset.originalText = originalText;
  },

  disable(e) {
    const el = e.target;
    if (!!el.dataset.originalText) {
      el.innerHTML = el.dataset.originalText;
    }
  },
};

function randomPos() {
  return {
    top: `${(typeof window !== 'undefined') ?
      (Math.random() * window.innerHeight * 0.7).toFixed(2) : 0}px`,
    left: `${(typeof window !== 'undefined') ?
      (Math.random() * window.innerWidth * 0.7).toFixed(2) : 0}px`,
  };
}

function Artists({ artists }) {
  return (
      <div className={s.container}>
        <ul className={s.artistList}>
          {artists.map(artist =>
            <li key={artist.path}>
              <Link to={`/artists/${artist.path}`}
                onMouseEnter={hover.enable} onMouseLeave={hover.disable}
              >
                {artist.hover &&
                  artist.hover.search(/.*\.png|jpg$/) === -1 ?
                <video autoPlay muted loop className={s.hover} style={randomPos()}>
                  <source src={`${artist.hover}.mp4`} type="video/mp4" />
                  <source src={`${artist.hover}.ogg`} type="video/ogg" />
                  <source src={`${artist.hover}.webm`} type="video/webm" />
                </video>
                :
                <img src={artist.hover} className={s.hover} style={randomPos()} />
                }
                <span className={s.artistName}>{artist.name}</span>
              </Link>
            </li>
          )}
        </ul>
      </div>
  );
}

Artists.propTypes = {
  artists: PropTypes.array,
}

export default withStyles(Artists, s);
