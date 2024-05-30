API de Alojamientos
Esta API permite gestionar alojamientos, como casas, apartamentos, hoteles, etc.

Instalación
Clona este repositorio en tu máquina local.
Instala las dependencias usando npm:
bash
Copiar código
npm install
Uso
Para utilizar esta API, sigue estos pasos:

Inicia el servidor ejecutando el siguiente comando:
bash
Copiar código
npm run dev
Envía solicitudes HTTP a los endpoints correspondientes para realizar operaciones CRUD en los tipos de alojamiento.
Endpoints
POST /tiposAlojamiento/createTipoAlojamiento: Crea un nuevo tipo de alojamiento.

Parámetros de la solicitud: { "Descripcion": "casa" }
Respuesta exitosa: 200 OK
Ejemplo de respuesta: { "id": 1, "Descripcion": "casa" }
GET /tiposAlojamiento/getTipoAlojamiento/:id: Obtiene un tipo de alojamiento por su ID.

Parámetros de la solicitud: ID del tipo de alojamiento
Respuesta exitosa: 200 OK
Ejemplo de respuesta: { "id": 1, "Descripcion": "casa" }
