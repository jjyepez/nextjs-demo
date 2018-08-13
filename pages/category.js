import React, { Component } from 'react'

import Layout from '../components/containers/Layout'
import ToolbarComun from '../widgets/containers/ToolbarComun'

class Category extends Component {
    static async getInitialProps({ query }){
console.log( query )
        return query
    }
    render(){
        return (
            <Layout
                showBottomToolbar = { true }
            >
                <ToolbarComun 
                    hasBackButton = { true }
                    renderCenter = { () => this.props.idCat }
                />
            </Layout>
        )
    }
}

export default Category