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
import { randInt } from "../../core/math";
import backgrounds from './backgrounds';
import Header from '../Header';
import Feedback from '../Feedback';
import Footer from '../Footer';

class App extends Component {

  static propTypes = {
    context: PropTypes.shape({
      insertCss: PropTypes.func,
      onSetTitle: PropTypes.func,
      onSetMeta: PropTypes.func,
      onPageNotFound: PropTypes.func,
    }),
    children: PropTypes.element.isRequired,
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

    // Initially choose random bg on serer
    if (typeof document === 'undefined') {
      this.state = { background: this.changeBackground() };

    // On client, don't override SSR-provided background
    } else {
      const ssrBackground = document.getElementById('app-root').style.backgroundImage;
      this.state = { background: ssrBackground.split('"')[1] };
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

  componentWillUpdate() {
    // Change background on each page change
    this.setState({ background: this.changeBackground() });
  }

  componentWillUnmount() {
    this.removeCss();
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
      <div id={'app-root'} style={{
        background: `fixed url('${this.state.background}') center/cover` }}
      >
        {/*<Header />*/}
        {this.props.children}
        {/*<Feedback />*/}
        {/*<Footer />*/}
      </div>
    ) : this.props.children;
  }

}

export default App;
