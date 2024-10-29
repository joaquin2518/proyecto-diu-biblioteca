import React from 'react';

const Prestamos = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [filter, setFilter] = React.useState('title');
  const [selectedBook, setSelectedBook] = React.useState(null);
  const [reservationDate, setReservationDate] = React.useState('');
  const [reservationSuccess, setReservationSuccess] = React.useState(false);
  const [reservationCode, setReservationCode] = React.useState('');
  const [books, setBooks] = React.useState([
    { title: 'Investigación en Inteligencia Artificial', author: 'John McCarthy', type: 'Libro', format: 'Físico', literaryForm: 'Investigación', available: true },
    { title: 'Teoría de la Computación', author: 'Michael Sipser', type: 'Libro', format: 'Físico', literaryForm: 'Investigación', available: false },
    { title: 'Redes Neuronales y Aprendizaje Profundo', author: 'Ian Goodfellow', type: 'Libro', format: 'Digital', literaryForm: 'Investigación', available: true },
    { title: 'Algoritmos: Diseño y Análisis', author: 'Thomas H. Cormen', type: 'Libro', format: 'Físico', literaryForm: 'Investigación', available: true },
    { title: 'Minería de Datos: Conceptos y Técnicas', author: 'Jiawei Han', type: 'Libro', format: 'Digital', literaryForm: 'Investigación', available: false },
    { title: 'Sistemas Operativos Modernos', author: 'Andrew S. Tanenbaum', type: 'Libro', format: 'Físico', literaryForm: 'Investigación', available: true },
    { title: 'Ciencia de Datos para Negocios', author: 'Foster Provost', type: 'Libro', format: 'Digital', literaryForm: 'Investigación', available: true },
    { title: 'Introducción a la Criptografía', author: 'Hans Delfs', type: 'Libro', format: 'Físico', literaryForm: 'Investigación', available: false },
    { title: 'Ingeniería de Software', author: 'Ian Sommerville', type: 'Libro', format: 'Físico', literaryForm: 'Investigación', available: true },
    { title: 'Aprendizaje Automático', author: 'Tom M. Mitchell', type: 'Libro', format: 'Digital', literaryForm: 'Investigación', available: true },
  ]);

  const filteredBooks = books.filter(book => {
    if (filter === 'available') {
      return book.available.toString().toLowerCase().includes(searchTerm.toLowerCase());
    }
    return book[filter].toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleReserve = (book) => {
    if (book.available) {
      setSelectedBook(book);
    }
  };

  const handleConfirmReservation = () => {
    const code = Math.random().toString(36).substring(2, 15);
    setReservationCode(code);
    setReservationSuccess(true);
    setBooks(prevBooks => prevBooks.map(b => 
      b.title === selectedBook.title ? { ...b, available: false } : b
    ));
  };

  const handleBackToSearch = () => {
    setSelectedBook(null);
    setReservationSuccess(false);
    setReservationDate('');
  };

  const getMaxReservationDate = () => {
    const today = new Date();
    const maxDate = new Date(today);
    maxDate.setDate(today.getDate() + 7);
    return maxDate.toISOString().split('T')[0];
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '2em' }}>Buscador de Libros</h1>
      {!selectedBook ? (
        <>
          <button 
            style={{ 
              backgroundColor: '#033655', 
              color: 'white', 
              borderRadius: '15px', 
              padding: '10px 20px', 
              fontSize: '1em', 
              marginBottom: '20px' 
            }}
          >
            Búsqueda Libros
          </button>
          <div style={{ marginBottom: '20px' }}>
            <input 
              type="text" 
              placeholder="Buscar..." 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} 
              style={{ fontSize: '1em', padding: '5px' }}
            />
            <select 
              value={filter} 
              onChange={(e) => setFilter(e.target.value)} 
              style={{ fontSize: '1em', padding: '5px', marginLeft: '10px' }}
            >
              <option value="title">Título</option>
              <option value="author">Autor</option>
              <option value="type">Tipo de Material</option>
              <option value="format">Formato</option>
              <option value="literaryForm">Forma Literaria</option>
              <option value="available">Disponibilidad</option>
            </select>
            <button 
              onClick={() => setSearchTerm('')} 
              style={{ fontSize: '1em', padding: '5px', marginLeft: '10px', backgroundColor: '#033655', color: 'white' }}
            >
              Limpiar
            </button>
          </div>
          <table style={{ width: '100%', fontSize: '1.2em', textAlign: 'left' }}>
            <thead>
              <tr>
                <th>Título</th>
                <th>Autor</th>
                <th>Tipo de Material</th>
                <th>Formato</th>
                <th>Forma Literaria</th>
                <th>Disponibilidad</th>
                <th>Reserva</th>
              </tr>
            </thead>
            <tbody>
              {filteredBooks.map((book, index) => (
                <tr key={index} style={{ backgroundColor: index % 2 === 0 ? 'white' : 'lightgrey' }}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.type}</td>
                  <td>{book.format}</td>
                  <td>{book.literaryForm}</td>
                  <td>{book.available ? 'Disponible' : 'No Disponible'}</td>
                  <td>
                    <button 
                      style={{ backgroundColor: book.available ? '#033655' : 'grey', color: 'white' }} 
                      disabled={!book.available}
                      onClick={() => handleReserve(book)}
                    >
                      Reservar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <div style={{ textAlign: 'center' }}>
          {reservationSuccess ? (
            <div>
              <h2>Reserva Satisfactoria</h2>
              <p>Código de Reserva: {reservationCode}</p>
              <button 
                onClick={handleBackToSearch} 
                style={{ fontSize: '1em', padding: '10px 20px', backgroundColor: '#033655', color: 'white' }}
              >
                Volver a la Búsqueda
              </button>
            </div>
          ) : (
            <div>
              <h2>{selectedBook.title}</h2>
              <p>Autor: {selectedBook.author}</p>
              <p>Tipo de Material: {selectedBook.type}</p>
              <p>Formato: {selectedBook.format}</p>
              <p>Forma Literaria: {selectedBook.literaryForm}</p>
              <p>Disponibilidad: {selectedBook.available ? 'Disponible' : 'No Disponible'}</p>
              <input 
                type="date" 
                value={reservationDate} 
                onChange={(e) => setReservationDate(e.target.value)} 
                style={{ fontSize: '1em', padding: '5px', margin: '10px 0' }}
                max={getMaxReservationDate()}
              />
              <p>Fecha de entrega máxima: {getMaxReservationDate()}</p>
              <button 
                onClick={handleConfirmReservation} 
                style={{ fontSize: '1em', padding: '10px 20px', backgroundColor: '#033655', color: 'white' }}
              >
                Confirmar Reserva
              </button>
              <button 
                onClick={handleBackToSearch} 
                style={{ fontSize: '1em', padding: '10px 20px', backgroundColor: '#033655', color: 'white', marginLeft: '10px' }}
              >
                Volver
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Prestamos;