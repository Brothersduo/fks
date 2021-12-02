var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg", "https://www.pinclipart.com/picdir/middle/21-211056_png-mother-only-transparent-warioware-9-volt-mom.png" ];
var names = ["Fmaily Book","Vikram Das Vaishnav", "Prateek Vaishnav", "Durga Mythri Vaishnv" , "Kaushik Vaishnav"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
   
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i];
    
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
