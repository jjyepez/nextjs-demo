import React, { Component } from 'react'

class Categories extends Component {
    state = {
        categories: [ 
            {label:'fun', color:'#b149fc'},
            {label:'live', color:'#78c900'},
            {label:'reactions', color:'#fb9401'},
            {label:'misc', color:'#fe2b72'},
            {label:'wtf', color:'#00d8fc'},
            {label:'gestures', color:'#fcd402'},
            {label:'celebrity', color:'#f67062'},
            {label:'lol', color:'#4daaff'},
        ]
    }
    scrollRight = () => {
        this.scroller.scrollLeft += 60
    }
    scrollLeft = () => {
        this.scroller.scrollLeft -= 60
    }
    render(){
        const { categories } = this.state
        return (
            <div className = "CategoryList">
                <button onClick = { this.scrollLeft }>&lt;</button>
                <div className="scroller" ref = { el => this.scroller = el }>
                    { categories.map( (el, i)  => {
                        return (
                            <div
                                key = { i }
                                className = "CategoryButton"
                                style= {{
                                    backgroundColor: el.color,
                                    boxShadow: `0 3px 20px -5px ${el.color}`
                                }}
                            >{ el.label }</div>
                        )
                    })}
                </div>
                <button onClick = { this.scrollRight }>&gt;</button>
                <style jsx>{`
                    button {
                        display: none; /* por ahora */
                    }
                    .scroller {
                        width: 100%;
                        overflow: auto;
                        display: flex;
                    }
                    .CategoryList {
                        margin: .5rem 0;
                        max-width: 100vw;
                        display: flex;
                    }
                    .CategoryButton:first-of-type {
                        margin-left: .5rem;
                    }
                    .CategoryButton:last-of-type {
                        margin-right: .5rem;
                    }
                    .CategoryButton {
                        color: #fff;
                        font-weight: bold;
                        border-radius: 2rem;
                        display: grid;
                        grid-template-columns: repeat(auto-fill, minmax(auto, 1fr));
                        text-align: center;
                        margin: .25rem .25rem .75rem .25rem;
                        background-color: #ddd;
                        padding: .35rem 1rem .5rem 1rem;
                    }
                `}
                </style>
            </div>
        )
    }
}

export default Categories