import React, { Component } from 'react'

import Layout from '../components/containers/Layout'
import ToolbarComun from '../widgets/containers/ToolbarComun'

class Profile extends Component {
    render(){
        return (
            <Layout
                showBottomToolbar = { true }
            >
                <ToolbarComun 
                    hasBackButton = { true }
                    renderCenter = { () => 'Profile' }
                />
            </Layout>
        )
    }
}

export default Profile