// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

var Application = {
  editFinish: function(){
    if (event.which == 13) {
      this.doneAllEditing();
    }
  },

  editElement: function(element){
    this.doneAllEditing();
    var content = $(element).html();
    $(element).html('<input type="text" value="'+content+'" onkeydown="Application.editFinish();" onblur="Application.doneAllEditing();">');
    $(element).find("input[type='text']").focus();
  },

  doneAllEditing: function(){
    $( "#container .editable input[type='text']" ).each(function(i, item){
      $(item).parent().html($(item).val());
    });
  }
}

$(function() {
  $( "#container .draggable" ).draggable();
  $( "#container .editable" ).dblclick(function(){
    Application.editElement(this);
  })
});
