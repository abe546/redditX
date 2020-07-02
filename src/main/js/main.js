//Sanity test :

$( document ).ready(main()); //Executed only once on page load, all other dynamic actions dictated by listener functions

function main()
{
  //Main method
  keyListener();
}

//Create function to interpret user key entry of 'W', and 'S'
function keyListener()
{
  //w== 87, s== 83
  $(document).keydown(function(key){

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
