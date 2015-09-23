    // Some general UI pack related JS
    // Extend JS String with repeat method
    String.prototype.repeat = function(num) {
        return new Array(Math.round(num) + 1).join(this);
    };

    (function($) {
        $('.input-group').on('focus', '.form-control', function() {
            $(this).closest('.input-group, .form-group').addClass('focus');
        }).on('blur', '.form-control', function() {
            $(this).closest('.input-group, .form-group').removeClass('focus');
        });
        $('[data-toggle=tooltip]').tooltip();
    })(jQuery);
