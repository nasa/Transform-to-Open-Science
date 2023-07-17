$(document).ready(function(){
  console.log("TOPS: Injecting post specific UI...");
  
  function inject_expandable_tables() {
	  let ex_tables = document.getElementsByClassName("tops_expandable_table");
	  
	  if(ex_tables != null) {
		  if(ex_tables.length > 0) {
			  console.log("TOPS: Found " + ex_tables.length + " tables");
			  
			  for(i = 0; i < ex_tables.length; i++) {
				  let current_ex_table = ex_tables[i];
				  let the_table = current_ex_table.getElementsByTagName("table");
				  let the_table_obj;
				  let the_table_width = 0;
				  
				  let the_table_opt = current_ex_table.getElementsByClassName("tops_expandable_opt");
				  let the_table_opt_obj;
				  
				  let the_table_arrow = current_ex_table.getElementsByClassName("tops_expandable_arrow");
				  let the_table_arrow_obj;
				  
				  
				  if(the_table != null) {
					  if(the_table.length == 1) {
						  the_table_obj = the_table[0];
						  let table_positionInfo = the_table_obj.getBoundingClientRect();
						  the_table_width = table_positionInfo.width;
					  }
				  }
				  
				  if(the_table_opt != null && the_table_arrow != null) {
					  if(the_table_opt.length == 1 && the_table_arrow.length == 1) {
						  the_table_opt_obj = the_table_opt[0];
						  the_table_arrow_obj = the_table_arrow[0];
						  the_table_opt_obj.style = "width: " + the_table_width + "px;";
						  
						  the_table_opt_obj.addEventListener("click", function(){
							  current_ex_table.classList.toggle("show");
							  
							  if(the_table_arrow_obj.src == '../assets/images/expand_down.png') {
								  the_table_arrow_obj.src = '../assets/images/expand_up.png';
							  } else if(the_table_arrow_obj.src == '../assets/images/expand_up.png') {
								  the_table_arrow_obj.src = '../assets/images/expand_down.png';
							  }
						  });
						  
					  }
				  }
				  
				  
			  }
			  
		  }
	  }
	  
	  setTimeout(function(){
		  console.log("TOPS: Readjusting tables after load...");
		  resize_expandable_tables();
	  }, 3000);
	  
  }
  
  inject_expandable_tables();
  
  function resize_expandable_tables() {
	  let ex_tables = document.getElementsByClassName("tops_expandable_table");
	  
	  if(ex_tables != null) {
		  if(ex_tables.length > 0) {
			  console.log("TOPS: Found " + ex_tables.length + " tables");
			  
			  for(i = 0; i < ex_tables.length; i++) {
				  let current_ex_table = ex_tables[i];
				  let the_table = current_ex_table.getElementsByTagName("table");
				  let the_table_obj;
				  let the_table_width = 0;
				  
				  let the_table_opt = current_ex_table.getElementsByClassName("tops_expandable_opt");
				  let the_table_opt_obj;
				  
				  
				  if(the_table != null) {
					  if(the_table.length == 1) {
						  the_table_obj = the_table[0];
						  let table_positionInfo = the_table_obj.getBoundingClientRect();
						  the_table_width = table_positionInfo.width;
					  }
				  }
				  
				  if(the_table_opt != null) {
					  if(the_table_opt.length == 1) {
						  the_table_opt_obj = the_table_opt[0];
						  the_table_opt_obj.style = "width: " + the_table_width + "px;";
					  }
				  }
				  
			  }
			  
		  }
	  }
	  
  }
  
  window.addEventListener('resize', function(event) {
    resize_expandable_tables();
  }, true);
  
  
});