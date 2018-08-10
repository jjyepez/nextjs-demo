import React, { Component } from 'react'
import Link from 'next/link'

class Preview extends Component {
    static async getInitialProps({ query }){
        const img = query.img
        return { img }
    }
    render(){
        return (
            <div>
                <Link href="/"><a><img src={ this.props.img } /></a></Link>
                <style jsx>{`
                    :global(body){
                        margin:0;
                    }
                    img{
                        width: 100vw;
                    }
                `}</style>
            </div>
        )
    }
 }

export default Preview