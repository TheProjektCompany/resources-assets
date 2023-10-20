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
      title: Lang.choice('ticket.cannedresponse', 2),
      url: laroute.route('core.tinymce.cannedresponses.modal', {
        l: Lang.locale(),
        m: $('html').hasClass('sp-theme-dark') ? 1 : 0
      }),
      buttons: [{
        type: 'cancel',
        text: Lang.get('general.cancel'),
        name: 'cannedResponsesCancel'
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
    editor.ui.registry.addButton('cannedresponses', {
      icon: 'template',
      title: Lang.choice('ticket.cannedresponse', 2),
      tooltip: Lang.choice('ticket.cannedresponse', 2),
      onAction: function () {
        openModal(editor);
      }
    });
  }
  function registerCommand(editor) {
    editor.addCommand('mceCannedResponses', function () {
      return openModal(editor);
    });
  }
  function Plugin() {
    global.add('cannedresponses', function (editor) {
      addToToolbar(editor);
      registerCommand(editor);
      return {};
    });
  }
  Plugin();
})();