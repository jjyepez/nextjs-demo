import React, { Component } from 'react'
import Link from 'next/link'

import {
    FiHome,
    FiHeart,
    FiPlusSquare,
    FiUser
} from 'react-icons/fi'

class BottomToolbar extends Component {
    render(){
        return (
            <div className = "BottomToolbar">
                <div className = "Button">
                    <FiHome size="1.25rem"/>
                    <label>Inicio</label>
                </div>
                <div className = "Button">
                    <FiHeart size="1.25rem"/>
                    <label>Favs</label>
                </div>
                <div className = "Button">
                    <Link href="upload"><a>
                        <FiPlusSquare size="1.25rem"/>
                        <label>New</label>
                    </a></Link>
                </div>
                <div className = "Button">
                    <FiUser size="1.25rem"/>
                    <label>Profile</label>
                </div>

                <style jsx>{`
                    .Button * {
                        display: block;
                    }
                    .Button label {
                        font-size: .75rem;
                    }
                    .BottomToolbar {
                        box-shadow: 0 0 5px rgba(0,0,0,.25);
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        text-align: center;
                        background-color: rgba(255,255,255,0.92);
                        position: fixed;
                        height: 56px;
                        bottom: 0;
                        width: 100vw;
                    }
                    .BottomToolbar > div {
                        flex: 1;
                    }
                `}</style>
            </div>
        )
    }
}

export default BottomToolbar