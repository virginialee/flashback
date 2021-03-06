// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
//import "phoenix_html"

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from "./socket"
import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import FlashCard from './components/flashCard';

let container = document.getElementById('content');
// let cards = [ 'one', 'two', 'three', 'four' ];

export function renderApp(cards) {
  ReactDOM.render(<FlashCard cards={cards} />, container);
}

export function retrieveData() {
  fetch('/api/collection/1')
    .then(resp => resp.json())
    .then(data => {
      // console.log('parsed json', data);
      // console.log('id: ', data['collection_id']);
      // console.log('cards: ', data['cards']);
      renderApp(data['cards']);
    });
}

renderApp([]);
retrieveData();
