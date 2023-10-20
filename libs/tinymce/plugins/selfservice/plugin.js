(function () {
  'use strict';

  var modal,
    global = tinymce.util.Tools.resolve('tinymce.PluginManager');
  function insertArticle(editor, dialogApi, text) {
    editor.insertContent(text);
    dialogApi.close();
  }
  function openModal(editor) {
    modal = editor.windowManager.openUrl({
      title: Lang.get('ticket.add_selfservice_link'),
      url: laroute.route('core.tinymce.selfservice.modal', {
        l: Lang.locale(),
        m: $('html').hasClass('sp-theme-dark') ? 1 : 0
      }),
      buttons: [{
        type: 'cancel',
        text: Lang.get('general.cancel'),
        name: 'selfserviceCancel'
      }],
      onMessage: function (dialogApi, message) {
        switch (message.mceAction) {
          case 'mceInsertArticle':
            insertArticle(editor, dialogApi, message.data.value);
            break;
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
    editor.ui.registry.addButton('selfservice', {
      icon: 'new-tab',
      title: Lang.get('ticket.add_selfservice_link'),
      tooltip: Lang.get('ticket.add_selfservice_link'),
      onAction: function () {
        openModal(editor);
      }
    });
  }
  function registerCommand(editor) {
    editor.addCommand('mceSelfService', function () {
      return openModal(editor);
    });
  }
  function Plugin() {
    global.add('selfservice', function (editor) {
      addToToolbar(editor);
      registerCommand(editor);
      return {};
    });
  }
  Plugin();
})();