(function($) { 

	var defaults = { 
		position: '50px', 
		bold: '1px',
		style: 'solid',
		color: 'red',
	};

	var options;

	var methods = {	
		init:function(params) {	
			var options = $.extend({}, defaults, params);
			$.each($(this),function(){
				$this = $(this);		        
				$this.find('img').first().wrap('<div class="old" style="position: absolute; float: left;">');
				$this.find('img').last().wrap('<div class="new" style="position: absolute; float: left; overflow: hidden; border-right: ' + options.bold + ' '+ options.style +' ' + options.color + '; ">');	
				$this.find('img').last().parent().css('width', options.position);
			})
			return this.mousemove(function(e){
				if (e.offsetX <= $this.width()) {
					$(this).find('img').last().parent().css('width', e.offsetX);
				}
			});
		}
	};

	$.fn.befter = function(method){
		if ( methods[method] ) {
			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Метод "' +  method + '" не найден в плагине jQuery.befter' );
		}

	};
})(jQuery);