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
import s from './Thesis.scss';
import TextBackground from '../../components/TextBackground';

function Thesis() {
  return (
    <div className={s.root}>
      <h1>Power To Artists</h1>
      <div className={s.container}>
        <TextBackground>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et libero eleifend,
              accumsan magna vitae, pulvinar tellus. Ut at aliquam dui, eu vehicula nibh. Etiam neque
              urna, hendrerit tincidunt pulvinar vel, aliquam a justo. Ut efficitur faucibus metus, sit
              amet porttitor magna viverra in. Aenean egestas purus cursus, malesuada sapien eu,
              vehicula ex. Curabitur diam sem, rutrum vel nibh id, placerat gravida risus. Pellentesque
              vel cursus diam, a sagittis eros. Mauris ac sem blandit nisl finibus sodales nec in
              libero. Nam libero ex, tempus vitae mauris quis, finibus dignissim risus. Pellentesque
              sodales elementum turpis, et tristique sapien congue quis. Vestibulum ac nunc eget magna
              sollicitudin elementum. Donec imperdiet, tellus vel lacinia viverra, lectus nunc aliquet
              nibh, sed bibendum quam nulla ut enim. Morbi ut lacus id ipsum accumsan dignissim eu in
              mi. In eu augue est. Nulla ut urna at magna tristique tristique. Praesent sodales massa
              dui, sed tincidunt felis fermentum non.
            </p>
            <p>
              Mauris vehicula diam ut ante tristique lobortis. Duis laoreet dolor in est egestas varius.
              Integer maximus porttitor lacus sed aliquet. Integer sapien magna, blandit a lectus at,
              malesuada facilisis enim. In pretium quis nibh in vestibulum. Phasellus sed luctus nisl,
              ac eleifend sem. Quisque ullamcorper vulputate tortor, vel vulputate sem. Nulla vel enim
              eget nibh posuere molestie id ut urna. Donec ac faucibus felis, sed luctus massa. Praesent
              sed libero viverra, cursus orci id, vehicula tortor. Duis interdum, lectus ac euismod
              pulvinar, leo metus posuere enim, ut vulputate felis elit et odio. Ut faucibus est at
              semper pulvinar. Suspendisse imperdiet erat quis risus pulvinar aliquam. Integer ut purus
              vitae sapien semper scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia Curae;
              </p>
            <p>
              Vestibulum viverra sagittis eros, et imperdiet dui vulputate vulputate. Nulla vitae nibh
              sed leo viverra consequat. Vestibulum sollicitudin consequat ipsum, at bibendum enim
              congue sit amet. Sed eget placerat massa, ac fermentum risus. Sed sollicitudin pulvinar
              eros ut viverra. Aenean congue mauris eget cursus tempor. Suspendisse vel est vel felis
              pellentesque ultricies. Donec enim diam, interdum ut velit id, blandit pharetra quam.
              Quisque at turpis tincidunt, malesuada nibh consequat, semper leo. In purus arcu,
              facilisis sit amet urna quis, ornare tempus lectus. Cras viverra ipsum ac velit tristique
              dictum. Nunc maximus augue sit amet leo porttitor dapibus. Praesent sed tempor lacus.
              Mauris pharetra consectetur ante, sed fringilla metus fermentum quis. Aliquam erat
              volutpat. Nulla vitae mauris elementum, blandit arcu a, porttitor nibh.
            </p>
        </TextBackground>
      </div>
    </div>
  );
}

export default withStyles(Thesis, s);
