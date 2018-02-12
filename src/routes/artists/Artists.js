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

function Artists({ artists }) {
  return (
    <div className={s.container}>
      <ul className={s.artistList}>
        {artists.map(artist =>
          <li key={artist.path}>
            <ArtistLink url={artist.path} hoverImg={artist.hover}>
              <span className={s.artistName}>{artist.name}</span>
            </ArtistLink>
          </li>
        )}
      </ul>
    </div>
  );
}

class ArtistLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
    };
  }

  componentDidMount() {
    this.generateNewPosition();
  }

  generateNewPosition() {
    if (this.hoverEl) {
      this.setState({
        y: (Math.random() * (window.innerHeight - this.hoverEl.clientHeight)).toFixed(2),
        x: (Math.random() * (window.innerWidth - this.hoverEl.clientWidth)).toFixed(2),
      });
    }
  }

  hoverPos() {
    return {
      left: `${this.state.x}px`,
      top: `${this.state.y}px`,
    };
  }

  mouseLeave(e) {
    hover.disable(e);
    this.generateNewPosition();
  }

  render() {
    return (
      <Link to={`/artists/${this.props.url}`}
        onMouseEnter={hover.enable} onMouseLeave={e => this.mouseLeave(e)}
      >
        {this.props.hoverImg &&
          this.props.hoverImg.search(/.*\.png|jpg$/) === -1 ?
        <video autoPlay muted loop
          className={s.hover} style={this.hoverPos()}
          ref={hoverEl => { this.hoverEl = hoverEl; }}
        >
          <source src={`${this.props.hoverImg}.mp4`} type="video/mp4" />
          <source src={`${this.props.hoverImg}.ogg`} type="video/ogg" />
          <source src={`${this.props.hoverImg}.webm`} type="video/webm" />
        </video>
        :
        <img src={this.props.hoverImg}
          className={s.hover} style={this.hoverPos()}
          ref={hoverEl => { this.hoverEl = hoverEl; }}
        />
        }
        {this.props.children}
      </Link>
    );
  }
}

Artists.propTypes = {
  artists: PropTypes.array,
};

ArtistLink.propTypes = {
  url: PropTypes.string,
  children: PropTypes.node,
  hoverImg: PropTypes.string,
};

export default withStyles(Artists, s);
