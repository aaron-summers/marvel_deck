import React from 'react';
import API from '../adapters/API'
import CharacterList from './CharacterList';

export default class CharacterContainer extends React.Component {

    state = {
        characters: []
        // filteredCharacters: []
    }

    componentWillMount() {
        API.fetchCharacters().then(characters => this.setState({ characters:  characters.data.results }))
    }

    filterForImages = () => {
        const filteredUrl = '';
        for (let i = 0; i < this.state.characters.length; i++) {
            console.log(this.state.characters[i].thumbnail.path + '.' + this.state.characters[i].thumbnail.extension)
            // const url = this.state.characters[i].thumbnail.path + '.' + this.state.characters[i].thumbnail.extension
    //     //     if (url === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
    //     //         this.setState({
    //     //             characters: this.state.characters.filter()
    //     //         })
    //     //     }
    //     //     return console.log(url)
            }
    }

    render() {
        // console.log(this.state.characters)
        this.filterForImages()

        // console.log(this.state.characters.length)
        return (
            <div>
                <CharacterList characters={this.state.characters} />
            </div>
        )
    }
}
