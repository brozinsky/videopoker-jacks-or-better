import React, { Component } from 'react';
import Deck from './Deck.js';

const PayTable = (props) => {
    const { message, messageType } = props;
    return (
        <>
            <div className="pay-table">
                <h2 className="table-title">Pay table</h2>
                <div className="tb tb-1">
                    <p className="item-1">Royal flush</p><span className="multiplier">x250</span>
                </div>
                <div className="tb tb-2">
                    <p className="item-2">Straight flush</p><span className="multiplier">x50</span>
                </div>
                <div className="tb tb-3">
                    <p className="item-3">4 of a kind</p><span className="multiplier">x25</span>
                </div>
                <div className="tb tb-4">
                    <p className="item-4">Full House</p><span className="multiplier">x9</span>
                </div>
                <div className="tb tb-5">
                    <p className="item-5">Flush</p><span className="multiplier">x6</span>
                </div>
                <div className="tb tb-6">
                    <p className="item-6">Straight</p><span className="multiplier">x4</span>
                </div>
                <div className="tb tb-7">
                    <p className="item-7">3 of a kind</p><span className="multiplier">x3</span>
                </div>
                <div className="tb tb-8">
                    <p className="item-8">2 pairs</p><span className="multiplier">x2</span>
                </div>
                <div className="tb tb-9">
                    <p className="item-9">Jacks or better</p><span className="multiplier">x1</span>
                </div>
            </div>

            <div className="panel panel-message">
                <p className={"message " + messageType}>{message}</p>
            </div>
        </>
    );
}

const Card = (props) => {
    const { value, suit, click, id } = props;
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
            className={`card ${color}`}
            id={id}
        >
            {value}
        </div>
    );
}

class Game extends Component {
    state = {
        isDeal: true,
        cash: 100,
        bet: 1,
        btnInfo: 'DEAL',
        message: 'Press the button to play',
        messageType: 'normal',

        held: [false, false, false, false, false],

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
        if (this.state.isDeal === true) {
            const deck = new Deck();
            deck.shuffle();
            let dealt = deck.cards.slice(0, 5)
            let next = deck.cards.slice(5, 10)
            this.setState({
                dealtCards: dealt,
                nextCards: next,
                isDeal: false,
                btnInfo: 'DRAW',
                message: 'Choose cards to hold'
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
            this.setState({
                dealtCards: items,
                message: 'Jacks or better, you win!',
                messageType: 'win',
                btnInfo: 'DEAL',
                isDeal: true,
            });
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
                <PayTable message={this.state.message} messageType={this.state.messageType} />
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
                        />
                        <Card
                            id={1}
                            click={this.handleCardClick}
                            value={this.state.dealtCards[1].value}
                            suit={this.state.dealtCards[1].suit}
                        />
                        <Card
                            id={2}
                            click={this.handleCardClick}
                            value={this.state.dealtCards[2].value}
                            suit={this.state.dealtCards[2].suit}
                        />
                        <Card
                            id={3}
                            click={this.handleCardClick}
                            value={this.state.dealtCards[3].value}
                            suit={this.state.dealtCards[3].suit}
                        />
                        <Card
                            id={4}
                            click={this.handleCardClick}
                            value={this.state.dealtCards[4].value}
                            suit={this.state.dealtCards[4].suit}
                        />
                    </div>
                </div>

                < div className="panel panel-action" >
                    <div className="cash">
                        <p className="name">Credits</p>
                        <span className="money">{this.state.cash}</span>
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