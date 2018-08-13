import React, { Component } from 'react'

import Layout from '../components/containers/Layout'
import ToolbarComun from '../widgets/containers/ToolbarComun'

class Favs extends Component {
    render(){
        return (
            <Layout
                showBottomToolbar = { true }
            >
                <ToolbarComun 
                    hasBackButton = { true }
                    renderCenter = { () => 'Favs' }
                />
            </Layout>
        )
    }
}

export default Favs