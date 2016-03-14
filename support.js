(function(){
  return (function() {
    var style = document.createElement('div').style;
    var flag = 'flexWrap' in style || 'webkitFlexWrap' in style || 'mozFlexWrap' in style;
    if(!flag) {
      console.error('your browser does not support flex attributes');
    }
  })();
}).call(this);