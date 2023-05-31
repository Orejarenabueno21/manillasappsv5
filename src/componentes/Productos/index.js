import React from 'react'
import pulera from '../../1310001173.jpg';

export const ProductosLista = () => {
  return (
    <>
    <h1 className="tittle">PRODUCTOS</h1>
    <div className='productos'>
     
     <a href="#">
       <div className="productos">
        <img src={pulera} alt="pulser" />
      </div>
    </a> 
      <div className="productos__footer">
        <h1>Title</h1>
        <p>Categoria</p>
        <p className="price">$320</p>
      </div>
        <div className="buttom">
          <button className="btn">
            Añadir al carrito
          </button>
          <div>
            <a href="#" className="btn">Vista</a>
          </div>
        </div>
    </div>
    </>
  )
}

export default ProductosLista