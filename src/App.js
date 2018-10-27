import React, { Component } from 'react';
import './App.css';
import Card from './Card/Card';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: [
                {id: 1, eng: "English", han: "Hanzi", pin: "Pinyin"},
                {id: 2, eng: "English", han: "Hanzi_2", pin: "Pinyin_2"},
            ],
            currentCard: {}
        }
    }

    render() {
        return (
            <div className="App">
                <Card/>
            </div>
        )
    }

}