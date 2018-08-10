import React, { Component } from 'react'

import Head from 'next/head'

class Layout extends Component {
    render(){
        return (
            <div className = "page">
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </Head>

                { this.props.children }

                <style jsx>{`
                    :global(body){
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        margin: 0;
                        font-family: system-ui;
                        display: flex;
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