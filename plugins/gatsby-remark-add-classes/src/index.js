/**
 * Origin source in https://github.com/chrisg86/gatsby-remark-classes
 * gatsby-remark-classes cannot be loaded when it is installed via yarn;
 * therefore, I copied sources into custom plugin folder.
 */

const visit = require('unist-util-visit')

const addClassesToNode = (node, classes) => {
  node.data = node.data || {};
  node.data.hProperties = node.data.hProperties || {};
  node.data.hProperties.className = node.data.hProperties.className || [];

  node.data.hProperties.className.push(classes);
}

module.exports = ({ markdownAST }, options = {}) => {
  visit(markdownAST, `heading`, node => {
    const selector = `h${node.depth}`;

    if (selector in options) {
      addClassesToNode(node, options[selector]);
    }
  });

  visit(markdownAST, `table`, node => {
    const selector = `table`;

    if (selector in options) {
      addClassesToNode(node, options[selector]);
    }
  });

  visit(markdownAST, `paragraph`, node => {
    const selector = `paragraph`;

    if (selector in options) {
      addClassesToNode(node, options[selector]);
    }
  });
}