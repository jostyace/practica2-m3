import './Item.css';

export const Item = ({ icono, titulo, id, color, contenido }) => {
  const itemStyle = {
    borderTop: `3px solid ${color}`
  };
  return (
    <li className="Item" id={id} style={itemStyle}>
      <h1 className='Titulo'>{titulo}</h1>
      <p className='Contenido'>{contenido}</p>
      <div className='ImgContainer'>
        <img src={icono} alt={titulo}  />
      </div>
    </li>
  );
};