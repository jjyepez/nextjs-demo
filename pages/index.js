import React, { Component } from 'react'
import 'isomorphic-fetch'
import Link from 'next/link'

export default class extends Component {
    static async getInitialProps(){
        const url = `https://noesishosting.com/sw/loremdata/?a=rs&p=nombre,foto,estatus:10`
        const rsp = await fetch( url ).catch( e => console.log(e) )
        const data = await rsp.json().catch( e => console.log(e) )
        return { data:data.rs }
    }
    render() {
        const { data } = this.props
        return (
            <div className="page">
                <header>App</header>
                <div className = "contenedor">
                    { data.map( el => (
                        <Link href={ `/preview?img=${el.foto}` }>
                            <a><img key={ Math.random() } src = { el.foto } /></a>
                        </Link>
                    ))}
                </div>
                <style jsx>{`
                    :global(body){
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        margin: 0;
                        font-family: system-ui;
                        display: flex;
                    }
                    .contenedor{
                        display: grid;
                        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
                        grid-gap: 10px;
                    }
                    img {
                        width:100%;
                    }
                    .page{
                        margin-top: 56px;
                        flex: 1;
                        width:100vw;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                    }
                    header {
                        top: 0; left: 0;
                        position: fixed;
                        height: 56px;
                        display: flex;
                        flex: 1;
                        width: 100vw;
                        color: #fff;
                        justify-content: center;
                        align-items: center;
                        background-color: teal;
                    }
                `}</style>
            </div>
        )
    }
}