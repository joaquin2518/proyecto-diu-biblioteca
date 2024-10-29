import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import repositoriodigital from '../assets/repositoriodigital.png';
import bibliotecadigital from '../assets/bibliotecadigital.png';
import basededatos from '../assets/basededatos.png';
import guiastematicas from '../assets/guiastematicas.png';
import horario from '../assets/horario.png';

export const HomePage = () => {
  const navigate = useNavigate();
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  const news = [
    {
      tags: '#Horarios #FiestasPatrias',
      content: 'El día 11 de septiembre de 2024, debido a la suspensión de actividades académicas y administrativas, Biblioteca USM cerrará a las 15:45 hrs. Del 16 al 22 de septiembre permanecerá cerrado. Dudas o consultas aquí: ',
      link: 'https://biblioteca.usm.cl/enlinea'
    },
    {
      tags: '#NuevoHorario',
      content: 'A partir del 1 de octubre de 2024, el horario de la biblioteca será de 8:00 a 20:00 hrs. Para más información, visite: ',
      link: 'https://biblioteca.usm.cl/horarios'
    },
    {
      tags: '#EventoEspecial',
      content: 'El 5 de noviembre de 2024, se realizará un evento especial en la biblioteca a las 18:00 hrs. Más detalles en: ',
      link: 'https://biblioteca.usm.cl/eventos'
    }
  ];

  const buttonStyle = {
    fontSize: '31.25px', // 25px * 1.25
    padding: '6.25px 12.5px', // 5px * 1.25 and 10px * 1.25
    backgroundColor: '#033655',
    color: 'white',
    marginRight: '12.5px', // 10px * 1.25
    borderRadius: '12.5px', // 10px * 1.25
    width: '300px', // Set a consistent width for buttons
    textAlign: 'center'
  };

  const imageStyle = {
    width: '100%',
    maxWidth: '295px' // Set a consistent max width for all images
  };

  const horarioStyle = {
    ...imageStyle,
    maxWidth: '400px', // Set a consistent max width for all images
    marginLeft: 'auto',
    marginRight: '2px' 
  };

  const newsBoxStyle = {
    backgroundColor: '#acbea3',
    padding: '20px',
    borderRadius: '12.5px',
    marginTop: '25px',
    maxWidth: '600px',
    marginLeft: '-10px', // Move the news box a bit to the left
    textAlign: 'left',
    position: 'relative' // Add relative positioning
  };

  const newsTextStyle = {
    fontSize: '18px',
    color: '#033655',
    backgroundColor: 'white', // Set background color to white
    padding: '10px',
    borderRadius: '8px'
  };

  const newsDateStyle = {
    textAlign: 'center',
    marginBottom: '10px'
  };

  const arrowButtonStyle = {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'white', // Set background color to white
    border: '3px solid #033655', // Add a border
    borderRadius: '50%', // Make it circular
    width: '20px', // Set width
    height: '20px', // Set height
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px', // Reduced font size
    cursor: 'pointer'
  };

  const footerStyle = {
    backgroundColor: '#033655',
    color: 'white',
    padding: '5px', // Reduced padding to make the footer thinner
    textAlign: 'center',
    marginTop: '50px',
    width: '100%', // Ensure the footer spans the full width
    position: 'fixed', // Fix the footer at the bottom
    bottom: '0', // Align it to the bottom
    left: '0', // Align it to the left
    right: '0' // Align it to the right
  };

  const containerStyle = {
    overflowY: 'auto',
    height: '100vh',
    padding: '20px'
  };

  const handlePrestamoClick = () => {
    navigate('/prestamos'); // Redirige a la página de préstamo
  };

  const handleReservaSalasClick = () => {
    navigate('/reserva_salas'); // Redirige a la página de reserva de salas
  };

  const handlePrevNews = () => {
    setCurrentNewsIndex((prevIndex) => (prevIndex === 0 ? news.length - 1 : prevIndex - 1));
  };

  const handleNextNews = () => {
    setCurrentNewsIndex((prevIndex) => (prevIndex === news.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div style={containerStyle}>
      <div style={{ marginLeft: '250px', display: 'flex', alignItems: 'center' }}> {/* Move everything to the right */}
        <button style={buttonStyle} onClick={handlePrestamoClick}>Prestamo</button>
        <button style={{ ...buttonStyle, marginRight: '0' }} onClick={handleReservaSalasClick}>Reserva salas</button>
        <img src={horario} alt="Horario" style={horarioStyle} /> {/* Add horario image */}
      </div>
      <div style={{ marginLeft: '250px' , marginTop: '-35px'}}>
        <div style={{ display: 'flex', marginTop: '12.5px' }}> {/* 10px * 1.25 */}
          <a href="#" style={{ marginRight: '25px' }}>
            <img src={repositoriodigital} alt="Repositorio Digital" style={imageStyle} />
          </a>
          <a href="#">
            <img src={basededatos} alt="Base de Datos" style={imageStyle} />
          </a>
        </div>
        <div style={{ marginTop: '25px' }}> {/* 20px * 1.25 */}
          <a href="#" style={{ marginRight: '25px' }}>
            <img src={bibliotecadigital} alt="Biblioteca Digital" style={imageStyle} />
          </a>
          <a href="#">
            <img src={guiastematicas} alt="Guias Tematicas" style={imageStyle} />
          </a>
        </div>
        <div style={newsBoxStyle}>
          <button style={{ ...arrowButtonStyle, top: '0px' }} onClick={handlePrevNews}>&uarr;</button>
          <div style={newsTextStyle}>
            <div style={newsDateStyle}>
              <p>{news[currentNewsIndex].tags}</p>
              <p>{news[currentNewsIndex].content}<a href={news[currentNewsIndex].link}>{news[currentNewsIndex].link}</a></p>
            </div>
          </div>
          <button style={{ ...arrowButtonStyle, bottom: '0px' }} onClick={handleNextNews}>&darr;</button>
        </div>
      </div>
      <footer style={footerStyle}>
        <p>Contacta con nosotros en nuestras redes sociales:</p>
        <p>
          <a href="https://facebook.com/bibliotecaUSM" style={{ color: 'white', marginRight: '10px' }}>Facebook</a>
          <a href="https://twitter.com/bibliotecaUSM" style={{ color: 'white', marginRight: '10px' }}>Twitter</a>
          <a href="https://instagram.com/bibliotecaUSM" style={{ color: 'white' }}>Instagram</a>
        </p>
      </footer>
    </div>
  );
};

export default HomePage;