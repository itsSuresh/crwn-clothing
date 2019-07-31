import React from 'react';
import './collectionitems.style.scss';

const CollectionsItems = ({imageUrl,name,price}) => (
    <div className="collection-item">
        <div className="image" style={{background:`url(${imageUrl})`,backgroundRepeat: 'no-repeat',backgroundSize:'cover'}}></div>
        <div className="collection-footer">
            <div className="name">{name}</div>
            <div className="price">{price}</div>
        </div>
    </div>
  
);

export default CollectionsItems;