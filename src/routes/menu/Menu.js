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
import { randInt } from "../../core/math";
import s from './Menu.scss';
import effects from './HoverEffects';
import Link from '../../components/Link';

const menuItems = {
  Artists: '/artists',
  Thesis: '/thesis',
};

const effectsList = Object.keys(effects);
let currentHoverEffect;
function addHoverStyle(e) {
  // Pick a new text effect randomly
  const effectIndex = randInt(effectsList.length);
  currentHoverEffect = effectsList[effectIndex];
  effects[currentHoverEffect].enable(e.target);
}

function removeHoverStyle(e) {
  effects[currentHoverEffect].disable(e.target);
}

function Menu() {
  return (
    <div className={s.root}>
      {Object.keys(menuItems).map(key =>
        <Link className={s.link} to={menuItems[key]} key={key}
          onMouseEnter={addHoverStyle} onMouseLeave={removeHoverStyle}
        >
          {key}
          </Link>
      )}
    </div>
  );
}

export default withStyles(Menu, s);
