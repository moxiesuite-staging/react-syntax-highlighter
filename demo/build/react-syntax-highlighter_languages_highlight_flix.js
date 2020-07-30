(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_flix"],{

/***/ "./node_modules/highlight.js/lib/languages/flix.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/flix.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 Language: Flix
 Category: functional
 Author: Magnus Madsen <mmadsen@uwaterloo.ca>
 Website: https://flix.dev/
 */

function flix (hljs) {

    var CHAR = {
        className: 'string',
        begin: /'(.|\\[xXuU][a-zA-Z0-9]+)'/
    };

    var STRING = {
        className: 'string',
        variants: [
            {
                begin: '"', end: '"'
            }
        ]
    };

    var NAME = {
        className: 'title',
        begin: /[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/
    };

    var METHOD = {
        className: 'function',
        beginKeywords: 'def',
        end: /[:={\[(\n;]/,
        excludeEnd: true,
        contains: [NAME]
    };

    return {
        name: 'Flix',
        keywords: {
            literal: 'true false',
            keyword: 'case class def else enum if impl import in lat rel index let match namespace switch type yield with'
        },
        contains: [
            hljs.C_LINE_COMMENT_MODE,
            hljs.C_BLOCK_COMMENT_MODE,
            CHAR,
            STRING,
            METHOD,
            hljs.C_NUMBER_MODE
        ]
    };
}

module.exports = flix;


/***/ })

}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_flix.js.map