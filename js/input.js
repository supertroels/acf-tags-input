(function($){
	
	
	function initialize_field( $el ) {

		var $input 		= $el.find('.tags_input');
		var placeholder = $input.attr('placeholder');

		$input.tagsInput({
			defaultText: placeholder
		});
	}
	
	
	/*
	*  ready append (ACF5)
	*
	*  These are 2 events which are fired during the page load
	*  ready = on page load similar to $(document).ready()
	*  append = on new DOM elements appended via repeater field
	*
	*  @type	event
	*  @date	20/07/13
	*
	*  @param	$el (jQuery selection) the jQuery element which contains the ACF fields
	*  @return	n/a
	*/

	if(typeof acf.add_action == 'function'){	
		acf.add_action('ready append', function( $el ){
			
			// search $el for fields of type 'tags_input'
			acf.get_fields({ type : 'tags_input'}, $el).each(function(){
				
				initialize_field( $(this) );
				
			});
			
		});
	}
	
	
	/*
	*  acf/setup_fields (ACF4)
	*
	*  This event is triggered when ACF adds any new elements to the DOM. 
	*
	*  @type	function
	*  @since	1.0.0
	*  @date	01/01/12
	*
	*  @param	event		e: an event object. This can be ignored
	*  @param	Element		postbox: An element which contains the new HTML
	*
	*  @return	n/a
	*/
	
	$(document).live('acf/setup_fields', function(e, postbox){
		
		$(postbox).find('.field[data-field_type="tags_input"]').each(function(){
			
			initialize_field( $(this) );
			
		});
	
	});


})(jQuery);
