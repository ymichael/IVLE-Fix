
/*
	this script is for the stupid seconds we waste clicking "login" on the ivle home
*/

(function() {

  $(function() {
    if ($("#ctl00_userid").length === !0) {
      if ($("#ctl00_userid").val() && $("#ctl00_password").val()) {
        return $("#ctl00_loginimg1").click();
      }
    } else {
      return location.href = "/workspace.aspx";
    }
  });

}).call(this);
