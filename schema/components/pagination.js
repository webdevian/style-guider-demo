'use strict'

/**
 * Component configuration
 * @type {Object}
 */

module.exports = {
  // Component name, must match schema, pug, scss and js filename
  name: 'pagination',

  // Component title - for docs/style guide
  title: 'Pagination',

  // Paragraphs for docs
  docs: [
    'When there is too much content for one page, we should make it easy for users to browse, skim or skip between pages. On small screens only the next and previous buttons are shown.'
  ],

  // Does this component break out of the content wrapper
  breakout: false,

  // Can the component be demo'd inline
  inline: false,

  // Default blocks content (false for no block)
  block: false,

  // Can attributes be passed to the mixin?
  attributes: true,

  // Demo output (Mixin can be called, if left empty default parameters and block will be used)
  demo:
  `+pagination([{"page":1,"link":"#"},{"page":2,"link":"#10"},{"page":3,"link":"#20"},{"page":4,"link":"#30"},{"page":5,"link":"#40"},{"page":6,"link":"#50"},{"page":7,"link":"#60"},{"page":8,"link":"#70"},{"page":9,"link":"#80"},{"page":10,"link":"#90"},{"page":11,"link":"#100"},{"page":12,"link":"#110"},{"page":13,"link":"#120"},{"page":14,"link":"#130"}],3,1,2)`,

  // Path to mixin (if not pug/components/<component_name>.pug)
  mixinPath: null,

  // Path to scss (if not scss/components/<component_name>.scss)
  scssPath: null,

  // Path to js (if not js/components/<component_name>.js)
  jsPath: null,

  // Mixin params (false for no mixin)
  'params': {
    'pages': {
      'type': 'array',
      'default': [
        {'page': 1, 'link': '#'},
        {'page': 2, 'link': '#10'},
        {'page': 3, 'link': '#20'},
        {'page': 4, 'link': '#30'},
        {'page': 5, 'link': '#40'},
        {'page': 6, 'link': '#50'},
        {'page': 7, 'link': '#60'},
        {'page': 8, 'link': '#70'},
        {'page': 9, 'link': '#80'},
        {'page': 10, 'link': '#90'},
        {'page': 11, 'link': '#100'},
        {'page': 12, 'link': '#110'},
        {'page': 13, 'link': '#120'},
        {'page': 14, 'link': '#130'}
      ],
      'description': "Array of objects with page number and link. This should include ALL pages, the mixin will remove ones that aren't needed"
    },
    'current': {
      'type': 'number',
      'default': '6',
      'description': 'The current page'
    },
    'relativeNumber': {
      'type': 'number',
      'default': '1',
      'description': 'Number of pages to show each side of current page'
    },
    'absoluteNumber': {
      'type': 'number',
      'default': '2',
      'description': 'Number of pages to show at start and end'
    }
  }
}
