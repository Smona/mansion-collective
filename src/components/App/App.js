/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import emptyFunction from 'fbjs/lib/emptyFunction';
import s from './App.scss';
import { randInt } from '../../core/math';
import backgrounds from './backgroundURLs';

function roundToHundred(i) {
  return Math.ceil(i / 200) * 200;
}

class App extends Component {

  static propTypes = {
    context: PropTypes.shape({
      insertCss: PropTypes.func,
      onSetTitle: PropTypes.func,
      onSetMeta: PropTypes.func,
      onPageNotFound: PropTypes.func,
    }),
    children: PropTypes.element.isRequired,
    route: PropTypes.string,
    error: PropTypes.object,
  };

  static childContextTypes = {
    insertCss: PropTypes.func.isRequired,
    onSetTitle: PropTypes.func.isRequired,
    onSetMeta: PropTypes.func.isRequired,
    onPageNotFound: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.changeBackground = this.changeBackground.bind(this);
    this.responsiveBG = this.responsiveBG.bind(this);

    // Initially choose random bg on server
    if (typeof document === 'undefined') {
      this.state = { background: this.changeBackground() };

    // On client, don't override SSR-provided background
    } else {
      const ssrBackground = document.querySelector(`.${s.bgImage}`).src;
      this.state = { background: ssrBackground };
    }
  }

  getChildContext() {
    const context = this.props.context;
    return {
      insertCss: context.insertCss || emptyFunction,
      onSetTitle: context.onSetTitle || emptyFunction,
      onSetMeta: context.onSetMeta || emptyFunction,
      onPageNotFound: context.onPageNotFound || emptyFunction,
    };
  }

  componentWillMount() {
    const { insertCss } = this.props.context;
    this.removeCss = insertCss(s);
  }

  componentWillUpdate(newProps) {
    // Change background on each page change
    if (this.props.route !== newProps.route) {
      this.setState({ background: this.changeBackground() });
    }
  }

  componentWillUnmount() {
    this.removeCss();
  }

  responsiveBG() {
    const urlSegments = this.state.background.split('upload/');
    let sizeArgs;
    if (typeof window === 'undefined') {
      sizeArgs = '';
    } else if (window.innerWidth > window.innerHeight) {
      sizeArgs = `w_${roundToHundred(window.innerWidth)}/`;
    } else {
      sizeArgs = `h_${roundToHundred(window.innerHeight)}/`;
    }

    return `${urlSegments[0]}upload/${sizeArgs}${urlSegments[1]}`;
  }

  changeBackground() {
    let newBackground;
    do {
      const bgIndex = randInt(backgrounds.length);
      newBackground = backgrounds[bgIndex];
    } while (!!this.state && !!this.state.background &&
             newBackground === this.state.background);
    return newBackground;
  }

  render() {
    return !this.props.error ? (
      <div id={'app-root'} className={s.app}>
        <img alt="background art" className={s.bgImage} src={this.responsiveBG()} />
        {this.props.children}
      </div>
    ) : this.props.children;
  }

}

export default App;
