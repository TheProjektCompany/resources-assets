(function (tinymce, App) {
  'use strict';

  var modal,
    mergeFields,
    global = tinymce.util.Tools.resolve('tinymce.PluginManager');
  function insertArticle(editor, dialogApi, text) {
    editor.insertContent(text);
    dialogApi.close();
  }
  function openModal(editor) {
    modal = editor.windowManager.openUrl({
      title: App.mergefields.translations.merge_fields,
      url: laroute.route('core.tinymce.mergefields.modal', {
        l: Lang.locale(),
        m: $('html').hasClass('sp-theme-dark') ? 1 : 0
      }),
      buttons: [{
        type: 'cancel',
        text: Lang.get('general.cancel'),
        name: 'mergefieldsCancel'
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
    editor.ui.registry.addButton('mergefields', {
      icon: 'brackets-curly',
      title: App.mergefields.translations.merge_fields,
      tooltip: App.mergefields.translations.merge_fields,
      onAction: function () {
        openModal(editor);
      }
    });
  }
  function initMergeFields(editor) {
    editor.on('init', function (e) {
      mergeFields = new App.mergefields({
        valFn: function () {
          return editor.getContent();
        },
        syncFn: function () {},
        syntaxEmailTemplate: editor.settings.syntaxEmailTemplate || null
      });
      mergeFields.init($(editor.getContainer()));
    });
  }
  function Plugin() {
    global.add('mergefields', function (editor) {
      addToToolbar(editor);
      initMergeFields(editor);
      return {};
    });
  }
  Plugin();
})(tinymce, App);