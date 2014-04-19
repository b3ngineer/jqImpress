var jqImpress = function(jqi, $, undefined) {
  $.fn.jqImpress = function(options) {
    var settings = $.extend({height:768, width:1024}, options);
    return this.each(function() {
      var $this = $(this);
      $this.children().each(function(index, item) {
        var classes = $this.attr("class");
        console.log(classes);
        if(!classes) {
          return
        }
        var classList = classes.split(/\s+/);
        for(var i = 0, length = classList.length;i < length;i++) {
          var currentclass = classList[i];
          console.log(currentClass)
        }
      })
    })
  };
  return jqImpress
}(jqImpress, jQuery);
(function(jqi, $, undefined) {
})(jqImpress, jQuery);

