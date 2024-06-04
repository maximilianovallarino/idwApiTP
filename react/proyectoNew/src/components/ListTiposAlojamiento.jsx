import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import api from '../api';

const ListTiposAlojamiento = () => {
  const [tiposAlojamiento, setTiposAlojamiento] = useState([]);
  const navigate = useNavigate();  

  useEffect(() => {
    api.get('/tiposAlojamiento/getTipoAlojamiento')
      .then(response => setTiposAlojamiento(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleEdit = (id) => {
    navigate(`/editar/${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Eliminar tipo de alojamiento con ID: ${id}`);
  };

  return (
    <div>
      <h2>Tipos de Alojamiento</h2>
      <ul>
        {tiposAlojamiento.map(tipo => (
          <li key={tipo.id}>
            {tipo.Descripcion}
            <button onClick={() => handleEdit(tipo.id)}>Editar</button>
            <button onClick={() => handleDelete(tipo.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListTiposAlojamiento;
