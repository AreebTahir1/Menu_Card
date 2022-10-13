import React from 'react'

const MenuCard = ({menuItems}) => {
    return (<div className='card-container'>
    {menuItems.map(curElem =>{
        const {id, title, category, price, img, desc} = curElem
        return(
            <div className='card' key={id}>
                <h2>{title}</h2>
                <h5>{category}</h5>
                <img src={img} alt={title} className='card-img'/>
                <p>Rs: <b>{price}</b></p>
                <p>{desc}</p>
                <button className='btn-order'><b>Order</b></button>

            </div>
        )

    })  
}</div>
)}

export default MenuCard
