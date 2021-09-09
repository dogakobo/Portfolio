$(document).ready(function(){

   $('#two').poptrox({
   	popupCloserBackgroundColor:	'#BBB59B',
   	popupPadding: 0,	
   	overlayColor: '#2c2c2c',
		overlayOpacity: 0.85,
		popupCloserText: '×',
		popupLoaderText: '***',
		selector: 'a',
		usePopupCaption: false,
		usePopupEasyClose: false,
		usePopupNav: true,
		popupCloserTextColor: ' #3D3A33',	
		popupCloserTextSize: '30px',
   });

   $('#one').poptrox({
	popupCloserBackgroundColor:	'#BBB59B',
	popupPadding: 0,	
	overlayColor: '#2c2c2c',
	 overlayOpacity: 0.85,
	 popupCloserText: '×',
	 popupLoaderText: '***',
	 selector: 'a',
	 usePopupCaption: false,
	 usePopupEasyClose: false,
	 usePopupNav: true,
	 popupCloserTextColor: ' #3D3A33',	
	 popupCloserTextSize: '30px',
});
			
});