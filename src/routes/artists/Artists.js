/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Artists.scss';
import Link from '../../components/Link/Link';

const hover = {
  enable(e) {
    const originalText = e.target.innerHTML;
    // Use an odd number so middle copy remains in place
    const wrappedText = new Array(11).fill(originalText).join(' ');
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

const artists = [
  {
    name: 'softandasleep',
    path: 'softandasleep',
  },
  {
    name: 'DJ Gosh',
    path: 'djgosh',
  },
  {
    name: 'Yessy',
    path: 'yessy',
  },
  {
    name: 'Delatropic',
    path: 'delatropic',
  },
  {
    name: 'Guyjin',
    path: 'guyjin',
  },
];

function Artists() {
  return (
      <div className={s.container}>
        <ul className={s.artistList}>
          {artists.map(info =>
            <li key={info.name}>
              <Link to={`artists/${info.path}`}
                onMouseEnter={hover.enable} onMouseLeave={hover.disable}
              >{info.name}</Link>
            </li>
          )}
        </ul>
      </div>
  );
}

export default withStyles(Artists, s);
