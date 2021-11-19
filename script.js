
var elig = "";
var sd = "";


function yesnoCheck() {
    if (document.getElementById("yes").checked) {
        document.getElementById('ifYes').style.visibility = 'visible';
        elig = "Yes";
        sd = 5;
    } else if (document.getElementById("no").checked) {
      document.getElementById('ifYes').style.visibility = 'hidden';
      elig = "No";
      sd = 0;
    }
}


function display_details() {

  document.getElementById('first').style.display = 'none';
  document.getElementById('second').style.display = '';
  
  document.getElementById('third').style.display = 'none';
  document.getElementById('fourth').style.display = '';

  document.getElementById('5').style.display = 'none';
  document.getElementById('6').style.display = '';

  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  
  var thedate = document.getElementById("thedate").value;

  var cq = document.getElementById("childquantity").value;
  var aq = document.getElementById("adultquantity").value;
  var price = cq*10 + aq*20 -sd;
  
  var maininterest = document.getElementById("maininterest").value;

  document.getElementById("order").innerHTML = "You ordered " + cq + " children tickets and " + aq + " adult tickets for this date:  " + thedate;

  document.getElementById("fullname").innerHTML = "Name: " + firstname + " " + lastname;

  document.getElementById("mainint").innerHTML = "Main Interest: " + maininterest;

  document.getElementById("discount").innerHTML = "Eligible for €5 Student/Teacher Discount: " + elig;

  document.getElementById("total").innerHTML = "TOTAL:  €" + price;
}

 