import React from 'react'
import './collection_preview.styles.scss'
import CollectionItem from '../collection-item/collection_item.component'

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <div className='title'><h1>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items.filter((item, idx) => idx < 4).map(({id, ...otherItemProps}) => {
                        return <CollectionItem key={id} {...otherItemProps}/>
                    })
                }
            </div>
        </div>

    </div>
)

export default CollectionPreview;