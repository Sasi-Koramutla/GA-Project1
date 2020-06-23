$(()=>{
   // localStorage.clear();
    console.log(localStorage);
var string="search_0";
for(i=0;i<localStorage.length-1;i++){
  string+="1";
 const $div=$("<div>").html(localStorage.getItem(string));
 $div.addClass("history-div");
 $("#history").append($div);
}

//About modal logic
$("#aboutLink").on("click",()=>{
  event.preventDefault();
  $("#modal").css("display","block");
});
//close modal logic
$("#close").on("click",()=>{
  event.preventDefault();
  $("#modal").css("display","none");
});

});

