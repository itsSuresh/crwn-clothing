import React from 'react';
import './menuitem.style.scss';

const MenuItem = ({title,imageurl,size}) =>(
    <div className={`menu-item ${size}`} >
        <div className="background-image" style={{background:`url(${imageurl})`}}>

        </div>
        <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle"> shop now</span>
        </div>
    </div>
);

export default MenuItem;