# API de Alojamientos

Esta API permite gestionar alojamientos, como casas, apartamentos, hoteles, etc.

## Instalación

1. Clona este repositorio en tu máquina local.
2. Instala las dependencias usando npm:

```bash
npm install
```
## Uso

Para utilizar esta API, sigue estos pasos:

1. Inicia el servidor ejecutando el siguiente comando:

```bash
npm run dev
```

2. Envía solicitudes HTTP a los endpoints correspondientes para realizar operaciones CRUD en los tipos de alojamiento.

## Endpoints

- `POST /tiposAlojamiento/createTipoAlojamiento`: Crea un nuevo tipo de alojamiento.
  - Parámetros de la solicitud: `{ "Descripcion": "casa" }`
  - Respuesta exitosa: `200 OK`
  - Ejemplo de respuesta: `{ "id": 1, "Descripcion": "casa" }`

- `GET /tiposAlojamiento/getTipoAlojamiento/:id`: Obtiene un tipo de alojamiento por su ID.
  - Parámetros de la solicitud: `ID del tipo de alojamiento`
  - Respuesta exitosa: `200 OK`
  - Ejemplo de respuesta: `{ "id": 1, "Descripcion": "casa" }`

- `GET /tiposAlojamiento/getTipoAlojamiento`: Obtiene todos los tipos de alojamientos.
  - Respuesta exitosa: `200 OK`
  - Ejemplo de respuesta: `{ "id": 1, "Descripcion": "casa",  "id": 2, "Descripcion": "hotel" }`
 
- `PUT /tiposAlojamiento/putTipoAlojamiento/:id`: Actualiza un tipo de alojamiento existente.
  - Parámetros de la solicitud: `ID del tipo de alojamiento`, datos a actualizar
  - Respuesta exitosa: `200 OK`
  - Ejemplo de solicitud: `PUT /tiposAlojamiento/updateTipoAlojamiento/1` con cuerpo `{ "Descripcion": "casa" }`

- `DELETE /tiposAlojamiento/deleteTipoAlojamiento/:id`: Elimina un tipo de alojamiento existente.
  - Parámetros de la solicitud: `ID del tipo de alojamiento`
  - Respuesta exitosa: `204 No Content`



## Errores

- `400 Bad Request`: La solicitud contiene datos incorrectos o incompletos.
- `404 Not Found`: El recurso solicitado no se encuentra.
- `500 Internal Server Error`: Error interno del servidor.

