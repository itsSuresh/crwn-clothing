import React from 'react';
import SHOP_DATA from './shopdata';
import CollectionsPreview from '../../components/collectionspreview/collectionspreview.component';

class ShopPage extends React.Component {
    constructor(){
        super();

        this.state ={
            collections :SHOP_DATA
        }
    }
    render(){
        return(
            <div> 
                {this.state.collections.map(({id,...otherCollectionProps}) => 
                        <CollectionsPreview key={id} {...otherCollectionProps}/>
                )}
            </div>
        )
    }
}

export default ShopPage;