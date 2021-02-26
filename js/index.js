// document.getElementsByTagName('html')[0].innerHTML

jQuery(document).ready(() => {
	$("body").keypress((e) => {
		 const key = e.which;
		 
		 if(key == 13 && $('#edit-name').val() != '') {
		    $('#edit-submit').click();
		 }
	});   
	
	$("body").on("click", ".js-login", () => {
		const email = $('#edit-name').val();
		const pass = $('#edit-pass').val();
		let sessionData = {email: email}
		
		if (email === 'empleado.apellido@empresa.ficticia') {
			if(pass === '79884993Y1583758966') {
				sessionData.id = 1152;
				sessionData.role = 'empleado';
				
				login(sessionData);
			} else {
				$('#error-user')[0].classList.remove("message--show");
				$('#error-password')[0].classList.add("message--show");
			}
		} else if (email === 'responsable.apellido@empresa.ficticia') {
			if(pass === '1347') {
				sessionData.id = 1347;
				sessionData.role = 'responsable';
				
				login(sessionData);
			} else {
				$('#error-user')[0].classList.remove("message--show");
				$('#error-password')[0].classList.add("message--show");
			}
		} else {
			$('#error-password')[0].classList.remove("message--show");
			$('#error-user')[0].classList.add("message--show");
		}
	});
	
	const login = (sessionData) => {
		sessionStorage.setItem('sessionData', JSON.stringify(sessionData));
		
		const url = encodeURI("/deusto-gincana/vistas/home.html?id=" + sessionData.id);
		window.location.href = url;
	}
})