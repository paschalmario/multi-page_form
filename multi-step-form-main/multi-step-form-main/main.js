const checkbox = document.querySelectorAll(".checkbox");
const backchange = document.querySelectorAll(".add_ons_items");

checkbox.forEach((checkboxes, index) => {
checkboxes.addEventListener('change', function(){
    if(this.checked){
        backchange[index].style.backgroundColor = 'hsl(231, 100%, 99%)';
        backchange[index].style.borderColor = 'hsl(243, 100%, 62%)';

    }
    else{
        backchange[index].style.backgroundColor = '' ;
        backchange[index].style.borderColor = ''
    }
})
});



const selectionsItems = document.querySelectorAll(".selections-items");
const icons = document.querySelectorAll(".image");

for(let i = 0;i < selectionsItems.length; i++){

   if(selectionsItems[i].style.backgroundColor === "undefined" )
   {
        selectionsItems[i].style.backgroundColor = "blue";
   } 
   else{
    selectionsItems[i].style.backgroundColor = "";
   }
}
    const span1 = document.getElementById("span1");
    const span2 = document.getElementById("span2");
document.getElementById("toggle").addEventListener("change", function() {
    
    if (this.checked) {
      span2.style.color = "blue";
      span1.style.color = "";
    } else {
      span1.style.color = "blue";
      span2.style.color = "";
    }
  });

