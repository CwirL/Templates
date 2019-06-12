navItem1 = document.getElementById("navItem1");
navItem1.onclick = () => {
  document.querySelector("#first").scrollIntoView({
    behavior: "smooth"
  });
};
navItem2 = document.getElementById("navItem2");
navItem2.onclick = () => {
  document.querySelector("#vid").scrollIntoView({
    behavior: "smooth"
  });
};
navItem3 = document.getElementById("navItem3");
navItem3.onclick = () => {
  document.querySelector("#pricing").scrollIntoView({
    behavior: "smooth"
  });
};

window.onscroll = function(e) {
  var position = window.scrollY;
  console.log(position);
  if (position>=0 && position<547.98){
    navItem1.classList.add("active");
    
  }else{
    navItem1.classList.remove("active");
  }
  if (position>=548 && position<991){
    navItem2.classList.add("active");
    
  }else{
    navItem2.classList.remove("active");
  }
  if (position==991){
    navItem3.classList.add("active");
  }else{
    navItem3.classList.remove("active");
  }
};
