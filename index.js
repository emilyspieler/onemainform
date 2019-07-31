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
