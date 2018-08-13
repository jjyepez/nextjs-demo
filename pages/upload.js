import React, { Component } from 'react'

import firebase from 'firebase'

import Layout from '../components/containers/Layout';
import ToolbarComun from '../widgets/containers/ToolbarComun';

class Upload extends Component {
    componentDidMount = () => {
        const config = {
            apiKey: "AIzaSyDedcTaetRlOUmLbp9aVVohcPYb_5xC3cM",
            authDomain: "plazti-memes.firebaseapp.com",
            databaseURL: "https://plazti-memes.firebaseio.com",
            projectId: "plazti-memes",
            storageBucket: "plazti-memes.appspot.com",
            messagingSenderId: "537088006274"
          };
          if (!firebase.apps.length) firebase.initializeApp(config);
        const storage = firebase.storage();

        // Create a storage reference from our storage service
        const storageRef = storage.ref().child('gif');
        const $enviar = document.querySelector('.bEnviar')
        
        $enviar.addEventListener('click', e => {
          const $input = document.getElementById('local_file')
          const selectedFile = $input.files[0];
        console.log( selectedFile )
          if( ~~( selectedFile.size / 1024 ) > 1024 ){
            alert( 'archivo demasiado grandde' )
            return false 
          }
          const uploadTask = storageRef.child( selectedFile.name )
            .put( selectedFile )
            //.then( function( snapshot ) {
            //console.log('Uploaded a blob or file!', snapshot );
        
          uploadTask.on('state_changed', function(snapshot){
              var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              document.querySelector('.barraProg').style.width = ~~progress + '%'
        console.log('Upload is ' + progress + '% done');
              switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
                  break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
                  break;
              }
            }, function(error) {
        console.log( error )
            }, function() {
              uploadTask.snapshot.ref.getDownloadURL().then( function(downloadURL) {
        console.log('File available at', downloadURL);
                firebase.database().ref('uploads')
                  .push({
                    media: document.getElementById('local_file').files[0].name,
                    title: document.querySelector('#title').value,
                    tags: document.querySelector('#tags').value,
                    platzi_member: document.querySelector('#team_member').value,
                    author: document.querySelector('#author').value,
                    created: Date.now(),
                    width: document.querySelector('#ancho').value,
                    height: document.querySelector('#alto').value,
                    uri: downloadURL
                  })
                
                document.querySelector('.barraProg').style.width = 0
                document.querySelector('#preview').src = downloadURL
              });
            });
          //})
        })
        
        firebase.database().ref('uploads').on('value', data => {
          actualizarGrid( data.val() )
        })
        
        function actualizarGrid( data ){
          //return false
          const $grid = document.querySelector('.grid')
          $grid.innerHTML = ''
          for( el in data ){
            const urlMedia = firebase.storage().ref('gif').child(data[el].media).getDownloadURL()
            .then( (url => {
              const $div = document.createElement('div')
              $div.innerHTML = `
                <div><img src="${url}"></div>
              `
              $grid.appendChild( $div )
            }).bind(data[el]))
          }
        }
        
        const $file = document.getElementById('local_file')
        $file.addEventListener('change', (e)=>{
          var selectedFile = e.target.files[0];
          var reader = new FileReader();
          var imgtag = document.querySelector("#preview");
          var ancho = document.querySelector("#ancho");
          var alto = document.querySelector("#alto");
          var size = document.querySelector("#size");
          
          size.value = selectedFile.size / 1024;

          imgtag.title = selectedFile.name;

          reader.onload = function(event) {
            imgtag.src = event.target.result;
            imgtag.onload = function(){
              ancho.value = imgtag.naturalWidth
              alto.value = imgtag.naturalHeight 
            }
          };
          reader.readAsDataURL(selectedFile);
        })
    }
    render(){
        return (
            <Layout>
                <ToolbarComun 
                    hasBackButton = { true }
                    renderCenter = { () => 'Subir' }
                    renderRight = { null }
                />
                <div className = "barraProg" ref = { el => this.progressBar = el } ></div>
                <h3>Subir archivo</h3>
                <form>
                    <div>
                        <img id="preview"/>
                    </div>
                    <div>
                        <input id="local_file" type="file" required="true"/>
                        <input id="title" type="text" placeholder="Title" autoComplete="off"/>
                        <input id="tags" type="text" placeholder="Tags"/>
                        <input id="team_member" type="text" placeholder="PlatziTeam Member"/>
                        <input id="author" type="text" placeholder="Author"/>
                        <input id="ancho" placeholder="ancho"/>
                        <input id="alto" placeholder="alto"/>
                        <input id="size" placeholder="size"/>

                        <button className="bEnviar" type="button">Enviar</button>
                    </div>
                </form>

                <style jsx>{`
                    div {
                        box-shadow: 0 0 5px red inset;
                    }
                    form {
                        width: 100vw;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                    .barraProg {
                        position: fixed;
                        top: 0;
                        width: 0;
                        height: 5px;
                        left: 0;
                        background-color: red;
                        transition: all esae-in-out 0.5s;
                      }
                      form div {
                        flex: 1;
                      }
                      form input {
                        display: block;
                        margin: .5rem 0;
                        padding: .35rem;
                      }
                      #preview {
                        border: 1px solid #ddd;
                        max-width: 400px;
                        max-height: 400px;
                      }
                      
                `}</style>
            </Layout>
        )
    }
}

export default Upload