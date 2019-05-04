const scrollToElement = require('scroll-to-element')

exports.onRouteUpdate = ({ location }) => {
  checkHash(location)
}

const checkHash = location => {
  let hash = location.hash
    if (hash) {
        setTimeout(() => {
            scrollToElement(`[name=${hash.slice(1)}]`, { offset: -35 });
        }, 1500);
  }
}
