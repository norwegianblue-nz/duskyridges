var $jq = jQuery.noConflict();
/*
 * Shrink header
*/
$jq(document).on("scroll", function(){
	if($jq(document).scrollTop() > 100){
	  $jq("header").addClass("shrink");
	}
	else
	{
		$jq("header").removeClass("shrink");
	}
});

/*
 * Switch the background image for the div with class .background-slider
 * dependant on the image list passed in via HTML5 data attribute.
 * 
 */
(function($) {

    $(document).ready(function () {

        //** Background Image Slider **//
        //Set Variables
        var backgroundImageSlider = $('.background-slider');
                    
        //Create image URL array and variables
        var backgroundImageData = backgroundImageSlider.attr('data-background-image-list');
        var backgroundImageList = backgroundImageData.split(',');
        var backgroundImageCount = backgroundImageList.length -1;
        var backgroundImageLast = backgroundImageCount -1;
        
        
        
        //Loop through the image URL's array and Background color array
        var delayTime = 8000; // This is the delay before the loop is started
        
        (function theLoop (i) {
            setTimeout(function () {
                backgroundImageSlider.fadeTo(2000, 0 , function()
                {
                  //$(this).css('background-image', 'url(' + backgroundImageList[i - 1] + ')');
                    $(this).attr('style', 'background-image: url(' + backgroundImageList[i - 1] + ') ; opacity: 0');
                    $(this).fadeTo(2000, 1);
                });//.fadeTo(3000, 1);
                //backgroundImageSlider.attr('style', 'background-image: url(' + backgroundImageList[i - 1] + ')');
                //backgroundImageSlider.attr('class', 'nb_fixed-bg background-slider nb_trans-' + i + ')');

                delayTime = 10000;

                
                if (--i) {
                    theLoop(i);
                }
                if (i === 0) {
                    i = backgroundImageCount;
                    theLoop(i);
                }
            }, delayTime);
        })(backgroundImageCount);
        
    });

}($jq));