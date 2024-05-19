// Función para contar palabras
function contarPalabras(texto) {
    // Convertir el texto en un array de palabras
    const palabras = texto.split(' ');
  
    // Inicializar un objeto para almacenar el conteo de palabras
    const conteoPalabras = {};
  
    // Recorrer cada palabra en el array
    for (const palabra of palabras) {
      // Convertir la palabra a minúsculas para ignorar mayúsculas/minúsculas
      const palabraMinuscula = palabra.toLowerCase();
  
      // Verificar si la palabra ya está en el objeto conteoPalabras
      if (conteoPalabras[palabraMinuscula]) {
        // Si la palabra ya existe, incrementar su conteo
        conteoPalabras[palabraMinuscula]++;
      } else {
        // Si la palabra no existe, agregarla al objeto conteoPalabras con un conteo de 1
        conteoPalabras[palabraMinuscula] = 1;
      }
    }
  
    // Mostrar el conteo de palabras
    for (const [palabra, conteo] of Object.entries(conteoPalabras)) {
      console.log(`Palabra ${palabra}: ${conteo} veces`);
    }
  }
  
  // Solicitar al usuario que ingrese un párrafo de texto
  const textoUsuario = prompt('Ingrese un párrafo de texto:');
  
  // Llamar a la función para contar palabras
  contarPalabras(textoUsuario);
  