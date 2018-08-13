import React, { Component } from 'react'

import BottomToolbar from '../../widgets/containers/BottomToolbar';
import Head from 'next/head'

class Layout extends Component {
    render(){
        const { showBottomToolbar } = this.props
        return (
            <div className = "page">
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link href="/static/manifest.json" rel="manifest"/>
                    <link rel="shortcut icon" href="/static/icon.png"/>
                    <meta name="theme-color" content="#ffffff"/>
                </Head>

                { this.props.children }

                { showBottomToolbar && <BottomToolbar/> }

                <style jsx>{`
                    :global(body){
                        overflow: hiddden;
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        margin: 0;
                        font-family: system-ui;
                        display: flex;
                        color: #333;
                        background-color: rgba(240,242,245,1);
                    }
                    :global(svg[viewbox="0 0 24 24"]){
                        stroke-width: .075rem;
                    }
                    :global(a){
                        text-decoration: none;
                        color: inherit;
                    }
                    :global(h2){
                        align-self: flex-start;
                        margin-left: .5rem;
                        font-size: 1.5rem;
                    }
                    :global(h2:first-of-type){
                        
                    }
                    .page{
                        margin-top: 56px;
                        flex: 1;
                        width:100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                    }
                `}</style>
            </div>
        )
    }
}

export default Layout