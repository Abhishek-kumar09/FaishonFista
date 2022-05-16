import React from 'react'
import MenuItem from '../menu-item/menu-item.component'
import './directory-item.styles.scss'

class Directory extends React.Component {
  constructor() {
    super()
    this.state = {
      section: [{
        title: 'Intialised Event Server',
        imageUrl: '/laptop.jpg',
        id: 1,
        linkUrl: 'shop/hats'
      },
      {
        title: 'Opening Brave Browser',
        imageUrl: 'pic2.jpg',
        id: 2,
        linkUrl: 'shop/jackets'
      },
      {
        title: 'Opening Opera Mini',
        imageUrl: 'pic3.jpg',
        id: 3,
        linkUrl: 'shop/sneakers'
      },
      {
        title: 'Going Incognito',
        imageUrl: 'pic4.jpg',
        size: 'large',
        id: 4,
        linkUrl: 'shop/womens'
      },
      {
        title: 'Watchiing Milf',
        imageUrl: 'pic5.jpg',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens'
      }]
    }
  }

  render() {
    return <div className="directory-menu">
      {
        this.state.section.map(({ title, imageUrl, id, size }) => {
          return <MenuItem
            key={id}
            title={title}
            imageUrl={imageUrl}
            size={size} />
        })
      }
    </div>
  }
}

export default Directory;
