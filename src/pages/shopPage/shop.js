import React from 'react'
import SHOP_DATA from './shop_data'
import CollectionPreview from '../../components/collection-preview/collection_preview'
class ShopPage extends React.Component {
    constructor() {
        super();
        this.state = {collections : SHOP_DATA}
    }

    render() {
        const { collections } = this.state;
        return <div>
            {
                collections.map(({id, ...otherProps}) => {
                    return <CollectionPreview key={id} {...otherProps}/>
                })
            }
        </div>
    }
}

export default ShopPage;