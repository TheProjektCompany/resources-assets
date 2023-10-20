(function () {
  'use strict';

  var modal,
    global = tinymce.util.Tools.resolve('tinymce.PluginManager');
  function showSourceEditor(editor) {
    modal = editor.windowManager.openUrl({
      title: Lang.get('core.edit_html'),
      url: laroute.route('core.tinymce.codemirror.modal'),
      buttons: [{
        type: 'cancel',
        text: Lang.get('general.cancel'),
        name: 'codemirrorCancel'
      }, {
        type: 'custom',
        text: Lang.get('general.save'),
        name: 'codemirrorOk',
        primary: true
      }],
      onAction: function (dialogApi, actionData) {
        if (actionData.name === 'codemirrorOk') {
          var doc = document.querySelectorAll('.tox-dialog__body-iframe iframe')[0];
          doc.contentWindow.submit();
          editor.undoManager.add();
          modal.close();
        }
      }
    });
    var $dialog = $('iframe').parents('.tox-dialog__body-iframe');
    if ($dialog.length) {
      modal.block(Lang.get('general.loading'));
      $dialog.find('iframe').on('load', function () {
        modal.unblock();
      });
    }
  }
  function addToToolbar(editor) {
    editor.ui.registry.addButton('codemirror', {
      icon: 'sourcecode',
      title: Lang.get('core.edit_html'),
      tooltip: Lang.get('core.edit_html'),
      onAction: function () {
        showSourceEditor(editor);
      }
    });
  }
  function Plugin() {
    global.add('codemirror', function (editor) {
      addToToolbar(editor);
      return {};
    });
  }
  Plugin();
})();