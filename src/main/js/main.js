//Utility variables :
var enabled = "enabledKey";




$( document ).ready(main()); //Executed only once on page load, all other dynamic actions dictated by listener functions

function main()
{
  prependStartButton();
  assignStartButton();


  //Main method
  keyListener();

}

//Prepend a button to the body of the html page, this button can be used to toggle (enable or disable) the application
function prependStartButton()
{
  var $input = $('<input type="button" value="On" id="startButton" />');
     $input.prependTo($("body"));
}

//This method will set the state of the button toggle, and the idea is to use the enabled or disabld state to stopp execution of other
//Functions, so if its disabled just skip the functions.
//Also, the idea is to tage the image HTML to be after this button, and situate where the image is displayed under the button.
function assignStartButton()
{
   $("#startButton").click(
     function(){
       if( !isButtonEnabled() )
       {
         //Is not enabled, make it enabled
         localStorage.setItem(enabled, 1);
         $("#startButton").prop("value","Off");
         console.log("IS ENABLED : "+isButtonEnabled());
       }
      else if( isButtonEnabled() )
      {
        //Is enabled, make it disabled
        localStorage.setItem(enabled, 0);
        $("#startButton").prop("value","On");

        console.log("IS DISABLED : "+isButtonEnabled());
      }
    }
);
  //The button state has been determined, and it is time to assign the HTML (will always exist, may be hidden)
   $("#startButton").after("<div id=\"message\" ></div>");
   $("#message").after("<div id=\"imageView\" ></div>");
}

/*
Purpose of this function is to see if the enabled field of localstorage is true
*/
function isButtonEnabled(){

  if(localStorage.getItem(enabled) == "null" || localStorage.getItem(enabled) == "null" || localStorage.getItem(enabled) == 0)
  {
     //We are now, will dispay to user the 'close' on button,
    //Similar to a light switch, when its on you read off, when its off you read on.
    return false;
  }
  else if(localStorage.getItem(enabled) == 1)
  {
    return true;
  }

}

//Create function to interpret user key entry of 'W', and 'S'
function keyListener()
{
  //w== 87, s== 83
  $(document).keydown(function(key){

   if(!isButtonEnabled())
   {
     console.log("FROM KEYDOWN, BUTTON NOT ENABLED");
     //If not enabled, return do not do anything.
     return;
   }
   //w key is pressed
   if(key.keyCode == 87)
   {
     console.log("The 'W' key was pressed");
   }//s
   else if(key.keyCode == 83)
   {
      console.log("The 'S' key was pressed");
   }
  });
}
