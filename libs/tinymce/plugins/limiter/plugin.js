(function () {
  'use strict';

  var global$2 = tinymce.util.Tools.resolve('tinymce.PluginManager');
  var __assign = function () {
    __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
    };
    return __assign.apply(this, arguments);
  };
  var removeZwsp$1 = function (s) {
    return s.replace(/\uFEFF/g, '');
  };
  var global$1 = tinymce.util.Tools.resolve('tinymce.dom.TreeWalker');
  var getText = function (node, schema) {
    var blockElements = schema.getBlockElements();
    var shortEndedElements = schema.getShortEndedElements();
    var isNewline = function (node) {
      return blockElements[node.nodeName] || shortEndedElements[node.nodeName];
    };
    var textBlocks = [];
    var txt = '';
    var treeWalker = new global$1(node, node);
    while (node = treeWalker.next()) {
      if (node.nodeType === 3) {
        txt += removeZwsp$1(node.data);
      } else if (isNewline(node) && txt.length) {
        textBlocks.push(txt);
        txt = '';
      }
    }
    if (txt.length) {
      textBlocks.push(txt);
    }
    return textBlocks;
  };
  var strLen = function (str) {
    return str.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, '_').length;
  };
  var countCharacters = function (node, schema) {
    var text = getText(node, schema).join('');
    return strLen(text);
  };
  var createBodyCounter = function (editor, count) {
    return function () {
      return count(editor.getBody(), editor.schema);
    };
  };
  var createSelectionCounter = function (editor, count) {
    return function () {
      return count(editor.selection.getRng().cloneContents(), editor.schema);
    };
  };
  var get = function (editor) {
    return {
      body: {
        getCharacterCount: createBodyCounter(editor, countCharacters)
      },
      selection: {
        getCharacterCount: createSelectionCounter(editor, countCharacters)
      }
    };
  };
  var global = tinymce.util.Tools.resolve('tinymce.util.Delay');
  var updateCount = function (editor, api) {
    $(editor.getContainer()).find('.tox-statusbar__limiter-count').text(api.body.getCharacterCount());
  };
  var setup = function (editor, api, delay) {
    var debouncedUpdate = global.debounce(function () {
      return updateCount(editor, api);
    }, delay);
    editor.on('init', function () {
      global.setEditorTimeout(editor, function () {
        editor.on('SetContent BeforeAddUndo Undo Redo ViewUpdate keyup', debouncedUpdate);
      }, 0);
      $(editor.getContainer()).find('.tox-statusbar__branding').before('<span class="tox-statusbar__limiter">' + '<span class="tox-statusbar__limiter-count">0</span> / ' + (editor.settings.character_limit || '∞') + ' characters' + '</span>');
      updateCount(editor, api);
    });
  };
  function Plugin(delay) {
    if (delay === void 0) {
      delay = 300;
    }
    global$2.add('limiter', function (editor) {
      var api = get(editor);
      setup(editor, api, delay);
      return api;
    });
  }
  Plugin();
})();