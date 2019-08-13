import React from 'react';
import {Card, CardDeck} from 'react-bootstrap'

export default class Character extends React.Component {

    // handleClick = () => {
    //     this.setState({toggleCard: !this.state.toggleCard})
    // }

    render() {
        const {name, thumbnail, comics, series, stories, handleClick} = this.props
        // const {toggleCard} = this.state
        return (
            <div className="char-cards">
                <div className="cards">
                    <div className='card card-front'>
                        <img src={thumbnail.path + '.' + thumbnail.extension} className='card-img-top'/>
                        <div className='card-body'>
                            <div className='card-title'>{name}</div> 
                            </div>
                        </div>
                        <div className='card card-back'>
                            <div className='card-body'>
                                <p className='card-text'>Comics: {comics.items.length}</p>
                                <p className="card-text">Series: {series.items.length}</p>
                                <p className="card-text">Stories: {stories.items.length}</p>
                                <button className="btn btn-danger" style={{width: '10rem', alignSelf: 'center'}} onClick={handleClick}>Trade</button>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}