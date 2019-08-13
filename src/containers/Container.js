import React from 'react';
import API from '../adapters/API'
import CharacterList from './CharacterList';
import Search from './Search';
import Navbar from './Navbar';
import TradedCard from './TradedCard';

export default class CharacterContainer extends React.Component {

    state = {
        characters: [],
        searchTerm: '',
        tradedCards: []
    }

    componentWillMount() {
        API.fetchCharacters().then(characters => this.setState({ characters:  characters }))
    }

    filterForImages = () => {
        const filteredUrl = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';
        const filteredGif = 'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif';
        const charArray = [];
        for (let i = 0; i < this.state.characters.length; i++) {
            const url = this.state.characters[i].thumbnail.path + '.' + this.state.characters[i].thumbnail.extension
            if (url !== filteredUrl && url !== filteredGif) {
                charArray.push(this.state.characters[i])
            }
        }
    return charArray
}

    nameSearch = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    filterByName = (userInput) => {
        return this.filterForImages().filter(character => character.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    }

    tradeCard = (card) => {
        if (this.state.tradedCards.includes(card)) return;
        this.setState({ tradedCards: [...this.state.tradedCards, card]})
        // console.log(this.state.tradedCards)
    }

    render() {
        // console.log(this.state.characters)
        this.filterForImages()

        // console.log(this.state.characters.length)
        return (
            <div>
            <Navbar searchTerm={this.state.searchTerm} onType={this.nameSearch}/> 
                <div className="row">
                    <div className="col-lg-6">
                        {/* <div className="char-container"> */}
                        <h1>Card Deck</h1>
                            <CharacterList characters={this.filterByName()} tradeCard={this.tradeCard} />
                        {/* </div> */}
                    </div>
                    <div className="col-lg-6">
                    <h1>Trade Deck</h1>
                        <TradedCard newCards={this.state.tradedCards}/>
                    </div>
                </div>

            {/* */}
            </div>
        )
    }
}
