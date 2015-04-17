import React from 'react';
import LinkClass from './link-item';

let D = React.DOM;
let Type = React.PropTypes;
let Link = React.createFactory(LinkClass);

export default React.createClass({
  displayName: "Result",

  propTypes: {
    result: Type.shape({
      name: Type.string.isRequired,
      author: Type.string.isRequired,
      url: Type.string.isRequired,
      links: Type.array.isRequired,
      version: Type.string.isRequired
    }).isRequired
  },

  createLink(link) {
    let self = this;
    let linkSplit = link.split('/');
    let fileName = linkSplit[linkSplit.length - 1];

    return Link({
      fileName: fileName,
      link: link
    });
  },

  render() {
    let self = this;
    let data = self.props.result;

    return D.li({
      className: "result"
    }, [
      D.h3({
        className: "result-name"
      }, data.name ),
      D.p({
        className: "result-info"
      }, `Author: ${data.author} | Version: ${data.version}`),
      D.ul({
        className: "result-links"
      }, data.links.map(self.createLink))
    ]);
  }
});
