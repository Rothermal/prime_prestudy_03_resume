console.log("Hello, is this thing on.");


  $(document).ready(function(){
    $( ".pew" ).on('click',function() {
    $( 'body' ).removeClass( "close" );
    $(".container").removeClass("byebye");
    $(this).closest('.pew').hide();
});
   
    $( ".pew2" ).on('click',function() {
    $(".container").removeClass("byebye");
    $(this).closest('.pew2').hide();
    });  
 });
   
  $(document).ready(function() {
	  $('.slideButton').on('click',function() {
		$(this).closest('.slideButton').next('.slideContent').slideToggle('slow');
	});
});

// working on building an image array and functions to cycle through the image on my page.
//var imageMap = ['https://36.media.tumblr.com/e14b41235872709e1a29164111c06141/tumblr_nyyd8vEmYr1ukuh1zo1_400.jpg',
//    'https://40.media.tumblr.com/9c550ab8a37cb9db64c935f16c8e98ee/tumblr_nx03vrQxM21ukuh1zo3_400.jpg',
//    'https://40.media.tumblr.com/b9221ffb0b8311c6dc6cc90772b3e6bd/tumblr_nyyd9p7VU01ukuh1zo1_400.jpg',
//    'https://40.media.tumblr.com/adfb01f6365de55521b123a9e9035eb5/tumblr_nyyxdqC8P21ukuh1zo1_400.jpg' 
//    ];
//
//var mapPositionX = 0;
//var mapPositionY = 0;
//function changePic (){
//  if (mapPositionX >= 3 ){
//    return document.getElementById("imagesOfThingsIAmNot").src=imageMap[3]
//  } else {
//   mapPositionX += 1;
//   mapPositionY += 1;
//   return document.getElementById("imagesOfThingsIAmNot").src= imageMap[mapPositionX];
//    }
//}