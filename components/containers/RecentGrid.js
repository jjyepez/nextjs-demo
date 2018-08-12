import React, { Component } from 'react'

import Link from 'next/link'

class RecentGrid extends Component {
    render(){
        const { data } = this.props
        const dataKeys = data ? Object.keys( data ) : []
        return (
            <div className = "RecentGrid">
                <h2>Búsquedas recientes</h2>
                <div className = "scroller">
                    { dataKeys.map( i => {
                        const el = data[i]
                        return (
                            <Link key = {i} href = { el.uri }><a><img src={ el.uri }/></a></Link>
                        )
                    }) }
                </div>
                <style jsx>{`
                    .RecentGrid {
                        width: 100vw;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                    .scroller {
                        width: 100%;
                        overflow: auto;
                        display: flex;
                    }
                    img {
                        width:200px;
                        height: 120px;
                        object-fit: cover;
                        border-radius: .5rem;
                        display: grid;
                        grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
                        text-align: center;
                        margin: 0 .5rem;
                        background-color: #ddd;
                    }
                 `}</style>
            </div>
        )
    }
}

export default RecentGrid