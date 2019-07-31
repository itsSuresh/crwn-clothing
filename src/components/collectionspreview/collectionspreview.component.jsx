import React from 'react';
import './collectionspreview.style.scss';
import CollectionsItems from '../collectionitems/collectionsitems.component';

const CollectionsPreview = ({title,items}) =>{
    return(
        <div className="collections-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items.filter((item,idx)=>idx<4)
                .map(({id,...otherCollectionItems})=>
                   <CollectionsItems key={id} {...otherCollectionItems}/>
                )}
            </div>
        </div>
    );
}

export default CollectionsPreview;