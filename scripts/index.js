async function cargarPartial(nombre) {
    try {
        const ruta = `/partials/${nombre}.html`;
        const resp = await fetch(ruta, { cache: "no-cache" }); // Realiza la petición HTTP para obtener el contenido del partial
        if (!resp.ok) throw new Error(`Error al cargar ${ruta}: ${resp.status}`); // Si la respuesta no es correcta (404, 500, etc.), lanza un error

        const html = await resp.text(); // Convierte la respuesta a texto (HTML plano)
        const placeholder = document.getElementById(`${nombre}-placeholder`);
        if (!placeholder) throw new Error(`No se encontró el contenedor para ${nombre}`); // Si no existe el contenedor, lanza un error informativo

        placeholder.innerHTML = html; //Inserta el contenido HTML descargado dentro del contenedor


    } catch (err) {
        console.error(err);
    }
}

// --- llamadas al final ---
cargarPartial('header');
cargarPartial('footer');

