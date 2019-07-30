import React from 'react';
import './menuitem.style.scss';
import {withRouter} from 'react-router-dom';

const MenuItem = ({title,imageUrl,size,linkUrl,match,history}) =>(
    <div className={`menu-item ${size}`} >
        <div className="background-image" style={{background:`url(${imageUrl})`}}
        onClick={()=>history.push(`${match.url}${linkUrl}`)}>
     
        </div>
        <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle"> shop now</span>
             
        </div>
    </div>
);

export default withRouter(MenuItem);