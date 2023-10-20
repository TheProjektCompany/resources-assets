// Based on https://raw.githubusercontent.com/acanimal/jQuery-Plugin-Boilerplate/master/jquery-plugin.js
;
(function ($, window, document, undefined) {
  var pluginName = 'phoneinput';

  /**
   * @param {HTMLElement} element The DOM element where plugin is applied
   * @param {Object} options Options passed to the constructor
   */
  function Plugin(element, options) {
    this.el = element;
    this.$el = $(element);
    this.options = $.extend({}, $.fn[pluginName].defaults, options);
    this.init();

    // Update hidden input on changing number or country code.
    this.$el.on('change countrychange', function () {
      $(this).phoneinput('sync');
    });
  }

  /**
   * Usage: $('#element').phoneinput('method');
   */
  Plugin.prototype = {
    init: function () {
      this.instance = window.intlTelInput(this.el, this.options);

      // Add hidden input after which contains the full number with country code.
      $('<input>').attr('type', 'hidden').attr('name', this.$el.attr('name').replace('[number]', '[full_number]')).insertAfter(this.$el);

      // Set value in hidden input.
      this.sync();
    },
    destroy: function () {
      this.$el.removeData();
    },
    sync: function () {
      var countryData = this.instance.getSelectedCountryData();
      this.$el.next('input[type="hidden"]').val('+' + countryData.dialCode + this.$el.val());
    }
  };
  $.fn[pluginName] = function (options) {
    var args = arguments;
    if (options === undefined || typeof options === 'object') {
      // Creates a new plugin instance, for each selected element, and
      // stores a reference within the element's data
      return this.each(function () {
        if (!$.data(this, 'plugin_' + pluginName)) {
          $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
        }
      });
    } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
      // Call a public plugin method (not starting with an underscore) for each
      // selected element.
      if (Array.prototype.slice.call(args, 1).length === 0 && $.inArray(options, $.fn[pluginName].getters) !== -1) {
        // If the user does not pass any arguments and the method allows to
        // work as a getter then break the chain so we can return a value
        // instead the element reference.
        var instance = $.data(this[0], 'plugin_' + pluginName);
        return instance[options].apply(instance, Array.prototype.slice.call(args, 1));
      } else {
        // Invoke the specified method on each selected element
        return this.each(function () {
          var instance = $.data(this, 'plugin_' + pluginName);
          if (instance instanceof Plugin && typeof instance[options] === 'function') {
            instance[options].apply(instance, Array.prototype.slice.call(args, 1));
          }
        });
      }
    }
  };
  $.fn[pluginName].getters = [];
  $.fn[pluginName].defaults = {
    autoPlaceholder: 'off',
    formatOnDisplay: false,
    initialCountry: $('meta[name=default_country]').prop('content'),
    preferredCountries: [$('meta[name=default_country]').prop('content')],
    separateDialCode: true
  };
})(jQuery, window, document);