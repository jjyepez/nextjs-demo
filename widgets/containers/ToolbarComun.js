import React, { Component } from 'react'

class ToolbarComun extends Component {
    render(){
        return (
            <header>
                <div className = "left">
                    <div className = "avatar"></div>
                </div>
                <div className = "center">
                    { this.props.center() }
                </div>
                <div className = "right">
                    <button>Subir</button>
                    <button>Login</button>
                </div>

                <style jsx>{`
                    .avatar {
                        width: 2.5rem;
                        height: 2.5rem;
                        border-radius: 100%;
                        background-color: #ddd;
                    }
                    button {
                        font-size: 1rem;
                        cursor: pointer;
                        border-radius: 2rem;
                        background: #ddd;
                        border: 0;
                        outline: none;
                        padding: .5rem 1rem;
                        margin: 0 .25rem;
                    }
                    button:hover, button:active {
                        background-color: #ccc;
                    }
                    .left {
                        padding: 0 .5rem 0 .75rem;
                    }
                    .center {
                        padding: 0 1rem;
                        flex:1;
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                    }
                    .right {
                        padding: 0 .75rem 0 .5rem;
                    }
                    header {
                        top: 0; left: 0;
                        position: fixed;
                        height: 56px;
                        display: flex;
                        flex: 1;
                        width: 100vw;
                        color: #333;
                        justify-content: center;
                        align-items: center;
                        background-color: #fff;
                        box-shadow: 0 1px 2px rgba(0,0,0,.25);
                    }
                `}</style>
            </header>
        )
    }
}

export default ToolbarComun