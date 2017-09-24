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
import Link from "../../components/Link/Link";

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
    <div className={s.root}>
      <div className={s.container}>
        <ul className={s.artistList}>
          {artists.map(info =>
            <li><Link to={`artists/${info.path}`}>{info.name}</Link></li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default withStyles(Artists, s);
