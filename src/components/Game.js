import React, { Component } from 'react';
import Deck from './Deck.js';
import cardBackImg from '../img/card-back.svg';

const PayTable = (props) => {
    const { message, messageType, multiplier, prizes, winningHand } = props;

    return (
        <>
            <div className="pay-table">
                <h2 className="table-title">Pay table</h2>
                <div className={"tb tb-1 " +
                    (winningHand === 'royal-flush' ? 'active' : '')}>
                    <p className="item-1">Royal flush</p><span className="multiplier">{prizes[0].value * multiplier}</span>
                </div>
                <div className={"tb tb-2 " +
                    (winningHand === 'straight-flush' ? 'active' : '')}>
                    <p className="item-2">Straight flush</p><span className="multiplier">
                        {prizes[1].value * multiplier}</span>
                </div>
                <div
                    className={"tb tb-3 " +
                        (winningHand === 'four-of-a-kind' ? 'active' : '')}>
                    <p className="item-3">4 of a kind</p><span className="multiplier">
                        {prizes[2].value * multiplier}</span>
                </div>
                <div className={"tb tb-4 " +
                    (winningHand === 'full-house' ? 'active' : '')}>
                    <p className="item-4">Full House</p><span className="multiplier">{prizes[3].value * multiplier}</span>
                </div>
                <div className={"tb tb-5 " +
                    (winningHand === 'flush' ? 'active' : '')}>
                    <p className="item-5">Flush</p><span className="multiplier">{prizes[4].value * multiplier}</span>
                </div>
                <div className={"tb tb-6 " +
                    (winningHand === 'straight' ? 'active' : '')}>
                    <p className="item-6">Straight</p><span className="multiplier">{prizes[5].value * multiplier}</span>
                </div>
                <div className={"tb tb-7 " +
                    (winningHand === 'three-of-a-kind' ? 'active' : '')}>
                    <p className="item-7">3 of a kind</p><span className="multiplier">
                        {prizes[6].value * multiplier}</span>
                </div>
                <div
                    className={"tb tb-8 " +
                        (winningHand === 'two-pair' ? 'active' : '')}>
                    <p className="item-8">2 pairs</p><span className="multiplier">
                        {prizes[7].value * multiplier}</span>
                </div>
                <div
                    className={"tb tb-9 " +
                        (winningHand === 'jacks-or-better' ? 'active' : '')}>
                    <p className="item-9">Jacks or better</p><span className="multiplier">
                        {prizes[8].value * multiplier}</span>
                </div>
            </div>

            <div className="panel panel-message">
                <p className={"message " + messageType}>{message}</p>
            </div>
        </>
    );
}

const Card = (props) => {
    const { value, suit, click, id, disabled } = props;
    let color = ''
    if (suit === '♥' || suit === '♦') {
        color = 'red';
    }
    else if (suit === '♣' || suit === '♠') {
        color = 'black';
    }
    return (
        <div
            onClick={click}
            data-value={`${value}${suit}`}
            className={`card ${color} ${disabled ? 'disabled' : ''}`}
            id={id}
        >
            { value ? null : <img className="card-back-img" src={cardBackImg} alt="Card back" />}
            {value}
        </div>
    );
}

const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const suits = ['♥', '♦', '♣', '♠'];

class Hand {
    constructor(pokerHand) {
        this.faces = pokerHand.map(card => faces.indexOf(card.slice(0, -1)));
        this.suits = pokerHand.map(card => suits.indexOf(card.slice(-1)));

        this.groups = faces.map((face, i) => this.faces.filter(j => i === j).length).sort((x, y) => y - x);
        this.groupsJOB = faces.map((face, i) => this.faces.filter(j => i === j && i > 8).length).sort((x, y) => y - x);

        this.shifted = this.faces.map(x => (x + 1) % 13);
        this.distance = Math.min(Math.max(...this.faces) - Math.min(...this.faces), Math.max(...this.shifted) - Math.min(...this.shifted));

        this.flush = this.suits.every(suit => suit === this.suits[0]);
        this.straight = this.groups[0] === 1 && this.distance < 5;;
    }
    analyze() {

        if (this.straight && this.flush && this.faces.includes(12) && !this.faces.includes(0)) return 'royal-flush';
        else if (this.straight && this.flush) return 'straight-flush';
        else if (this.groups[0] === 4) return 'four-of-a-kind';
        else if (this.groups[0] === 3 && this.groups[1] === 2) return 'full-house';
        else if (this.straight) return 'straight';
        else if (this.groups[0] === 3) return 'three-of-a-kind';
        else if (this.groups[0] === 2 && this.groups[1] === 2) return 'two-pair';
        else if (this.groups[0] === 2 && this.groupsJOB[0] === 2) return 'jacks-or-better';
        else return 'loss';
    }
}

