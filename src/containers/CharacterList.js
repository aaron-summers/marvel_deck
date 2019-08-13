import React from 'react'
import Character from './Character';

export default class CharacterList extends React.Component {

    render() {
        const {characters} = this.props
        return (
            <div>
            {characters.map(char => <Character key={char.id} {...char}/>)}
            </div>
        )
    }
}