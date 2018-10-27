import React, { Component } from 'react';
import './App.css';
import Card from './Card/Card';
import DrawButton from './DrawButton/DrawButton';

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

        this.updateCard = this.updateCard.bind(this);
    }

    componentWillMount() {
        const currentCards = this.state.cards;

        this.setState({
            cards: currentCards,
            currentCard: this.getRandomCard(currentCards)
        })
    }

    getRandomCard(currentCards) {
        var card = currentCards[Math.floor(Math.random() * currentCards.length)]
        return(card);
    }

    updateCard() {
        console.log("New Card");
    }

    render() {
        return (
            <div className="App">
                <Card
                    eng={this.state.currentCard.eng}
                    han={this.state.currentCard.han}
                    pin={this.state.currentCard.pin}
                />
                <div className="buttonRow">
                    <DrawButton drawCard={this.updateCard}/>
                </div>
            </div>
        )
    }

}