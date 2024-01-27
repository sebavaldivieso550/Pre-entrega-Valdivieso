import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwUCIZR2iK64t-Uj2CyU4QCFEB9pwWtPU",
  authDomain: "reactjs-ecommerce-62d22.firebaseapp.com",
  projectId: "reactjs-ecommerce-62d22",
  storageBucket: "reactjs-ecommerce-62d22.appspot.com",
  messagingSenderId: "1063782394365",
  appId: "1:1063782394365:web:35c73a9d0f877b07fcd194"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(

  <ChakraProvider>
    <App />
  </ChakraProvider>,

)