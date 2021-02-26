jQuery(document).ready(() => {
	const session = JSON.parse(sessionStorage.getItem("sessionData"));
	
	$("body").on("click", ".js-inicio", () => {
		const url = encodeURI("/deusto-gincana/vistas/home.html?id=" + session.id);
		window.location.href = url;
	});
	
	$("body").on("click", ".js-compen-bene", () => {
		const url = encodeURI("/deusto-gincana/vistas/buzon.html?id=" + session.id);
		console.log(url);
		window.location.href = url;
	});
	
	$("body").on("click", ".js-projects", () => {
		const url = encodeURI("/deusto-gincana/vistas/proyectos.html?id=" + session.id);
		console.log(url);
		window.location.href = url;
	});
	
	$("body").on("click", ".js-candidate", () => {
		if(session.id === 1347) {
			const url = encodeURI("/deusto-gincana/vistas/candidaturas.html?id=" + session.id);
			window.location.href = url;
		} else {
			alert('No tienes el role necesario para acceder.');
		}
	});
	
	$("body").on("click", ".js-logout", () => {
		sessionStorage.removeItem("sessionData");
		window.location.href = "/deusto-gincana/index.html";
	});
	
	if(session.role !== 'responsable') {
		$("#user-image").attr("src", "https://nosotros.gfi.es/system/files/styles/user_64x64px/private/pictures/picture-7771-1565685125.jpg?itok=8BAAoVn-");
		$("#user-name").text("Empleado Apellido1 Apellido2");
		$("#menu-candidaturas").css({'pointer-events': 'none'});
		$("#candidaturas").css({'opacity': 0.5, 'pointer-events': 'none'});
	} else {
		$("#user-image").attr("src", "https://nosotros.gfi.es/system/files/styles/user_128x128px/private/pictures/picture-1950-1557824280.jpg?itok=nNK8FEir");
		$("#user-name").text("Responsable Apellido1 Apellido2");
	}
	
	session.id = parseInt(window.location.search.split('=')[1]);
	session.email = session.id === 1347 ? 'responsable.apellido@empresa.ficticia' : 'empleado.apellido@empresa.ficticia';
	session.role = session.id === 1347 ? 'responsable' : 'empleado';
	sessionStorage.setItem("sessionData", JSON.stringify(session));
})