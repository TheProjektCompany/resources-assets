(function () {
  'use strict';

  var global = tinymce.util.Tools.resolve('tinymce.PluginManager');
  function Plugin() {
    global.add('disable_shortcuts', function (editor) {
      editor.on('init', function () {
        editor.shortcuts.shortcuts = {};
      });
      return {};
    });
  }
  Plugin();
})();