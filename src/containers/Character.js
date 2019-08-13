import React from 'react';
import {Card, CardDeck} from 'react-bootstrap'

export default class Character extends React.Component {
    render() {
        const {name, thumbnail} = this.props
        return (
            <div className='card'>
                <img src={thumbnail.path + '.' + thumbnail.extension} className='card-img-top'/>
                <div className='card-body'>
                    <div className='card-title'>{name}</div> 
                </div>
            </div>
        )
    }
}