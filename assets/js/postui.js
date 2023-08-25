$(document).ready(function(){
  console.log("TOPS: Injecting post specific UI...");
  
  function inject_expandable_tables() {
	  let ex_tables = document.getElementsByClassName("tops_expandable_table");
	  
	  if(ex_tables != null) {
		  if(ex_tables.length > 0) {
			  console.log("TOPS: Found " + ex_tables.length + " expandable tables");
			  
			  for(i = 0; i < ex_tables.length; i++) {
				  let current_ex_table = ex_tables[i];
				  let the_table = current_ex_table.getElementsByTagName("table");
				  let the_table_obj;
				  let the_table_width = 0;
				  
				  let the_table_opt = current_ex_table.getElementsByClassName("tops_expandable_opt");
				  let the_table_opt_obj;
				  
				  let the_table_arrow = current_ex_table.getElementsByClassName("tops_expandable_arrow");
				  let the_table_arrow_obj;
				  
				  //Make sure table element exists
				  
				  if(the_table != null) {
					  if(the_table.length == 1) {
						  the_table_obj = the_table[0];
						  let table_positionInfo = the_table_obj.getBoundingClientRect();
						  the_table_width = table_positionInfo.width;
						  
					  }
				  }
				  
				  //Arrow configuration button control
				  
				  if(the_table_opt != null && the_table_arrow != null) {
					  if(the_table_opt.length == 1 && the_table_arrow.length == 1) {
						  the_table_opt_obj = the_table_opt[0];
						  //the_table_opt_obj.style = "width: " + the_table_width + "px;";
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
			  
			  console.log("");
			  
		  }
	  }
	  
	  setTimeout(function(){
		  console.log("TOPS: Readjusting tables after load...");
		  //resize_expandable_tables();
	  }, 3000);
	  
  }
  
  inject_expandable_tables();
  
  function resize_expandable_tables() {
	  let ex_tables = document.getElementsByClassName("tops_expandable_table");
	  
	  if(ex_tables != null) {
		  if(ex_tables.length > 0) {
			  console.log("TOPS: Resizing " + ex_tables.length + " expandable tables");
			  
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
    //resize_expandable_tables();
  }, true);
  
  
  function inject_tops_tables() {
	  let tops_tables = document.getElementsByClassName("tops_table");
	  
	  if(tops_tables != null) {
		  if(tops_tables.length > 0) {
			  console.log("TOPS: Found total of " + tops_tables.length + " tables");
			  
			  for(i = 0; i < tops_tables.length; i++) {
				  let current_table = tops_tables[i];
				  let the_table = current_table.getElementsByTagName("table");
				  let the_table_obj;
				  let the_table_storage = [];
				  
				  
				  if(the_table != null) {
					  if(the_table.length == 1) {
						  the_table_obj = the_table[0];
						  let the_table_contents = the_table_obj.getElementsByTagName("tbody");
						  let the_table_filter_controls = the_table_obj.getElementsByTagName("select");
						  
						  //Read table and store values for search and reset
						  if(the_table_contents != null) {
							  if(the_table_contents.length == 1) {
								  let the_table_contents_obj = the_table_contents[0];
								  let the_table_contents_reset = the_table_contents_obj.innerHTML;
								  let the_table_contents_rows = the_table_contents_obj.getElementsByTagName("tr");
								  
								  if(the_table_contents_rows != null) {
									  if(the_table_contents_rows.length > 0) {
										  for(t = 0; t < the_table_contents_rows.length; t++) {
											  let current_table_row = the_table_contents_rows[t];
											  let current_table_row_columns = current_table_row.getElementsByTagName("td");
											  let rowarr = [];
											  
											  if(current_table_row_columns != null) {
												  if(current_table_row_columns.length > 0) {
													  for(u = 0; u < current_table_row_columns.length; u++) {
														  let the_current_column = current_table_row_columns[u];
														  rowarr.push(the_current_column.innerHTML);
													  }
													  
													  the_table_storage.push(rowarr);
												  }
											  }
										  }
										  
										   
									  }
								  }
								  
								  console.log("TOPS: Reading data for table " + (i + 1));
								  console.log(the_table_storage);
								  
								  if(the_table_filter_controls != null) {
									  if(the_table_filter_controls.length > 0) {
										  //console.log(the_table_filter_controls);
										  console.log("Found " + the_table_filter_controls.length + " filter controls");
										  
										  for(v = 0; v < the_table_filter_controls.length; v++) {
											  let current_filter_control = the_table_filter_controls[v];
											  current_filter_control.addEventListener("change", function(){
												  let selectedfilters_count = 0;
												  let selected_filters = [];
												  //console.log("Selected Filter: " + this.value);
												  //console.log("Selected Index: " + this.selectedIndex);
												  //console.log(the_table_filter_controls);
												  //console.log(the_table_storage);
												  //console.log(the_table_contents_obj);
												  
												  for(w = 0; w < the_table_filter_controls.length; w++) {
													  
													  if(the_table_filter_controls[w].selectedIndex > 0) {
														  let filtertoadd = [];
														  let filtercolindex = the_table_filter_controls[w].dataset.colIndex;
														  let filtervalue = the_table_filter_controls[w].value;
														  filtertoadd.push(filtercolindex);
														  filtertoadd.push(filtervalue);
														  selected_filters.push(filtertoadd);
														  
														  selectedfilters_count++;
													  }
												  }
												  
												  console.log(selectedfilters_count + " filters selected");
												  console.log(selected_filters);
												  
												  if(selectedfilters_count == 0) {
													  the_table_contents_obj.innerHTML = the_table_contents_reset;
												  } else {
													  the_table_contents_obj.innerHTML = generate_filter_html(the_table_storage, selected_filters);
												  }
												  
												  console.log("");
												  
											  });

										  }
									  } else {
										  console.log("No filter controls found");
									  }
								  } else {
									  console.log("No filter controls found");
								  }
								  
								  console.log("");
								  
							  }
						  }
						  
						  
					  }
				  }
				  
				  
			  }
			  
			  
		  }
	  }
  }
  
  inject_tops_tables();
  
  function generate_filter_html(storageParam, selectedParam) {
	  let result = '';
	  
	  if(storageParam != null) {
		  if(storageParam.length > 0) {
			  for(q = 0; q < storageParam.length; q++) {
				  let current_storagerow = storageParam[q];
				  let current_rowhtml = '';
				  let current_matches = 0;
				  let length_to_match = -1;
				  
				  if(current_storagerow != null) {
					  if(current_storagerow.length > 0) {
						  for(r = 0; r < current_storagerow.length; r++) {
							  let current_storagecolumn = current_storagerow[r];
							  current_rowhtml = current_rowhtml + '<td>' + current_storagecolumn + '</td>';
							  
							  if(selectedParam != null) {
								  if(selectedParam.length > 0) {
									  length_to_match = selectedParam.length;
									  
									  for(s = 0; s < selectedParam.length; s++) {
										  let current_selection = selectedParam[s];
										  
										  if(current_selection != null) {
											  if(current_selection.length == 2) {
												  let current_selection_colindex = parseInt(current_selection[0]);
												  let current_selection_value = current_selection[1];
												  
												  let lower_selection_value = current_selection_value.toLowerCase();
												  let lower_storagecolumn = current_storagecolumn.toLowerCase();
												  
												  console.log("Column to search in: " + lower_storagecolumn);
												  console.log("Selection value to compare: " + lower_selection_value);
												  
												  if(current_selection_colindex == r && lower_storagecolumn.includes(lower_selection_value)) {
													  current_matches++;
												  }
											  }
										  }
									  }
									  
									  
								  }
							  }
						  }
						  
						  
					  }
				  }
				  
				  console.log("Filter Matches: " + current_matches);
				  console.log("Length to Match: " + length_to_match);
				  
				  if(current_matches == length_to_match) {
					  result = result + '<tr>' + current_rowhtml + '</tr>';
				  }
				  
			  }
			  
			  
		  }
	  }
	  
	  return result;
  }
  
});