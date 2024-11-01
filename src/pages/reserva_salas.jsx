import React, { useState } from 'react';

const Reserva_Salas = () => {
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [capacity, setCapacity] = useState('');
  const [accessible, setAccessible] = useState(false);
  const [powerAvailable, setPowerAvailable] = useState(false);
  const [date, setDate] = useState('');
  const [error, setError] = useState('');
  const [showTable, setShowTable] = useState(false);
  const [selectedBlocks, setSelectedBlocks] = useState([]);
  const [reservedBlocks] = useState(generateReservedBlocks());
  const [showReservationDetails, setShowReservationDetails] = useState(false);
  const [reservationSuccess, setReservationSuccess] = useState(false);
  const [reservationCode, setReservationCode] = useState('');

  const handleLocationChange = (e) => setLocation(e.target.value);
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    if (e.target.value === 'individual') {
      setCapacity('0-1');
    } else {
      setCapacity('');
    }
  };
  const handleCapacityChange = (e) => setCapacity(e.target.value);
  const handleAccessibleChange = (e) => setAccessible(e.target.checked);
  const handlePowerAvailableChange = (e) => setPowerAvailable(e.target.checked);
  const handleDateChange = (e) => setDate(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!location || !category || (category === 'grupal' && !capacity) || !date) {
      setError('Por favor, complete todos los campos requeridos.');
      return;
    }
    setError('');
    setShowTable(true);
  };

  const handleBack = () => {
    setShowTable(false);
    setSelectedBlocks([]);
    setDate('');
  };

  const handleBlockClick = (room, hour) => {
    const block = `${room}-${hour}`;
    if (selectedBlocks.includes(block)) {
      setSelectedBlocks(selectedBlocks.filter(b => b !== block));
    } else if (selectedBlocks.length < 2) {
      setSelectedBlocks([...selectedBlocks, block]);
    }
  };

  const handleContinue = () => {
    setShowTable(false);
    setShowReservationDetails(true);
  };

  const handleConfirmReservation = () => {
    // Simulate reservation success and generate a reservation code
    setReservationSuccess(true);
    setReservationCode(`RES-${Math.floor(Math.random() * 10000)}`);
  };

  const renderTable = () => {
    const hours = ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
    const rooms = ['Sala 01', 'Sala 02', 'Sala 03', 'Sala 04', 'Sala 05', 'Sala 06', 'Sala 07', 'Sala 08', 'Sala 09', 'Sala 10', 'Sala 11'];

    return (
      <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid black' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black' }}>Espacio</th>
            {hours.map((hour, index) => (
              <th key={index} style={{ border: '1px solid black' }}>
                {hour}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rooms.map((room, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid black' }}>
                {room} <span role="img" aria-label="info">ℹ️</span>
              </td>
              {hours.map((hour, index) => (
                <td
                  key={index}
                  style={{ backgroundColor: getBlockColor(room, hour), cursor: 'pointer', border: '1px solid black', padding: '10px' }}
                  onClick={() => handleBlockClick(room, hour)}
                ></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const getBlockColor = (room, hour) => {
    const block = `${room}-${hour}`;
    if (selectedBlocks.includes(block)) return 'orange';
    if (reservedBlocks.includes(block)) return 'red';
    return 'green';
  };

  function generateReservedBlocks() {
    const hours = ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
    const rooms = ['Sala 01', 'Sala 02', 'Sala 03', 'Sala 04', 'Sala 05', 'Sala 06', 'Sala 07', 'Sala 08', 'Sala 09', 'Sala 10', 'Sala 11'];
    const reservedBlocks = [];

    rooms.forEach(room => {
      hours.forEach(hour => {
        if (Math.random() < 0.2) { // 20% chance to reserve a block
          reservedBlocks.push(`${room}-${hour}`);
        }
      });
    });

    return reservedBlocks;
  }

  const renderSummary = () => {
    return (
      <div style={{ marginTop: '20px', textAlign: 'left' }}>
        <h3>Resumen de la Reserva</h3>
        <p><strong>Localización:</strong> {location}</p>
        <p><strong>Categoría:</strong> {category}</p>
        {category === 'grupal' && <p><strong>Capacidad:</strong> {capacity}</p>}
        <p><strong>Accesible:</strong> {accessible ? 'Sí' : 'No'}</p>
        <p><strong>Power Available:</strong> {powerAvailable ? 'Sí' : 'No'}</p>
        <p><strong>Fecha:</strong> {date}</p>
        <p><strong>Bloques Seleccionados:</strong> {selectedBlocks.join(', ')}</p>
      </div>
    );
  };

  const renderReservationDetails = () => {
    return (
      <div style={{ textAlign: 'left', width: '50%' }}>
        <button onClick={() => setShowReservationDetails(false)} style={{ fontSize: '20px', padding: '10px 20px', backgroundColor: '#033655', color: 'white', borderRadius: '10px', marginBottom: '20px' }}>Nueva reserva</button>
        <h2>Detalles de la reserva</h2>
        <p>La reserva debe completarse antes de las 17:50 el {date}. Si no se completa, la reserva quedará disponible para otros usuarios.</p>
        <div style={{ marginBottom: '20px' }}>
          <h3>Información de la Reserva</h3>
          <p><strong>Localización:</strong> {location}</p>
          <p><strong>Categoría:</strong> {category}</p>
          {category === 'grupal' && <p><strong>Capacidad:</strong> {capacity}</p>}
          <p><strong>Accesible:</strong> {accessible ? 'Sí' : 'No'}</p>
          <p><strong>Power Available:</strong> {powerAvailable ? 'Sí' : 'No'}</p>
          <p><strong>Fecha:</strong> {date}</p>
          <p><strong>Bloques Seleccionados:</strong> {selectedBlocks.join(', ')}</p>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <h3>Términos y Condiciones</h3>
          <p>El servicio es para alumnos regulares de la universidad.</p>
          <p>Las reservas son diarias y se pueden hacer de 8:15 a 20:00.</p>
          <p>Se pueden reservar hasta 2 bloques de 2 horas al día.</p>
          <p>La sala debe ser usada dentro de 15 minutos de la hora reservada o será liberada.</p>
          <p>Es necesario retirar un kit con borrador, plumón y llave en el área de RRTT.</p>
          <p>Mantener un volumen moderado y está prohibido traer mesas y sillas adicionales.</p>
        </div>
        <button style={{ fontSize: '20px', padding: '10px 20px', backgroundColor: 'red', color: 'white', borderRadius: '10px' }}>Volver</button>
        <button onClick={handleConfirmReservation} style={{ fontSize: '20px', padding: '10px 20px', backgroundColor: '#033655', color: 'white', borderRadius: '10px', marginLeft: '10px' }}>Realizar reserva</button>
      </div>
    );
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '100vh', flexDirection: 'column', marginTop: '50px' }}>
      <h1>Reserva</h1>
      <p>Complete el formulario para realizar la reserva:</p>
      {!showTable && !showReservationDetails ? (
        <form onSubmit={handleSubmit} style={{ textAlign: 'center', width: '50%' }}>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
            <label style={{ fontSize: '20px', marginRight: '10px' }}>Localización:</label>
            <select value={location} onChange={handleLocationChange} style={{ fontSize: '20px', width: '100%' }}>
              <option value="">Seleccione una localización</option>
              <option value="Casa Central">Biblioteca Casa Central</option>
              <option value="San Joaquín">Biblioteca San Joaquín</option>
              <option value="Viña del mar">Biblioteca Sede Viña del Mar</option>
              <option value="Concepción">Biblioteca Sede Concepción</option>
              <option value="Vitacura">Biblioteca Sede Vitacura</option>
            </select>
          </div>
          <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
            <label style={{ fontSize: '20px', marginRight: '10px' }}>Categoría:</label>
            <select value={category} onChange={handleCategoryChange} style={{ fontSize: '20px', width: '100%' }}>
              <option value="">Seleccione una categoría</option>
              <option value="individual">Estudio Individual</option>
              <option value="grupal">Estudio Grupal</option>
            </select>
          </div>
          {category === 'grupal' && (
            <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
              <label style={{ fontSize: '20px', marginRight: '10px' }}>Capacidad:</label>
              <select value={capacity} onChange={handleCapacityChange} style={{ fontSize: '20px', width: '100%' }}>
                <option value="">Seleccione la capacidad</option>
                <option value="2-4">2-4 personas</option>
                <option value="5-6">5-6 personas</option>
              </select>
            </div>
          )}
          <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
            <label style={{ fontSize: '20px', marginRight: '10px' }}>
              <input
                type="checkbox"
                checked={accessible}
                onChange={handleAccessibleChange}
                style={{ transform: 'scale(1.5)', marginRight: '10px' }}
              />
              Accessible Seat/Space
            </label>
          </div>
          <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
            <label style={{ fontSize: '20px', marginRight: '10px' }}>
              <input
                type="checkbox"
                checked={powerAvailable}
                onChange={handlePowerAvailableChange}
                style={{ transform: 'scale(1.5)', marginRight: '10px' }}
              />
              Power Available
            </label>
          </div>
          <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
            <label style={{ fontSize: '20px', marginRight: '10px' }}>Fecha:</label>
            <input type="date" value={date} onChange={handleDateChange} style={{ fontSize: '20px', width: '100%' }} />
          </div>
          <button type="submit" style={{ fontSize: '20px', padding: '10px 20px', backgroundColor: '#033655', color: 'white', borderRadius: '10px' }}>Mostrar Disponibilidad</button>
        </form>
      ) : showTable ? (
        <div style={{ textAlign: 'center', width: '50%' }}>
          <h2>Tabla de Reservas</h2>
          {renderTable()}
          {selectedBlocks.length > 0 && renderSummary()}
          <button onClick={handleBack} style={{ fontSize: '20px', padding: '10px 20px', backgroundColor: '#033655', color: 'white', borderRadius: '10px', marginRight: '10px' }}>Volver</button>
          {selectedBlocks.length > 0 && <button onClick={handleContinue} style={{ fontSize: '20px', padding: '10px 20px', backgroundColor: '#033655', color: 'white', borderRadius: '10px' }}>Confirmar reserva</button>}
        </div>
      ) : (
        reservationSuccess ? (
          <div style={{ textAlign: 'center' }}>
            <h2>Reserva Satisfactoria</h2>
            <p>Código de Reserva: {reservationCode}</p>
            <button 
              onClick={() => setShowReservationDetails(false)} 
              style={{ fontSize: '1em', padding: '10px 20px', backgroundColor: '#033655', color: 'white' }}
            >
              Volver a la Búsqueda
            </button>
          </div>
        ) : (
          renderReservationDetails()
        )
      )}
    </div>
  );
};

export default Reserva_Salas;
