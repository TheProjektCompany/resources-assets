(function () {
  'use strict';

  const global = tinymce.util.Tools.resolve('tinymce.PluginManager');
  const setCursorLocationToMarker = function (e) {
    const editor = e.target;
    const cursorMarker = editor.dom.select('#cursorMarker');
    if (cursorMarker.length) {
      editor.selection.select(cursorMarker[0]);
      editor.selection.collapse(0);
      editor.focus();
      editor.dom.replace(editor.dom.create('br', {
        'data-mce-bogus': '1'
      }), cursorMarker);
    }
  };
  const addCursorMarkerAtCurrentPos = function (e) {
    const editor = e.target;

    // unwrap the bookmark - https://plainjs.com/javascript/manipulation/unwrap-a-dom-element-35/
    let el, parent;
    const elms = editor.dom.select('span[data-mce-type=bookmark]'),
      elmsLength = elms.length;
    for (var i = 0; i < elmsLength; i++) {
      el = elms[i];
      parent = el.parentNode;
      while (el.firstChild) parent.insertBefore(el.firstChild, el);
      parent.removeChild(el);
    }
    editor.selection.getBookmark();
  };
  function init(editor) {
    editor.on('init', function () {
      editor.serializer.addNodeFilter('span', function (nodes, name, args) {
        if (args.withoutCursorMarker) {
          return;
        }
        let i = nodes.length,
          cursorMarker = new tinymce.html.Node('span', 1),
          cursorMarkerTextElm = tinymce.html.Node.create('#text');
        cursorMarkerTextElm.value = "\ufeff";
        cursorMarker.attr('id', 'cursorMarker');
        cursorMarker.append(cursorMarkerTextElm);
        while (i--) {
          const node = nodes[i];
          if (node.attr('data-mce-type') === 'bookmark') {
            node.parent.insert(cursorMarker, node);
            break;
          }
        }
      });
    });
    editor.on('SetContent', setCursorLocationToMarker);
    editor.on('blur', addCursorMarkerAtCurrentPos);
  }
  function Plugin() {
    global.add('autosavecursor', function (editor) {
      init(editor);
      return {};
    });
  }
  Plugin();
})();