import React from 'react'
import { useNavigate } from 'react-router-dom'
import repositoriodigital from '../assets/repositoriodigital.png'
import bibliotecadigital from '../assets/bibliotecadigital.png'
import basededatos from '../assets/basededatos.png'
import guiastematicas from '../assets/guiastematicas.png'
import horario from '../assets/horario.png'

export const HomePage = () => {
  const navigate = useNavigate();

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

  const handlePrestamoClick = () => {
    navigate('/prestamos'); // Redirige a la página de préstamo
  };

  const handleReservaSalasClick = () => {
    navigate('/reserva_salas'); // Redirige a la página de reserva de salas
  };

  return (
    <>
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
      </div>
    </>
  )
}
export default HomePage