/* eslint-env node, mocha */
/* eslint-disable no-undef */
const unalib = require('../unalib/index');
var assert = require('assert');

// Pruebas
describe('unalib', function() {
  
  // Prueba de la función is_valid_phone
  describe('función is_valid_phone', function() {
    it('debería devolver true para +506 82978547', function() {
      assert.equal(unalib.is_valid_phone('+506 82978547'), true);
    });
  });

  // Pruebas para la validación de URLs de imágenes
  describe('función is_image_url', function() {
    it('debería devolver true para una URL de imagen válida', function() {
      assert.equal(unalib.is_image_url('https://example.com/image.jpg'), true);
    });
    
    it('debería devolver false para una URL que no es una imagen', function() {
      assert.equal(unalib.is_image_url('https://example.com/file.pdf'), false);
    });
  });

  // Pruebas para la validación de URLs de videos
  describe('función is_video_url', function() {
    it('debería devolver true para una URL de video válida', function() {
      assert.equal(unalib.is_video_url('https://example.com/video.mp4'), true);
    });

    it('debería devolver false para una URL que no es un video', function() {
      assert.equal(unalib.is_video_url('https://example.com/file.txt'), false);
    });
  });

  // Pruebas para la prevención de inyección de scripts
  describe('función sanitizeMessage', function() {
    it('debería eliminar etiquetas <script> maliciosas', function() {
      var unsafeMessage = "<script>alert('hack');</script> Hello World";
      var safeMessage = " Hello World";
      assert.equal(unalib.sanitizeMessage(unsafeMessage), safeMessage);
    });

    it('debería dejar los mensajes normales intactos', function() {
      var normalMessage = "Hola, ¿cómo estás?";
      assert.equal(unalib.sanitizeMessage(normalMessage), normalMessage);
    });
  });

});
