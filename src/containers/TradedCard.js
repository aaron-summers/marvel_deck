import React from 'react';
import Character from './Character';



export default class TradedCard extends React.Component {
    render() {
        const {newCards} = this.props
        return (
            <div>
            {console.log(newCards)}
                {newCards.map(card => <Character key={card.id} {...card}/>)}
                {/* {this.props.tradedCards.map(tradedCard => <Character key={tradedCard.id} {...tradedCard}/>)} */}
            </div>
        )
    }
}