import React, { Component } from 'react'

export default class extends Component {
    render() {
        return (
            <div>
                <img src='/static/logo.svg' alt='Platzi memes'/>
                <h1>Hola Platzi!</h1>
                <p>lorem ipsun</p>
                <style jsx>{`
                    :global(body){
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        margin: 0;
                        font-family: system-ui;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    img {
                        height: 30px;
                    }
                    h1 {
                        color: red; 
                    }
                    p {
                        color: green; 
                    }
                `}</style>
            </div>
        )
    }
}