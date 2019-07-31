//credit and debit card selector feature
$(document).ready(function(){
    $('#cardtype').on('change', function() {
      if ( this.value == '1')
      {
        $("#credit").show();
        $("#debit").hide();
      }
      else if ( this.value == '2')
      {
        $("#credit").hide();
        $("#debit").show();
      }
      else {
        $("#debit").hide();
        $("#credit").hide();
      }
    });
});

//min expiration date validation
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
 if(dd<10){
        dd='0'+dd
    }
    if(mm<10){
        mm='0'+mm
    }

today = yyyy+'-'+mm+'-'+dd;
document.getElementById("datefield").setAttribute("min", today);
document.getElementById("datefieldcredit").setAttribute("min", today);

//validate selection between debit and credit
function validateForm() {
  var selection = document.forms["applicationform"]["cardtype"].value;

  if (value === "") {
    alert("no");
    return false;
  }

}
