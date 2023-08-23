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
				  
				  let the_table_storage = [];
				  
				  //Make sure table element exists
				  
				  if(the_table != null) {
					  if(the_table.length == 1) {
						  the_table_obj = the_table[0];
						  
						  let table_positionInfo = the_table_obj.getBoundingClientRect();
						  let the_table_contents = the_table_obj.getElementsByTagName("tbody");
						  let the_table_filter_controls = the_table_obj.getElementsByTagName("select");
						  the_table_width = table_positionInfo.width;
						  
						  //Read table and store values for search and reset
						  if(the_table_contents != null) {
							  if(the_table_contents.length == 1) {
								  let the_table_contents_rows = the_table_contents[0].getElementsByTagName("tr");
								  
								  if(the_table_contents_rows != null) {
									  if(the_table_contents_rows.length > 0) {
										  for(x = 0; x < the_table_contents_rows.length; x++) {
											  let current_table_row = the_table_contents_rows[x];
											  let current_table_row_columns = current_table_row.getElementsByTagName("td");
											  let rowarr = [];
											  
											  if(current_table_row_columns != null) {
												  if(current_table_row_columns.length > 0) {
													  for(y = 0; y < current_table_row_columns.length; y++) {
														  let the_current_column = current_table_row_columns[y];
														  rowarr.push(the_current_column.innerHTML);
													  }
													  
													  the_table_storage.push(rowarr);
												  }
											  }
										  }
										  
										   
									  }
								  }
								  
								  console.log(the_table_storage);
								  
								  if(the_table_filter_controls != null) {
									  if(the_table_filter_controls.length > 0) {
										  console.log(the_table_filter_controls);
										  
										  for(z = 0; z < the_table_filter_controls.length; z++) {
											  let current_filter_control = the_table_filter_controls[z];
											  current_filter_control.addEventListener("change", function(){
												  console.log("Selected Filter: " + this.value);
												  console.log(the_table_filter_controls);
												  console.log(the_table_storage);
											  });

										  }
									  }
								  }
								  
								  
							  }
						  }
						  
						  
					  }
				  }
				  
				  //Arrow configuration button control
				  
				  if(the_table_opt != null && the_table_arrow != null) {
					  if(the_table_opt.length == 1 && the_table_arrow.length == 1) {
						  the_table_opt_obj = the_table_opt[0];
						  the_table_opt_obj.style = "width: " + the_table_width + "px;";
						  the_table_arrow_obj = the_table_arrow[0];
						  
						  the_table_opt_obj.addEventListener("click", function(){
							  let the_table_arrow_src = the_table_arrow_obj.src;
							  current_ex_table.classList.toggle("show");
							  console.log('TOPS: Changing arrow image - ' + the_table_arrow_src);
							  
							  if(the_table_arrow_src.includes('expand_down.png')) {
								  the_table_arrow_obj.src = '../assets/images/expand_up.png';
							  } else if(the_table_arrow_src.includes('expand_up.png')) {
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