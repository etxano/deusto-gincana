jQuery(document).ready(() => {
	$("body").keypress((e) => {
		 const key = e.which;
		 
		 if(key == 13 && $('#edit-name').val() != '') {
		    $('#edit-submit').click();
		 }
	});   
	
	$("body").on("click", ".js-reset-pass", () => {
		const idEmployee = $('#edit-id-employee').val();
		console.log(idEmployee);
		
		if(idEmployee === '') {
			$('#error')[0].classList.remove("message--show");
			$('#reset-success')[0].classList.remove("message--show");
			$('#reset-responsable')[0].classList.remove("message--show");
			$('#error-empty')[0].classList.add("message--show");
		} else if (idEmployee === '1152') {
			$('#error-empty')[0].classList.remove("message--show");
			$('#error')[0].classList.remove("message--show");
			$('#reset-responsable')[0].classList.remove("message--show");
			$('#reset-success')[0].classList.add("message--show");
		} else if (idEmployee === '1347') {
			$('#error-empty')[0].classList.remove("message--show");
			$('#error')[0].classList.remove("message--show");
			$('#reset-success')[0].classList.remove("message--show");
			$('#reset-responsable')[0].classList.add("message--show");
		} else {
			$('#error-empty')[0].classList.remove("message--show");
			$('#reset-success')[0].classList.remove("message--show");
			$('#reset-responsable')[0].classList.remove("message--show");
			$('#error')[0].classList.add("message--show");
		}
	});
});