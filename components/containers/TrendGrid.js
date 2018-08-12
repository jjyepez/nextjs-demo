import React, { Component } from 'react'

import Link from 'next/link'

class TrendGrid extends Component {
    render(){
        const { data } = this.props
        const dataKeys = data ? Object.keys( data ) : []
        return (
            <div className = "TrendGrid">
                <h2>Tendencia</h2>
                <div className = "contenedor">
                    { dataKeys.map( i => {
                        const el = data[i]
                        return (
                            <Link key = {i} href = { el.uri }><a><img src={ el.uri }/></a></Link>
                        )
                    }) }
                </div>
                <style jsx>{`
                    .TrendGrid {
                        width: 100vw;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                    .contenedor{
                        width: Calc(100% - 1rem);
                        display: grid;
                        justify-content: center;
                        align-items: center;
                        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
                        grid-gap:1rem;
                        padding: 0 .5rem;
                        margin-bottom: 60px;
                    }
                    img {
                        width:100%;
                        height: auto;
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

export default TrendGrid