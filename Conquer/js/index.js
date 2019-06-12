var barState=false;
openNav = () => {
  barState = !barState;
  var navbar = document.querySelector('#navbar');
  if (barState) {
    navbar.style.height ="155px";
    navbar.style.padding ="1px 0 1px 0";
  }else{
    navbar.style.height ="0px";
    navbar.style.padding ="0px";
  }
}