class Game extends Component {
    state = {
        isDeal: true,
        isDisabled: true,
        credits: 100,
        creditsWon: 0,
        bet: 1,
        btnInfo: 'DEAL',
        message: 'Press the button to play',
        messageType: 'normal',
        gameOver: false,

        held: [false, false, false, false, false],
        winningHand: '',


        prizes: [
            {
                pokerHand: 'royal-flush',
                message: "Jackpot!!! It's a Royal FLush!!! You win ",
                value: 250,
            },
            {
                pokerHand: 'straight-flush',
                message: "Superb! It's a Straight FLush! You win ",
                value: 50,
            },
            {
                pokerHand: 'four-of-a-kind',
                message: "Superb! Four of a kind! You win ",
                value: 25,
            },
            {
                pokerHand: 'full-house',
                message: "Great, it's a full house! You win ",
                value: 9,
            },
            {
                pokerHand: 'flush',
                message: "Great, it's a flush! You win ",
                value: 6,
            },
            {
                pokerHand: 'straight',
                message: "Great, it's a straight. You win ",
                value: 4,
            },
            {
                pokerHand: 'three-of-a-kind',
                message: 'Three of a kind, you win ',
                value: 3,
            },
            {
                pokerHand: 'two-pair',
                message: 'Two pair, you win ',
                value: 2,
            },
            {
                pokerHand: 'jacks-or-better',
                message: 'Jacks or better, you win ',
                value: 1,
            },
        ],

        dealtCards: [
            {
                id: 0,
                value: '',
                suit: '',
            },
            {
                id: 1,
                value: '',
                suit: '',
            },
            {
                id: 2,
                value: '',
                suit: '',
            },
            {
                id: 3,
                value: '',
                suit: '',
            },
            {
                id: 4,
                value: '',
                suit: '',
            },
        ],
        nextCards: [{
            value: '',
            suit: '',
        },
        {
            value: '',
            suit: '',
        },
        {
            value: '',
            suit: '',
        },
        {
            value: '',
            suit: '',
        },
        {
            value: '',
            suit: '',
        },]
    }

    handleClick = () => {
        if (!this.state.gameOver) {
            if (this.state.isDeal === true) {
                if (this.state.credits <= this.state.bet) {
                    this.setState({
                        gameOver: true,
                    })
                }
                const deck = new Deck();
                deck.shuffle();
                let dealt = deck.cards.slice(0, 5)
                let next = deck.cards.slice(5, 10)
                this.setState({
                    dealtCards: dealt,
                    nextCards: next,
                    isDeal: false,
                    isDisabled: false,
                    btnInfo: 'DRAW',
                    message: 'Choose cards to hold',
                    messageType: 'normal',
                    credits: this.state.credits - this.state.bet,
                    held: [false, false, false, false, false],
                    winningHand: null,
                });
            } else {
                let heldItems = [...this.state.held];
                let indexes = [];
                for (let i = 0; i < heldItems.length; i++) {
                    if (heldItems[i] === false) {
                        indexes.push(i);
                    }
                }
                let nextItem = [...this.state.nextCards];
                let items = [...this.state.dealtCards];
                indexes.forEach(index => {
                    let item = items[index];
                    item = nextItem[index];
                    items[index] = item;
                })

                let itemsSuits = items.map(card => card.suit);
                let itemsFaces = items.map(card => card.value);
                let pokerHand = itemsFaces.map((e, i) => e + itemsSuits[i])
                const hand = new Hand(pokerHand)

                const analyzedHand = hand.analyze();

                let creditsWon = null;

                if (analyzedHand === 'loss') {
                    this.setState({
                        creditsWon: 0,
                        messageType: 'lose',
                        message: 'You lose',
                        winningHand: null,
                    });
                } else {
                    let handMessage = '';
                    let winningHand = '';

                    this.state.prizes.forEach((prize) => {
                        if (analyzedHand === prize.pokerHand) {
                            creditsWon = prize.value * this.state.bet;
                            handMessage = prize.message;
                            winningHand = prize.pokerHand;
                        }
                    })
                    console.log(winningHand)

                    this.setState({
                        creditsWon: creditsWon,
                        messageType: 'win',
                        message: handMessage + creditsWon + '!',
                        winningHand: winningHand,
                    });
                }

                this.setState({
                    dealtCards: items,
                    btnInfo: 'DEAL',
                    isDeal: true,
                    isDisabled: true,
                    credits: this.state.credits + creditsWon,
                });
            }
        } else {
            this.setState({
                message: 'You have no credits. You lose.',
                messageType: 'alert',
            })
        }

    }

