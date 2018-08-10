import React, { Component } from 'react'

class SearchForm extends Component {
    render(){
        return (
            <div className="SearchForm">
                <form>
                    <input type="search" placeholder="Buscar"/>
                </form>

                <style jsx>{`
                    .SearchForm {
                        width: 100%;
                    }
                    input {
                        outline: none;
                        border: 0;
                        background-color: #eee;
                        border-radius: 2rem;
                        width: 100%;
                        padding: .5rem 1rem;
                        font-size: 1.1rem;

                    }
                `}</style>
            </div>
        )
    }
}

export default SearchForm