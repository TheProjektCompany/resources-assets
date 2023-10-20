(function () {
  'use strict';

  var ch = '@';
  var selector = 'sp-mention';
  var global = tinymce.util.Tools.resolve('tinymce.PluginManager');
  var setup = function (editor) {
    editor.on('ResolveName', function (e) {
      if (editor.dom.is(e.target, "." + selector)) {
        e.name = 'mention';
      }
    });
    editor.ui.registry.addAutocompleter('mentions', {
      ch: ch,
      minChars: 1,
      columns: 1,
      highlightOn: ['formatted_name', 'email'],
      onAction: function (autocompleteApi, rng, value) {
        let mention = $('<div>').append($('<data>', {
          class: selector,
          contenteditable: false,
          value: value.id
        }).text(ch + value.formatted_name)).html();

        // insert in to the editor
        editor.selection.setRng(rng);
        editor.insertContent(mention);

        // hide the autocompleter
        autocompleteApi.hide();
      },
      fetch: function (pattern) {
        return new tinymce.util.Promise(function (resolve) {
          $.get(laroute.route('ticket.operator.department.search', {
            id: editor.settings.departmentId
          }), {
            brand_id: editor.settings.brandId,
            group_ids: editor.settings.groupIds,
            s: pattern
          }).done(function (res) {
            var results = res.data.map(function (value) {
              return {
                type: 'cardmenuitem',
                value: value,
                // passed to onAction callback
                label: value.formatted_name + ' <' + value.email + '>',
                items: [{
                  type: 'cardcontainer',
                  direction: 'horizontal',
                  items: [{
                    type: 'cardimage',
                    classes: ['tox-sp-avatar'],
                    src: value.avatar_url,
                    alt: value.formatted_name
                  }, {
                    type: 'cardcontainer',
                    direction: 'horizontal',
                    items: [{
                      type: 'cardtext',
                      classes: ['sp-flex-initial', 'tox-sp-mr-1'],
                      text: value.formatted_name,
                      name: 'formatted_name'
                    }, {
                      type: 'cardtext',
                      classes: ['tox-sp-description'],
                      text: '<' + value.email + '>',
                      name: 'email'
                    }]
                  }]
                }]
              };
            });
            resolve(results);
          });
        });
      }
    });
  };
  function Plugin() {
    global.add('mentions', function (editor) {
      setup(editor);
      return {};
    });
  }
  Plugin();
})();