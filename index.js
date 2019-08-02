//chart number one function
$(function () {
    $(".checking").show();
    //if you have any radio selected by default
    $('[name="optionsRadios"]:checked').addClass('selected');
});
  $(document).on('click', '[name="optionsRadios"]', function () {
      if (!$(this).hasClass('selected')) {
          var $selected = $('.selected[name="optionsRadios"]');
          if ($selected.length != 0){
            if ( $selected.val() == 1)
                  {
                    $(".checking").hide();
                    $(".debit").show();
                  }
              else {
                $(".checking").show();
                $(".debit").hide();
              }

              $selected.removeClass('selected');
          }
      }
      $(this).addClass('selected');
  });

//password verification
var number = document.getElementById("accountnumber1")
  , confirm_number = document.getElementById("accountnumber2");

function validateNumber(){
  if(number.value !== confirm_number.value) {
    confirm_number.setCustomValidity("Account numbers do not match");
  } else {
    confirm_number.setCustomValidity('');
  }
}

number.onchange = validateNumber;
confirm_number.onkeyup = validateNumber;
