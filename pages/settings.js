import React, { Component } from 'react'

import Layout from '../components/containers/Layout'
import ToolbarComun from '../widgets/containers/ToolbarComun'

class Settings extends Component {
    render(){
        return (
            <Layout
                showBottomToolbar = { false }
            >
                <ToolbarComun 
                    hasBackButton = { true }
                    renderCenter = { () => 'Settings' }
                />
                    123
            </Layout>
        )
    }
}

export default Settings