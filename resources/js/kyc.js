"use strict";
(function (a) {
    var c = a(".document-type");
    0 < c.length &&
        c.on("click", function () {
            var d = a(this).data("title"),
                b = a(".doc-upload-d2"),
                e = "undefined" != typeof a(this).data("change"),
                f = a(this).data("img");
            a(".doc-type-name").text(d);
            a("._image").attr("src", f);
            0 < b.length && e ? b.removeClass("hidden") : b.addClass("hidden");
        });
})(jQuery);
