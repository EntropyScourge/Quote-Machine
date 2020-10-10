import React from "react"
import "./QuoteMachine.css"

const quotes = [
    {quote: "I am Groot",
    author: `Groot`,
    source: 'Guardians of the Galaxy'},
    {quote: "All science is either physics or stamp collecting.",
    author: "Ernest Rutherford"},
    {quote: "Unthinking respect for authority is the greatest enemy of truth.",
    author: "Albert Einstein"},
    {quote: "The beauty of a living thing is not the atoms that go into it, but the way those atoms are put together.",
    author: "Carl Sagan"},
    {quote: "It's okay to say \"I don't know!\" There's no shame in that! The only shame is to pretend that we know everything.",
    author: "Richard Feynman"},
    {quote: "The cake is a lie!",
    author: "Doug Rattman",
    source: 'Portal'},
    {quote: "I'll be back.",
    author: `T-800`,
    source: 'The Terminator'},
    {quote: "It's a Unix system, I know this!",
    author: `Lex Murphy`,
    source: 'Jurassic Park'},
    {quote: "Is there anyone in Rome who has not slept with my daughter?",
    author: `Augustus`,
    source: 'I, Claudius'},
    {quote: "You shall not pass!",
    author: `Gandalf`,
    source: `The Lord of the Rings: The Fellowship of the Ring`}
]

class QuoteMachine extends React.Component {
    constructor(props) {
        super(props);
        const initialIndex = this.randomizeIndex();

        this.state = {
            currentIndex: initialIndex,
            currentQuote: quotes[initialIndex].quote,
            currentAuthor: quotes[initialIndex].author,
            currentSource: quotes[initialIndex].source || ""
        };

        this.changeQuote = this.changeQuote.bind(this);
        this.randomizeIndex = this.randomizeIndex.bind(this);
    }

    randomizeIndex(){
        return Math.floor(Math.random()*quotes.length);
    }
    
    changeQuote() {
        let randomIndex;
        do {
            randomIndex = this.randomizeIndex();
        } while (this.state.currentIndex === randomIndex);
        this.setState({
                currentIndex: randomIndex,
                currentQuote: quotes[randomIndex].quote,
                currentAuthor: quotes[randomIndex].author,
                currentSource: quotes[randomIndex].source || ""
            });
    }

    render() {
        return (<div id="quote-box">
                    <div id="text">"{this.state.currentQuote}"</div>
                    <div id="author">{this.state.currentAuthor}{this.state.currentSource ? ",":""}</div>
                    <div id="source">{this.state.currentSource}</div>
                    <button id="new-quote" onClick={this.changeQuote}>New Quote</button>
                    <a id="tweet-quote" href={"https://twitter.com/intent/tweet?text=\""+this.state.currentQuote+"\" -"+this.state.currentAuthor}>t</a>
                </div>)
    }
}

export default QuoteMachine;