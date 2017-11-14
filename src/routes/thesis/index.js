/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Thesis from './Thesis';
import ContentPage from '../../components/ContentPage';
import fetch from '../../core/fetch';

export const path = '/thesis';
export const action = async (state) => {
  const response = await fetch('/graphql?query={content(path:"thesis"){content,title}}');
  let data = await response.json();
  data = data.data.content;
  state.context.onSetTitle(data.title);
  return (<ContentPage title={data.title}>
           <Thesis>
             { data.content }
           </Thesis>
          </ContentPage>);
};
