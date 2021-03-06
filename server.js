'use strict';

var Promise = require('bluebird');
var mt = require('microtools');

var brackets = {
  name: process.env.BRACKETS_NAME || 'brackets',
  categories: [mt.TOOLS_CAT_VALIDATORS],
  topics: [mt.NIKKA_CAT_FS],
  rootDir: __dirname,

  notify: function(note) {
    if (note.topics.indexOf(mt.NIKKA_CAT_FS) >= 0) {
      mt.log.info({topics: note.topics}, 'Notified for changes. Running again.');
      mt.run()
    }
  },

  run: function() {
    return new Promise(function(resolve, reject) {
      resolve({
        statusCode: mt.SC_FINISHED_SUCCESSFULLY,
        results: {
          message: 'Brackets has been started'
        },
        raw: 'Brackets has been started.'
      });
    });
  },

  humanReadableResults: function(output) {
    return {
      message: output.results.message,
      format: 'text'
    }
  }
};

mt.start(brackets);