    handleCardClick = (e) => {
        const index = e.target.id;
        let items = [...this.state.held];
        let item = items[index];
        item = !item;
        items[index] = item;
        this.setState({ held: items });
    }

    handleMinusBtn = () => {
        this.setState({
            bet: this.state.bet - 1,
        })
    }
    handlePlusBtn = () => {
        this.setState({
            bet: this.state.bet + 1,
        })
    }

    render() {
        return (
            <main className="main">
                <PayTable
                    prizes={this.state.prizes}
                    multiplier={this.state.bet}
                    message={this.state.message}
                    messageType={this.state.messageType}
                    winningHand={this.state.winningHand}
                />
                <div className="board">
                    <div className="board-info">
                        <p className="a1 action-info">
                            {this.state.held[0] ? 'HOLD' : ''}
                        </p>
                        <p className="a2 action-info">
                            {this.state.held[1] ? 'HOLD' : ''}
                        </p>
                        <p className="a3 action-info">
                            {this.state.held[2] ? 'HOLD' : ''}
                        </p>
                        <p className="a4 action-info">
                            {this.state.held[3] ? 'HOLD' : ''}
                        </p>
                        <p className="a5 action-info">
                            {this.state.held[4] ? 'HOLD' : ''}
                        </p>
                    </div>
                    <div className="board-cards">
                        <Card
                            id={0}
                            click={this.handleCardClick}
                            value={this.state.dealtCards[0].value}
                            suit={this.state.dealtCards[0].suit}
                            disabled={this.state.isDisabled}
                        />
                        <Card
                            id={1}
                            click={this.handleCardClick}
                            value={this.state.dealtCards[1].value}
                            suit={this.state.dealtCards[1].suit}
                            disabled={this.state.isDisabled}
                        />
                        <Card
                            id={2}
                            click={this.handleCardClick}
                            value={this.state.dealtCards[2].value}
                            suit={this.state.dealtCards[2].suit}
                            disabled={this.state.isDisabled}
                        />
                        <Card
                            id={3}
                            click={this.handleCardClick}
                            value={this.state.dealtCards[3].value}
                            suit={this.state.dealtCards[3].suit}
                            disabled={this.state.isDisabled}
                        />
                        <Card
                            id={4}
                            click={this.handleCardClick}
                            value={this.state.dealtCards[4].value}
                            suit={this.state.dealtCards[4].suit}
                            disabled={this.state.isDisabled}
                        />
                    </div>
                </div>

                < div className="panel panel-action" >
                    <div className="cash">
                        <p className="name">Credits</p>
                        <span className="money">{this.state.credits}</span>
                    </div>
                    <div className="bet">
                        <p className="name">Bet</p>
                        <div className="bet-wrap">
                            <button
                                disabled={this.state.bet < 2 ? true : false}
                                onClick={this.handleMinusBtn} className="bet-btn">-</button>
                            <span className="money"> {this.state.bet} </span>
                            <button
                                disabled={this.state.bet > 3 ? true : false}
                                onClick={this.handlePlusBtn} className="bet-btn">+</button>
                        </div>
                    </div>
                    <button onClick={this.handleClick} id="start" className="start-btn">{this.state.btnInfo}</button>
                </div>
            </main>
        )
    }
}

export default Game;