import React, { Component } from 'react'

// --- import Link from 'next/link'
import { Link } from '../../routes'

import {
    FiArrowLeft, FiSettings
} from 'react-icons/fi'

class ToolbarComun extends Component {
    contextMenu = () => {

    }
    render(){
        const {
            hasBackButton,
            renderCenter,
            renderRight
        } = this.props
        const iconSize = '1.5rem'
        return (
            <header>
                <div className = "left">
                    { hasBackButton ? (
                        <Link route="/index"><a>
                            <FiArrowLeft size = { iconSize }/>
                        </a></Link>
                    ) : (
                        (false && <div onClick = { this.contextMenu() } className = "avatar"></div>) ||
                        <div onClick = { this.contextMenu() } className = "logo"></div>
                    )}
                </div>
                <div className = "center">
                    { renderCenter() }
                </div>
                <div className = "right">
                    { renderRight && renderRight() }
                    <Link route="settings"><a>
                        <FiSettings size = { iconSize }/>
                    </a></Link>
                </div>

                <style jsx>{`
                    .avatar {
                        width: 2.5rem;
                        height: 2.5rem;
                        border-radius: 100%;
                        background-color: #ddd;
                    }
                    .logo {
                        width: 2.5rem;
                        height: 2.5rem;
                        border-radius: 100%;
                        background: url(/static/icon.png);
                        background-size: cover;
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
                        box-shadow: 0 0 5px rgba(0,0,0,.25);
                    }
                `}</style>
            </header>
        )
    }
}

export default ToolbarComun