import React, { Component } from 'react'

class About extends Component {
    render(){
        return (
            <div>
                <div><h1>About</h1></div>
                <div><img src = "/static/yo.jpg"/></div>
                <div><button>Acceder</button></div>

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