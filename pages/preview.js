import React, { Component } from 'react'

class Preview extends Component {
    static async getInitialProps({ query }){
        const img = query.img
        return { img }
    }
    render(){
        return (
            <div>
                <img src={ this.props.img } />
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