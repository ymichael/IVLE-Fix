$ () ->
        #Remove blank lines from messages that look like crap. This is most likely a temporary fix for the current messages.
        $("#ivlemsg p").find("br").remove()

        #Remove the "if modules dont appear click refresh" msg, there's a refresh button on the right anyway
        blueText = $("div#ctl00_ContentPlaceHolder1_ctl02_TC_TP_Module font[color='blue'] > a")
        rightButtons = blueText.closest("td").siblings "td[align='right']"
        rightButtons.attr 'id', 'rightButtons'
        blueText.closest("td").html ""

        #Use Bootstrap buttons instead
        text = ["Announcements", "What's new", "Download", "Refresh"]
        _(rightButtons.find "a").each (e, i) ->
                txt = text[i]
                e = $(e)
                onClickAttr = e.attr('onclick')
                if onClickAttr is undefined
                        e.replaceWith "<a class='btn' href=\"#{e.attr 'href'}\">#{txt}</a>"
                else
                        onClickAttr = onClickAttr.toString() #this adds a wrapping fn() {} for some reason, so lets strip it away
                        onClickAttr = onClickAttr.substring onClickAttr.indexOf('{')+1, onClickAttr.lastIndexOf('}')
                        e.replaceWith "<button class='btn' href=\"#{e.attr 'href'}\" onclick=\"#{onClickAttr}\">#{txt}</button>"

        #lets add some horizontal spacing around those buttons, and remove the horizontal rule, shall we?
        rightButtons.closest('table').css 'margin', '5px 0 15px 0'
        rightButtons.closest('table').siblings('hr').remove()

        #Replace calendar with a single link to the schedule
        cal = $("#ctl00_ContentPlaceHolder1_ctl01_UpdatePanel1")
        cal = cal.closest("div.wsBlock")

        #store a reference to the events listing. The id will be used by our css.
        # Lets also add a button that hides the entire listing.
        events = cal.next()
        events.attr "id", "events_listing"
        cal.remove()
        dt = new Date()
        rightButtons.append "<a class='btn btn-info' onclick=\"javascript:window.location='/Organizer/view_weekly.aspx?displaytype=all&dt=#{dt.getFullYear()}-#{dt.getMonth()+1}-#{dt.getDate()}'\">Schedule</a>"
        events = events.append "<button class='btn' id='expand-events'>Close</button>"
        eventsHidden = false
        events = events.children("div")
        eventButton = $('#expand-events')
        eventButton.on 'click', (e) ->
                events.fadeToggle('slow')
                if eventsHidden is false
                        eventButton.html "Expand"
                else
                        eventButton.html "Close"
                eventsHidden = !eventsHidden
                false
        #Remove link to "NUS Calendar of Events"
        events.next().remove()

        #hide the 'important' messages, move the button for it to rightButtons area
        toggleMessages = $('div#divtoggle')
        toggleMessages.html "<a class='btn btn-primary' id='important-msg-button'>#{toggleMessages.text()}</a>"
        ivlemsg = $('#ivlemsg')
        toggleMessages = toggleMessages.children("a")
        toggleMessages.on 'click', () ->
                ivlemsg.slideToggle('slow')
                false
        rightButtons.append toggleMessages
        toggleMessages.trigger 'click'
