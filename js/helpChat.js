jQuery(document).ready(() => {
	$("body").on("click", ".js-help-open", () => {
		if(!$("#helpchat").hasClass("help-chat--show") ) {
			$("#helpchat")[0].classList.add("help-chat--show");
		} else {
			$("#helpchat")[0].classList.remove("help-chat--show");
		}
	});
	
	$("body").on("click", ".js-minimize", () => {
		if(!$("#helptext").hasClass("help-text-block--hide") ) {
			$("#helptext")[0].classList.add("help-text-block--hide");
		} else {
			$("#helptext")[0].classList.remove("help-text-block--hide");
		}
	});
});