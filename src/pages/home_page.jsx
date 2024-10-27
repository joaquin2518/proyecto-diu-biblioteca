import React from 'react'
import repositoriodigital from '../assets/repositoriodigital.png'
import bibliotecadigital from '../assets/bibliotecadigital.png'
import basededatos from '../assets/basededatos.png'
import guiastematicas from '../assets/guiastematicas.png'
export const HomePage = () => {
  const buttonStyle = {
    fontSize: '31.25px', // 25px * 1.25
    padding: '6.25px 12.5px', // 5px * 1.25 and 10px * 1.25
    backgroundColor: '#033655',
    color: 'white',
    marginRight: '12.5px', // 10px * 1.25
    borderRadius: '12.5px' // 10px * 1.25
  };

  const imageStyle = {
    width: '100%',
    maxWidth: '181.25px' // 145px * 1.25
  };

  return (
    <>
      <button style={buttonStyle}>Prestramo</button>
      <button style={{ ...buttonStyle, marginRight: '0' }}>Reserva salas</button>
      <div style={{ display: 'flex', marginTop: '25px' }}> {/* 20px * 1.25 */}
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
    </>
  )
}

export default HomePage
