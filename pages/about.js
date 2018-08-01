import React, { Component } from 'react'
import 'isomorphic-fetch'

class About extends Component {
    static async getInitialProps(){
        const url = `https://noesishosting.com/sw/loremdata/?a=rs&p=nombre:10`
        const rsp = await fetch( url ).catch( e => console.log(e) )
        const data = await rsp.json().catch( e => console.log(e) )
        return { data: data }
    }
    render(){
console.log( 1, this.props )
        return (
            <div>
                <div><h1>About</h1></div>
                <div><img src = "/static/yo.jpg"/></div>
                <div><button>{ this.props.buttonText }</button></div>

                <style jsx>{`
                    :global(body){
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        margin: 0;
                        font-family: system-ui;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                    div:first-child {
                        height: 50vh;
                        display: flex;
                        flex-direction: column;
                    }
                    div > div {
                        display: flex;
                        flex: 1;
                        justify-content: center;
                        align-items: center;
                    }
                    img {
                        border-radius: 100%;
                        width: 20vw;
                        height: 20vw;
                        margin: 1rem;
                    }
                    button {
                        background-color: teal;
                        outline: none;
                        color: #fff;
                        border: 0;
                        padding: .5rem 1rem;
                        border-radius: 1rem;
                    }
                `}</style>
            </div>
        )
    }
}

export default About