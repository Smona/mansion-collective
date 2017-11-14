/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Artists from './Artists';
import ContentPage from '../../components/ContentPage';
import fetch from '../../core/fetch';

export const path = '/artists';
export const action = async (state) => {
  const response = await fetch('/graphql?query={artists{name,path,hover}}');
  const artists = await response.json();
  const title = 'Artists | MANSION';
  state.context.onSetTitle(title);
  return (<ContentPage title={title}>
           <Artists artists={artists.data.artists} />
         </ContentPage>);
};
