import React, { Component } from 'react'

import Head from 'next/head'

class Layout extends Component {
    render(){
        return (
            <div className = "page">
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link href="/static/manifest.json" rel="manifest"/>
                    <link rel="shortcut icon" href="/static/icon.png"/>
                    <meta name="theme-color" content="#ffffff"/>
                </Head>

                { this.props.children }

                <style jsx>{`
                    :global(body){
                        overflow: hiddden;
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        margin: 0;
                        font-family: system-ui;
                        display: flex;
                        color: #555;
                    }
                    :global(h2){
                        align-self: center;
                        margin: 1rem 0;
                        font-size: 1.25rem;
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