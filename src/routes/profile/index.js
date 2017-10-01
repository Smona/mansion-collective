/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Artists from '../../data/artists';
import ContentPage from '../../components/ContentPage';
import Profile from './Profile';

export const path = '/artists/:path';
export const action = async (state) => {
  const artist = Artists[state.params.path];
  const title = `${artist.name} | MANSION`;
  state.context.onSetTitle(title);
  return (<ContentPage title={title}>
           <Profile artist={artist} />
         </ContentPage>);
};
