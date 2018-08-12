import React, { Component } from 'react'

class Categories extends Component {
    state = {
        categories: [ 'fun','reactions','gestures','misc','live' ]
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
                            <div className = "CategoryButton" key = { i }>{ el }</div>
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
                        
                    }
                    .CategoryButton {
                        border-radius: 2rem;
                        display: grid;
                        grid-template-columns: repeat(auto-fill, minmax(auto, 1fr));
                        text-align: center;
                        margin: .25rem;
                        background-color: #ddd;
                        padding: .35rem 1rem;
                    }
                `}
                </style>
            </div>
        )
    }
}

export default Categories