// Módulo de validación
module.exports = {
	// Lógica que valida si un teléfono está correcto...
	is_valid_phone: function (phone) {
		var isValid = false;
		// Expresión regular para validar números de teléfono
		var re = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/.]*[0-9]{8}[-\s/.]*$/i;

		try {
			isValid = re.test(phone);
		} catch (e) {
			console.log(e);
		}

		return isValid;
	},

	// Función para obtener código embebido (enlace telefónico)
	getEmbeddedCode: function (phoneNumber) {
		return '<a href="tel:' + phoneNumber + '">' + phoneNumber + '</a>';
	},

	// Prevenir inyecciones de scripts mediante sanitización
	sanitizeMessage: function (message) {
		// Eliminar cualquier etiqueta HTML peligrosa (evita inyecciones de scripts)
		return message
			.replace(/<script[^>]*>([\S\s]*?)<\/script>/gim, '')
			.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, '');
	},

	// Validar si es una URL de imagen
	is_image_url: function (url) {
		return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
	},

	// Validar si es una URL de video
	is_video_url: function (url) {
		return url.match(/\.(mp4|webm|ogg)$/) != null;
	},

	// Validar si una URL es válida
	is_valid_url: function (url) {
		var re = /^(https?:\/\/[^\s$.?#].[^\s]*)$/i;
		return re.test(url);
	},

	// Función para validar mensajes
	validateMessage: function (msg) {
		var obj = JSON.parse(msg);

		// Sanitizar el mensaje para prevenir inyecciones de scripts
		obj.mensaje = this.sanitizeMessage(obj.mensaje);

		// Validar si el mensaje es un teléfono
		if (this.is_valid_phone(obj.mensaje)) {
			console.log('Es un teléfono!');
			obj.mensaje = this.getEmbeddedCode(obj.mensaje);
		}
		// Validar si el mensaje es una URL válida de imagen o video
		else if (this.is_valid_url(obj.mensaje)) {
			if (this.is_image_url(obj.mensaje)) {
				console.log('Es una imagen!');
				obj.mensaje =
					"<img src='" +
					obj.mensaje +
					"' style='max-width: 200px; max-height: 200px;' />";
			} else if (this.is_video_url(obj.mensaje)) {
				console.log('Es un video!');
				obj.mensaje =
					"<video controls style='max-width: 320px; max-height: 240px;'><source src='" +
					obj.mensaje +
					"' type='video/mp4'></video>";
			} else {
				// Si es una URL válida pero no es imagen ni video, simplemente muestra el link
				obj.mensaje =
					"<a href='" + obj.mensaje + "' target='_blank'>" + obj.mensaje + '</a>';
			}
		} else {
			console.log('Es un texto!');
		}

		return JSON.stringify(obj);
	},
};
