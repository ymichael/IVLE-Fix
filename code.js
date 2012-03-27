(function() {

  $(function() {
    var blueText, cal, dt, eventButton, events, eventsHidden, ivlemsg, rightButtons, text, toggleMessages;
    $("#ivlemsg p").find("br").remove();
    blueText = $("div#ctl00_ContentPlaceHolder1_ctl02_TC_TP_Module font[color='blue'] > a");
    rightButtons = blueText.closest("td").siblings("td[align='right']");
    rightButtons.attr('id', 'rightButtons');
    blueText.closest("td").html("");
    text = ["Announcements", "What's new", "Download", "Refresh"];
    _(rightButtons.find("a")).each(function(e, i) {
      var onClickAttr, txt;
      txt = text[i];
      e = $(e);
      onClickAttr = e.attr('onclick');
      if (onClickAttr === void 0) {
        return e.replaceWith("<a class='btn' href=\"" + (e.attr('href')) + "\">" + txt + "</a>");
      } else {
        onClickAttr = onClickAttr.toString();
        onClickAttr = onClickAttr.substring(onClickAttr.indexOf('{') + 1, onClickAttr.lastIndexOf('}'));
        return e.replaceWith("<button class='btn' href=\"" + (e.attr('href')) + "\" onclick=\"" + onClickAttr + "\">" + txt + "</button>");
      }
    });
    rightButtons.closest('table').css('margin', '5px 0 15px 0');
    rightButtons.closest('table').siblings('hr').remove();
    cal = $("#ctl00_ContentPlaceHolder1_ctl01_UpdatePanel1");
    cal = cal.closest("div.wsBlock");
    events = cal.next();
    events.attr("id", "events_listing");
    cal.remove();
    dt = new Date();
    rightButtons.append("<a class='btn btn-info' onclick=\"javascript:window.location='/Organizer/view_weekly.aspx?displaytype=all&dt=" + (dt.getFullYear()) + "-" + (dt.getMonth() + 1) + "-" + (dt.getDate()) + "'\">Schedule</a>");
    events = events.append("<button class='btn' id='expand-events'>Close</button>");
    eventsHidden = false;
    events = events.children("div");
    eventButton = $('#expand-events');
    eventButton.on('click', function(e) {
      events.fadeToggle('slow');
      if (eventsHidden === false) {
        eventButton.html("Expand");
      } else {
        eventButton.html("Close");
      }
      eventsHidden = !eventsHidden;
      return false;
    });
    events.next().remove();
    toggleMessages = $('div#divtoggle');
    toggleMessages.html("<a class='btn btn-primary' id='important-msg-button'>" + (toggleMessages.text()) + "</a>");
    ivlemsg = $('#ivlemsg');
    toggleMessages = toggleMessages.children("a");
    toggleMessages.on('click', function() {
      ivlemsg.slideToggle('slow');
      return false;
    });
    rightButtons.append(toggleMessages);
    return toggleMessages.trigger('click');
  });

}).call(this);
