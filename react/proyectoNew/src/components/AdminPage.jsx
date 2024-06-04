

//NO ANDA (no se muestra el contenido en la pagina, solo sale el header y el footer )

import React from 'react';
import { Link } from 'react-router-dom';

const AdminPage = () => {
  return (
    <div>
      <h1>Administración</h1>
      <ul>
        <li><Link to="/admin/create-tipo-alojamiento">Crear Tipo de Alojamiento</Link></li>
        
      </ul>
    </div>
  );
};

export default AdminPage;
