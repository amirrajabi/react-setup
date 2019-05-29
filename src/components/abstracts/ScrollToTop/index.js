import React from 'react';

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    const {
      location: { pathname, hash }
    } = this.props;
    if (
      pathname !== prevProps.location.pathname ||
      hash !== prevProps.location.hash
    ) {
      if (!hash) {
        window.scrollTo(0, 0);
      } else {
        const elem = document.querySelector(hash);
        if (elem) window.scrollTo(0, elem.offsetTop - 140);
      }
    }
  }

  render() {
    return this.props.children;
  }
}

export default ScrollToTop;
