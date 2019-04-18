
 
	$(document).ready(function() {
		  
		  $(".toggle").click(function(){
			  $(this).next().toggle( '200' );
		  });
		  
		 $(".jasondata").each(function( index ) {
		  
		  try {
			var obj = $.parseJSON(  $( this ).text() );
		  
			
			var defs = "";
			$.each(obj , function(index, item){
				
				$.each(item, function(i, j){
					
					 
					  $.each(j.def , function(m, n){
						   
                          //console.log(n.sseq[0][0][1].dt);
                          //console.log(n );
                          
                          defs = defs.concat(JSON.stringify(n ));
						  
						  //defs = defs.concat(JSON.stringify(n.sseq[0][0][1].dt  ));
					  });
					 
				})
					
			 });
				  
			$(this).parent().append(
                defs
                    .replace(/"/g, '')
                    .replace(/{t:/g, '<br> &nbsp; &nbsp;&nbsp;  &#x00009;&diams;&nbsp; &nbsp;&nbsp;')
                    .replace(/{bc}/g, '<br>&#x02720;&nbsp; &nbsp;&nbsp;')
                    .replace(/\[\[text,/g, '')
                    .replace(/{it}/g, '')
                    .replace(/{\/it}/g, '')
                    .replace(/}\]\]\]/g, '')
                    .replace(/\],\[vis,\[/g, '')
                    .replace(/\],\[wsgram,\+ obj/g, '')
                    .replace(/},/g, '')
                    .replace(/{sseq:\[\[\[sense,{dt:/g, '')
                    .replace(/{sseq:\[\[\[sense,{sn:\d,dt:/g, '')
                    .replace(/}\]\],\[wsgram,no obj/g, '')
                    .replace(/\]\]\]}/g, '')
                 
				);
			
		  	   
					
					}catch(err){}
		});
	});
 