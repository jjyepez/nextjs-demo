import React, { Component } from 'react'

import Link from 'next/link'

class RecentGrid extends Component {
    render(){
        const { data } = this.props
        const dataKeys = data ? Object.keys( data ) : []
        return (
            <div className = "RecentGrid">
                <h2>Recent</h2>
                <div className = "contenedor">
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
                    h2 {
                        align-self: center;
                    }
                    .contenedor{
                        display: grid;
                        justify-content: center;
                        align-items: center;
                        grid-template-columns: repeat(auto-fill, 260px);
                        grid-gap:1rem;
                        padding: 0 1rem;
                        width: 100%;
                    }
                    img {
                        width:100%;
                        height: 160px;
                        object-fit: cover;
                        border-radius: .5rem;
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

export default RecentGrid