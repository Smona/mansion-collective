/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import ContentPage from '../../components/ContentPage';
import Profile from './Profile';
import fetch from '../../core/fetch';

export const path = '/artists/:path';
export const action = async (state) => {
  const response = await fetch(`/graphql?query={artist(path:"${state.params.path}"){bio,name,logo,picture,fb,soundcloud,insta,twitter,mixcloud,youtube,website}}`);
  let artist = await response.json();
  artist = artist.data.artist;
  const title = `${artist.name} | MANSION`;
  state.context.onSetTitle(title);
  return (<ContentPage title={title}>
           <Profile artist={artist} />
         </ContentPage>);
};
