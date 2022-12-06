console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('public/main.js', 'utf8');

describe('', function () {
  it('', function() {
    let structureOne = function() {
      const getSuggestions = () => {
        _.then(_).then(jsonResponse => {
          renderRawResponse(jsonResponse)
        })
      }
    };

    let structureTwo = function(){
      const getSuggestions = () => {
        _.then(_).then(jsonResponse => {
          renderResponse(jsonResponse)
        })
      }
    }

    let isMatchOne = Structured.match(code, structureOne);
    let isMatchTwo = Structured.match(code, structureTwo);
    assert.isNotOk(isMatchOne , 'Did you delete `renderRawResponse(jsonResponse)`?');
    assert.isOk(isMatchTwo, 'Did you call `renderResponse(jsonResponse)` in the callback?')
  });
});
