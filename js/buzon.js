jQuery(document).ready(() => {
	const session = JSON.parse(sessionStorage.getItem("sessionData"));
	
	$("body").on("click", ".js-open-email", (e) => {
		const selected = "#" + e.currentTarget.id;
		console.log(selected)
		if(!$("#" + e.currentTarget.id).hasClass("email-message-element--selected")) {
			$("#" + e.currentTarget.id)[0].classList.add("email-message-element--selected");
			
			if(selected === "#message") {
				$("#message2")[0].classList.remove("email-message-element--selected");
				$("#message3")[0].classList.remove("email-message-element--selected");
				$("#message4")[0].classList.remove("email-message-element--selected");
				$("#message-opened")[0].classList.add("email-message-email--selected");
				$("#message2-opened")[0].classList.remove("email-message-email--selected");
				$("#message3-opened")[0].classList.remove("email-message-email--selected");
				$("#message4-opened")[0].classList.remove("email-message-email--selected");
			} else if (selected === "#message2") {
				$("#message")[0].classList.remove("email-message-element--selected");
				$("#message3")[0].classList.remove("email-message-element--selected");
				$("#message4")[0].classList.remove("email-message-element--selected");
				$("#message2-opened")[0].classList.add("email-message-email--selected");
				$("#message-opened")[0].classList.remove("email-message-email--selected");
				$("#message3-opened")[0].classList.remove("email-message-email--selected");
				$("#message4-opened")[0].classList.remove("email-message-email--selected");
			} else if (selected === "#message3") {
				$("#message")[0].classList.remove("email-message-element--selected");
				$("#message2")[0].classList.remove("email-message-element--selected");
				$("#message4")[0].classList.remove("email-message-element--selected");
				$("#message3-opened")[0].classList.add("email-message-email--selected");
				$("#message-opened")[0].classList.remove("email-message-email--selected");
				$("#message2-opened")[0].classList.remove("email-message-email--selected");
				$("#message4-opened")[0].classList.remove("email-message-email--selected");
			} else if (selected === "#message4") {
				$("#message")[0].classList.remove("email-message-element--selected");
				$("#message2")[0].classList.remove("email-message-element--selected");
				$("#message3")[0].classList.remove("email-message-element--selected");
				$("#message4-opened")[0].classList.add("email-message-email--selected");
				$("#message-opened")[0].classList.remove("email-message-email--selected");
				$("#message2-opened")[0].classList.remove("email-message-email--selected");
				$("#message3-opened")[0].classList.remove("email-message-email--selected");
			}
		} else {
			$("#" + e.currentTarget.id)[0].classList.remove("email-message-element--selected");
			$(selected + "-opened")[0].classList.remove("email-message-email--selected");
		}
	});
})