import React from 'react'
import Character from './Character';

export default class CharacterList extends React.Component {

    render() {
        const {characters, tradeCard} = this.props
        return (
            <div>
            {characters.map(char => <Character key={char.id} {...char} handleClick={() => tradeCard(char)}/>)}
            </div>
        )
    }
}