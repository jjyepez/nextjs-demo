import React, { Component } from 'react'
import 'isomorphic-fetch'
import Link from 'next/link'
import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyDedcTaetRlOUmLbp9aVVohcPYb_5xC3cM",
    authDomain: "plazti-memes.firebaseapp.com",
    databaseURL: "https://plazti-memes.firebaseio.com",
    projectId: "plazti-memes",
    storageBucket: "plazti-memes.appspot.com",
    messagingSenderId: "537088006274"
};
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

export default class extends Component {
    static async getInitialProps(){
        //const url = `https://noesishosting.com/sw/loremdata/?a=rs&p=nombre,foto,estatus:30`
        //const rsp = await fetch( url ).catch( e => console.log(e) )
        var data; // = await rsp.json().catch( e => console.log(e) )

        const bdRef = firebase.database().ref('uploads');
        const x = await bdRef.on('value', async dataC => {
            data = await dataC.val();
        })

        return { data }
    }
    render() {
        const { data } = this.props
        const dataKeys = Object.keys( data )
        return (
            <div className="page">
                <header>App</header>
                <div className = "contenedor">
                    { dataKeys.map( i => {
                        const el = data[i]
                        return (
                            <Link key = {i} href = { el.uri }><a><img src={ el.uri }/></a></Link>
                        )
                    }) }
                </div>
                <style jsx>{`
                    :global(body){
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        margin: 0;
                        font-family: system-ui;
                        display: flex;
                    }
                    .contenedor{
                        display: grid;
                        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
                        grid-gap: 5px;
                        padding: 5px;
                    }
                    img {
                        width:100%;
                        height: 160px;
                        object-fit: cover;
                    }
                    .page{
                        margin-top: 56px;
                        flex: 1;
                        width:100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                    }
                    header {
                        top: 0; left: 0;
                        position: fixed;
                        height: 56px;
                        display: flex;
                        flex: 1;
                        width: 100vw;
                        color: #fff;
                        justify-content: center;
                        align-items: center;
                        background-color: teal;
                    }
                `}</style>
            </div>
        )
    }
}