###
	this script is for the stupid seconds we waste clicking "login" on the ivle home
###
$ ->
	#first kind of login page
	if $("#ctl00_userid").length is not 0
		#if login fields are already populated, try to login immediately
		if $("#ctl00_userid").val() and $("#ctl00_password").val()
			$("#ctl00_loginimg1").click()
	else
		#second kind of login page.
		location.href = "/workspace.aspx"