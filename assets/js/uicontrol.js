document.addEventListener("DOMContentLoaded", function() {
  console.log("TOPS: Injecting UI...");
  
  function inject_tops_tables() {
	  let tops_tables = document.getElementsByClassName("workshop_table");
	  
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
						  let the_table_filter = current_table.getElementsByClassName("workshop_table_filters");
						  
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
								  
								  if(the_table_filter != null) {
									  if(the_table_filter.length > 0) {
										  
										  let the_table_filter_obj = the_table_filter[0];
										  let the_table_filter_controls = the_table_filter_obj.getElementsByTagName("select");
										  let the_table_filter_reset = the_table_filter_obj.getElementsByClassName("workshop_table_resetopt");
										  
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

												  if(the_table_filter_reset != null) {
													if(the_table_filter_reset.length == 1) {
														the_table_filter_reset[0].addEventListener("click", function(){
															for(x = 0; x < the_table_filter_controls.length; x++) {
																let current_filter_control = the_table_filter_controls[x];
																resetSelector(current_filter_control);
															}
														});
													}
												  }

											}
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

  function inject_workshop_tabs() {
	let tops_workshops_container = document.getElementById("tops_workshops_container");

	if(tops_workshops_container != null) {
		console.log("TOPS: Found workshop tabs element");
		let tops_workshops_tabs = tops_workshops_container.getElementsByClassName("tops_workshops_tabs");
		let tops_workshops_tables = tops_workshops_container.getElementsByClassName("tops_workshops_tables");

		if(tops_workshops_tabs != null && tops_workshops_tables != null) {
			if(tops_workshops_tabs.length == 1 && tops_workshops_tables.length == 1) {
				let tops_workshops_tabs_obj = tops_workshops_tabs[0];
				let tops_workshops_tables_obj = tops_workshops_tables[0];
				let tops_workshops_tabs_buttons = tops_workshops_tabs_obj.getElementsByClassName("workshop_tab");
				let tops_workshops_tables_containers = tops_workshops_tables_obj.getElementsByClassName("workshop_table");

				if(tops_workshops_tabs_buttons != null && tops_workshops_tables_containers != null) {
					if(tops_workshops_tabs_buttons.length == 2 && tops_workshops_tables_containers.length == 2) {
						console.log("TOPS: Workshop tables and workshop tabs are " + tops_workshops_tabs_buttons.length);

						tops_workshops_tabs_buttons[0].addEventListener("click", function(){
							console.log("TOPS: Workshop tables changed to Tab 1");
							
							if(tops_workshops_tabs_buttons[0].classList.contains("active") == false){
								tops_workshops_tabs_buttons[0].classList.add("active");
							}

							if(tops_workshops_tabs_buttons[1].classList.contains("active") == true){
								tops_workshops_tabs_buttons[1].classList.remove("active");
							}

							if(tops_workshops_tables_containers[0].classList.contains("active") == false){
								tops_workshops_tables_containers[0].classList.add("active");
							}

							if(tops_workshops_tables_containers[1].classList.contains("active") == true){
								tops_workshops_tables_containers[1].classList.remove("active");
							}
						});

						tops_workshops_tabs_buttons[1].addEventListener("click", function(){
							console.log("TOPS: Workshop tables changed to Tab 2");

							if(tops_workshops_tabs_buttons[0].classList.contains("active") == true){
								tops_workshops_tabs_buttons[0].classList.remove("active");
							}
							
							if(tops_workshops_tabs_buttons[1].classList.contains("active") == false){
								tops_workshops_tabs_buttons[1].classList.add("active");
							}

							if(tops_workshops_tables_containers[0].classList.contains("active") == true){
								tops_workshops_tables_containers[0].classList.remove("active");
							}
							
							if(tops_workshops_tables_containers[1].classList.contains("active") == false){
								tops_workshops_tables_containers[1].classList.add("active");
							}
						});

					}
				}

			}
		}

	}
  }

  inject_workshop_tabs();

  function resetSelector(selElement) {
  	selElement.selectedIndex = 0;
    selElement.dispatchEvent(new Event('change'));
  }

  function inject_tops_opensocial() {
	let sharebuttons = document.getElementsByClassName("tops_eventsingle_sbutton");

	if(sharebuttons != null) {
		if(sharebuttons.length > 0) {
			for(sb = 0; sb < sharebuttons.length; sb++) {
				sharebuttons[sb].addEventListener("click", function(){
					let sharebutton_shareable = this.dataset.shareable;
					let shareable_snetwork = this.dataset.snetwork;
					let shareable_generictext = 'Check out this awesome article: ';
					let shareable_generictitle = 'Your Title Here';
					let open_share = false;
					let open_this = '';
					console.log(sharebutton_shareable);
					console.log(shareable_snetwork);

					if(shareable_snetwork == 'facebook') {
						open_share = true;
						open_this = 'https://www.facebook.com/sharer.php?u=' + sharebutton_shareable;
					} else if(shareable_snetwork == 'twitter') {
						open_share = true;
						open_this = 'https://twitter.com/intent/tweet?text=' + shareable_generictext + '\x20' + sharebutton_shareable;
					} else if(shareable_snetwork == 'linkedin') {
						open_share = true;
						open_this = 'https://www.linkedin.com/shareArticle?mini=true&url=' + sharebutton_shareable + '&title=' + shareable_generictitle + '&summary=' + shareable_generictext + '&source=' + sharebutton_shareable;
					} else if(shareable_snetwork == 'mail') {
						window.location.href = 'mailto:?subject=' + shareable_generictitle + '&body=' + shareable_generictext + '\n' + sharebutton_shareable;
					}

					if(open_share == true) {
						window.open(open_this, "pop", "width=600, height=400, scrollbars=no");
					}
				});
			}
		}
	}

  }

  inject_tops_opensocial();

});