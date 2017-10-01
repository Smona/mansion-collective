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
import s from './Artists.scss';
import Link from '../../components/Link/Link';
import artists from '../../data/artists';

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
    top: `${(typeof window !== 'undefined') ? Math.random() * window.innerHeight * 0.5 : 0}px`,
    left: `${(typeof window !== 'undefined') ? Math.random() * window.innerWidth * 0.5 : 0}px`,
  };
}

function Artists() {
  return (
      <div className={s.container}>
        <ul className={s.artistList}>
          {Object.keys(artists).map(path =>
            <li key={path}>
              <Link to={`/artists/${path}`}
                onMouseEnter={hover.enable} onMouseLeave={hover.disable}
              >
                {artists[path].hasOwnProperty('hover') &&
                <video autoPlay muted loop type="video/mp4" className={s.hover}
                       src={artists[path].hover} style={randomPos()}
                />}
                <span className={s.artistName}>{artists[path].name}</span>
              </Link>
            </li>
          )}
        </ul>
      </div>
  );
}

export default withStyles(Artists, s);
