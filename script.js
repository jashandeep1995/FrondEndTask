//Javascript to open/close the side menu

document.querySelector("#show-menu").addEventListener("click",function(){
    document.getElementById("side-menu").classList.toggle("show-style");
})



//Javascript to scroll to the bottom of the page

document.querySelector("#scroll-to-bottom").addEventListener("click",function(e){

    e.preventDefault();
    document.querySelector("#bottom-page").scrollIntoView();
    document.getElementById("side-menu").classList.toggle("show-style");

    let li1 = document.getElementById("loans");
    li1.textContent = "Loans";
    li1.style.display ="block";
   
    let li2 = document.getElementById("finance");
    li2.textContent = "Finance";
    li2.style.display ="block";

    let li3 = document.getElementById("debt");
    li3.textContent = "Debt";
    li3.style.display ="block";
});

/* 
--Putting this as a side note just for the clarification for the project---

I can also put the close icon from outside the ul and can use the prepend method to add the new list elements and can use the remove to delete the newly added list elements.
I noticed from the template that close menu is one of the list element that's the reason I am using the above method. I can also create close menu outside the unordered list
and use the prepend/remove methods as follows:


    let li=document.createElement("li");
    li.textContent="Loans";

    document.querySelector("#side-menu").prepend(li);

*/

  

// Javascript to close the side menu

document.querySelector("#close-menu").addEventListener("click",function(){
  
    document.getElementById("side-menu").classList.toggle("show-style");
    let li1 = document.getElementById("loans");
    li1.style.display ="none";
   
    let li2 = document.getElementById("finance");
    li2.style.display ="none";

    let li3 = document.getElementById("debt");
    li3.style.display ="none";
})


