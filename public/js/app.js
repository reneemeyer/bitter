'use strict';

// page loaded 

$(function(){
	$.ajaxSetup({
	headers: {
		'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
		}
	});

	var Backbone = require('backbone');
	var HomeView = require('./views/HomeView.js');

	var homeView= new HomeView();
	
	$('#content').html(homeView.render().el);
});