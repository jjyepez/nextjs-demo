import React, { Component } from 'react'
//import 'isomorphic-fetch'
import firebase from 'firebase'

import Layout from '../components/containers/Layout'

import ToolbarComun from '../widgets/containers/ToolbarComun'
import SearchForm from '../components/containers/SearchForm'
import Categories from '../components/containers/Categories'
import RecentGrid from '../components/containers/RecentGrid'
import TrendGrid from '../components/containers/TrendGrid'

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
        var data;

        const bdRef = firebase.database().ref('uploads');
        const x = await bdRef.on('value', async dataC => {
            data = await dataC.val();
        })

        return { data }
    }
    render() {
        const { data } = this.props
        const data2 = data
        return (
            <Layout className="page">
                <ToolbarComun
                    center = { () => <SearchForm/> }
                />
                <Categories/>
                <RecentGrid data = { data }/>
                <TrendGrid data = { data }/>
            </Layout>
        )
    }
}