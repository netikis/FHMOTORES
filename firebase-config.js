/**
 * Configuração pública do Firebase (cliente).
 * No repositório fica VAZIO de propósito.
 * Local: rode `npm run build` (lê o .env) para gerar firebase-env.js
 * GitHub Pages: o Actions gera firebase-env.js com os Secrets no deploy.
 * A proteção real dos dados é: login + regras do Realtime Database.
 * NÃO coloque senha aqui.
 */
window.FH_FIREBASE_CONFIG = window.FH_FIREBASE_CONFIG || {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};
