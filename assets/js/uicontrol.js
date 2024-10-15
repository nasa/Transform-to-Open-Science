document.addEventListener("DOMContentLoaded", function() {
  console.log("TOPS: Injecting UI...");
  let tops_spanishForm = document.getElementById('tops_spanishForm');
  
  function inject_tops_tables() {
	  let tops_tables = document.getElementsByClassName("workshop_table");
	  
	  //Workshop Link Injection
	  reset_workshop_eventlisteners(true);
	  
	  
	  if(tops_tables != null) {
		  if(tops_tables.length > 0) {  
			  
			  //Filters Injection
			  console.log("TOPS: Found total of " + tops_tables.length + " tables");
			  
			  for(i = 0; i < tops_tables.length; i++) {
				  let current_table = tops_tables[i];
				  let the_table = current_table.getElementsByTagName("table");
				  let the_table_cue = current_table.getElementsByClassName("hcue");
				  let the_table_obj;
				  let the_table_storage = [];

				  if(the_table_cue != null && the_table_cue.length == 1) {
					const observer = new window.IntersectionObserver(([entry]) => {
						if (entry.isIntersecting) {
						  if(the_table_cue[0].classList.contains("hide") == false) {
							console.log('ENTER');
							setTimeout(function(){
								the_table_cue[0].classList.add("hide");
							}, 2000);
						  }
						  return
						}
						console.log('LEAVE')
					  }, {
						root: null,
						threshold: 0.1, // set offset 0.1 means trigger if atleast 10% of element in viewport
					  })
					  
					  observer.observe(the_table_cue[0]);
				  }
				  
				  
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
														  
														  reset_workshop_eventlisteners(false, the_table_contents_obj);
														  
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
					if(tops_workshops_tabs_buttons.length == 3 && tops_workshops_tables_containers.length == 3) {
						console.log("TOPS: Workshop tables and workshop tabs are " + tops_workshops_tabs_buttons.length);

						tops_workshops_tabs_buttons[0].addEventListener("click", function(){
							console.log("TOPS: Workshop tables changed to Tab 1");
							
							if(tops_workshops_tabs_buttons[0].classList.contains("active") == false){
								tops_workshops_tabs_buttons[0].classList.add("active");
							}

							if(tops_workshops_tabs_buttons[1].classList.contains("active") == true){
								tops_workshops_tabs_buttons[1].classList.remove("active");
							}

							if(tops_workshops_tabs_buttons[2].classList.contains("active") == true){
								tops_workshops_tabs_buttons[2].classList.remove("active");
							}

							if(tops_workshops_tables_containers[0].classList.contains("active") == false){
								tops_workshops_tables_containers[0].classList.add("active");
							}

							if(tops_workshops_tables_containers[1].classList.contains("active") == true){
								tops_workshops_tables_containers[1].classList.remove("active");
							}

							if(tops_workshops_tables_containers[2].classList.contains("active") == true){
								tops_workshops_tables_containers[2].classList.remove("active");
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

							if(tops_workshops_tabs_buttons[2].classList.contains("active") == true){
								tops_workshops_tabs_buttons[2].classList.remove("active");
							}

							if(tops_workshops_tables_containers[0].classList.contains("active") == true){
								tops_workshops_tables_containers[0].classList.remove("active");
							}
							
							if(tops_workshops_tables_containers[1].classList.contains("active") == false){
								tops_workshops_tables_containers[1].classList.add("active");
							}

							if(tops_workshops_tables_containers[2].classList.contains("active") == true){
								tops_workshops_tables_containers[2].classList.remove("active");
							}
						});

						tops_workshops_tabs_buttons[2].addEventListener("click", function(){
							console.log("TOPS: Workshop tables changed to Tab 3");

							if(tops_workshops_tabs_buttons[0].classList.contains("active") == true){
								tops_workshops_tabs_buttons[0].classList.remove("active");
							}
							
							if(tops_workshops_tabs_buttons[1].classList.contains("active") == true){
								tops_workshops_tabs_buttons[1].classList.remove("active");
							}

							if(tops_workshops_tabs_buttons[2].classList.contains("active") == false){
								tops_workshops_tabs_buttons[2].classList.add("active");
							}

							if(tops_workshops_tables_containers[0].classList.contains("active") == true){
								tops_workshops_tables_containers[0].classList.remove("active");
							}
							
							if(tops_workshops_tables_containers[1].classList.contains("active") == true){
								tops_workshops_tables_containers[1].classList.remove("active");
							}

							if(tops_workshops_tables_containers[2].classList.contains("active") == false){
								tops_workshops_tables_containers[2].classList.add("active");
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
  
  function tops_open_popup(titleParam, descParam, linkParam) {
	let tops_popup = document.getElementById("tops_popup");
	
	if(tops_popup != null) {
		if(tops_popup.classList.contains("show") == false) {
			tops_popup.classList.add("show");
		}
		
		setTimeout(function(){
			let tops_popup_overlay = document.getElementById("tops_popup_overlay");
			let tops_popup_window = document.getElementById("tops_popup_window");
			
			let tops_popup_title = document.getElementById("tops_popup_title");
			let tops_popup_desc = document.getElementById("tops_popup_desc");
			let tops_popup_button = document.getElementById("tops_popup_button");
			
			if(tops_popup_overlay.classList.contains("show") == false) {
				tops_popup_overlay.classList.add("show");
			}
			
			if(tops_popup_window.classList.contains("show") == false) {
				tops_popup_window.classList.add("show");
			}
			
			tops_popup_title.innerHTML = titleParam;
			tops_popup_desc.innerHTML = descParam;
			tops_popup_button.href = linkParam;
			
		}, 300);
	}
	
  }
  
  function inject_tops_popup_close() {
	  let tops_popup = document.getElementById("tops_popup");
	  
	  if(tops_popup != null) {
		  let tops_popup_close = document.getElementById("tops_popup_close");
		  let tops_popup_closeTwo = document.getElementById("tops_popup_closeTwo");
		  let tops_popup_overlay = document.getElementById("tops_popup_overlay");
		  let tops_popup_window = document.getElementById("tops_popup_window");
		  
		  tops_popup_close.addEventListener("click", function(){
			  
			  if(tops_popup_overlay.classList.contains("show") == true) {
				tops_popup_overlay.classList.remove("show");
			  }
				
			  if(tops_popup_window.classList.contains("show") == true) {
				tops_popup_window.classList.remove("show");
			  }
			  
			  setTimeout(function(){
				  if(tops_popup.classList.contains("show") == true) {
					tops_popup.classList.remove("show");
				  }
			  }, 1500);
		  });
		  
		  tops_popup_closeTwo.addEventListener("click", function(){
			  
			  if(tops_popup_overlay.classList.contains("show") == true) {
				tops_popup_overlay.classList.remove("show");
			  }
				
			  if(tops_popup_window.classList.contains("show") == true) {
				tops_popup_window.classList.remove("show");
			  }
			  
			  setTimeout(function(){
				  if(tops_popup.classList.contains("show") == true) {
					tops_popup.classList.remove("show");
				  }
			  }, 1500);
		  });
		  
	  }
  }
  
  inject_tops_popup_close();
  
  function reset_workshop_eventlisteners(allParam, tableParam) {
	  if(allParam == true) {
		  let tops_workshop_links = document.getElementsByClassName("tops_workshop_link");
	  
		  if(tops_workshop_links != null) {
			if(tops_workshop_links.length > 0) {
				for(wsl = 0; wsl < tops_workshop_links.length; wsl++) {
					let current_wsl = tops_workshop_links[wsl];
					let current_wsl_title = current_wsl.dataset.regtitle;
					let current_wsl_desc = current_wsl.dataset.regdesc;
					let current_wsl_link = current_wsl.dataset.reglink;
						  
					current_wsl.addEventListener("click", function(){
						tops_open_popup(current_wsl_title, current_wsl_desc, current_wsl_link);
					});
				}
			}
		  }
	  } else {
		  let tops_workshop_links = tableParam.getElementsByClassName("tops_workshop_link");
		  
		  if(tops_workshop_links != null) {
			if(tops_workshop_links.length > 0) {
				for(wsl = 0; wsl < tops_workshop_links.length; wsl++) {
					let current_wsl = tops_workshop_links[wsl];
					let current_wsl_title = current_wsl.dataset.regtitle;
					let current_wsl_desc = current_wsl.dataset.regdesc;
					let current_wsl_link = current_wsl.dataset.reglink;
						  
					current_wsl.addEventListener("click", function(){
						tops_open_popup(current_wsl_title, current_wsl_desc, current_wsl_link);
					});
				}
			}
		  }
	  }
  }

  function newsletterLoad() {

		observer = new MutationObserver(function(mutationsList, observer) {
			console.log(mutationsList);
			let tops_cc_labels = document.getElementsByClassName("ctct-form-label");
			let tops_cc_gdpr = document.getElementsByClassName("ctct-gdpr-text");
			
			if(tops_cc_labels != null && tops_cc_labels.length > 0) {
				for(let i = 0; i < tops_cc_labels.length; i++) {
					let current_cc_label = tops_cc_labels[i];
					let current_cc_labelHTML = current_cc_label.innerHTML;
					
					
					if(current_cc_labelHTML == 'Email') {
						current_cc_label.innerHTML = current_cc_labelHTML.replace('Email', 'Correo Electrónico');
					} else if(current_cc_labelHTML == 'First Name') {
						current_cc_label.innerHTML = current_cc_labelHTML.replace('First Name', 'Nombre');
					} else if(current_cc_labelHTML == 'Last Name') {
						current_cc_label.innerHTML = current_cc_labelHTML.replace('Last Name', 'Apellido');
					}
					
				}
			}

			if(tops_cc_gdpr != null && tops_cc_gdpr.length == 1) {
				tops_cc_gdpr[0].innerHTML = tops_cc_gdpr[0].innerHTML.replace('By submitting this form, you are consenting to receive updates from:', 'Al enviar este formulario, aceptas recibir actualizaciones de esta dirección:');
				tops_cc_gdpr[0].innerHTML = tops_cc_gdpr[0].innerHTML.replace('You can revoke your consent to receive emails at any time by using the SafeUnsubscribe® link, found at the bottom of every email.', 'Puedes revocar tu consentimiento para recibir correos electrónicos en cualquier momento utilizando el enlace SafeUnsubscribe®, que se encuentra en la parte inferior de cada correo electrónico.');
				tops_cc_gdpr[0].innerHTML = tops_cc_gdpr[0].innerHTML.replace('Emails are serviced by Constant Contact.', 'Los correos electrónicos son atendidos por Constant Contact.');
				tops_cc_gdpr[0].innerHTML = tops_cc_gdpr[0].innerHTML.replace('Our Privacy Policy.', 'Nuestra Política de Privacidad.');
			}
			
		});

		// call 'observe' on that MutationObserver instance, 
		// passing it the element to observe, and the options object
		observer.observe(tops_spanishForm, {characterData: false, childList: true, attributes: false});
	}

	if(tops_spanishForm != null) {
		newsletterLoad();
	}

	let tops_countdown = document.getElementById("tops_countdown");

	function start_countdown() {
		let tops_countdown_days = document.getElementById("tops_countdown_days");
		let tops_countdown_hours = document.getElementById("tops_countdown_hours");
		let tops_countdown_minutes = document.getElementById("tops_countdown_minutes");
		let tops_countdown_seconds = document.getElementById("tops_countdown_seconds");

		let calcNewYear = setInterval(function(){
			date_future = new Date(Date.UTC(2024, 9, 1, 3, 59, 59));
			date_now = new Date();
			date_future_edt_string = date_future.toLocaleString('en-US', {timeZone: 'America/New_York'});

			console.log(date_future);
			console.log(date_now);
			console.log("");

			seconds = Math.floor((date_future - (date_now))/1000);
			minutes = Math.floor(seconds/60);
			hours = Math.floor(minutes/60);
			days = Math.floor(hours/24);

			console.log(seconds);

			if(seconds <= 0) {
				if(tops_countdown_days != null && tops_countdown_hours != null && tops_countdown_minutes != null && tops_countdown_seconds != null) {
					let days_objects = tops_countdown_days.getElementsByTagName("p");
					let hours_objects = tops_countdown_hours.getElementsByTagName("p");
					let minutes_objects = tops_countdown_minutes.getElementsByTagName("p");
					let seconds_objects = tops_countdown_seconds.getElementsByTagName("p");

					if(days_objects.length == 2 && hours_objects.length == 2 && minutes_objects.length == 2 && seconds_objects.length == 2) {
						days_objects[0].innerHTML = double_digit(0);
						hours_objects[0].innerHTML = double_digit(0);
						minutes_objects[0].innerHTML = double_digit(0);
						seconds_objects[0].innerHTML = double_digit(0);
					}
				}
			} else {
				hours = hours-(days*24);
				minutes = minutes-(days*24*60)-(hours*60);
				seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);

				if(tops_countdown_days != null && tops_countdown_hours != null && tops_countdown_minutes != null && tops_countdown_seconds != null) {
					let days_objects = tops_countdown_days.getElementsByTagName("p");
					let hours_objects = tops_countdown_hours.getElementsByTagName("p");
					let minutes_objects = tops_countdown_minutes.getElementsByTagName("p");
					let seconds_objects = tops_countdown_seconds.getElementsByTagName("p");

					if(days_objects.length == 2 && hours_objects.length == 2 && minutes_objects.length == 2 && seconds_objects.length == 2) {
						days_objects[0].innerHTML = double_digit(days);
						hours_objects[0].innerHTML = double_digit(hours);
						minutes_objects[0].innerHTML = double_digit(minutes);
						seconds_objects[0].innerHTML = double_digit(seconds);
					}
				}
			}
			
		},1000);
	}

	if(tops_countdown != null) {
		start_countdown();
	}

	function double_digit(n){
		return n > 9 ? "" + n: "0" + n;
	}

});