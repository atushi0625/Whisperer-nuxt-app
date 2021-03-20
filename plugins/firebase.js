import firebase from 'firebase'     
import 'firebase/firestore'
import 'firebase/analytics'

//firebaseプロジェクトの設定を記す
if (!firebase.apps.length){
     firebase.initializeApp({
          apiKey: "AIzaSyDaR4inYxN1sF9n_ExYq5SlkzYeIYTunWQ",
          authDomain: "whisperer-47d98.firebaseapp.com",
          projectId: "whisperer-47d98",
          storageBucket: "whisperer-47d98.appspot.com",
          messagingSenderId: "945335743901",
          appId: "1:945335743901:web:08f7f2c0bddd2c285deb74",
          measurementId: "G-M48LHNC23T"
     })
}

export const db = firebase.firestore()
export const auth = firebase.auth()

//外でもfirebaseが使えるように
export default {
     firebase
}

