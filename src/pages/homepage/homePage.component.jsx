import React from 'react'
import './homepage.styles.scss'
import './../../components/menu-item/menu-item.component'
import Directory from '../../components/directory-menu/directory-item.component'


const HomePage = () => (
    <div className="homepage">
        <Directory />
    </div>
)

export default HomePage;