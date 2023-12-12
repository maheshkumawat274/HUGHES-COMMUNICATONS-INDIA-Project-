function myForm(event){
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var num = document.getElementById("num").value;
  var state = document.getElementById("state").value;
  var dist = document.getElementById("dist").value;
  var text1 = document.getElementById("text1").value;
  var business = document.getElementById("business").value;
  var text2 = document.getElementById("text2").value;

  if(name =="" || email==""  || num == "" || state==""  || dist =="" || text1==""  || business==""  || text2 == ""){
    alert("Plz fill this form completely");
    return false;
  }else{
    alert("Form Successfully Submitted")
  }
  const details = {
    name:name,
    email:email,
    num:num,
    state:state,
    dist:dist,
    text1:text1,
    business:business,
    text2:text2
  }
  console.log("Form DETAILS :" ,details)
 
}