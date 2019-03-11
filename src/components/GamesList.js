import React, { Component } from 'react'
import { Card, Icon, Image, Container } from 'semantic-ui-react'
import { connect } from 'react-redux'
import Images from '../CardImages'
import { Link } from 'react-router-dom'



const GameCard = (props) => {
    const moment = require('moment')
    let randNum = Math.floor( Math.random() * 5 )
    let id = props.game.id
    let time = moment(props.game.time).format("MMMM-DD-YYYY h:mm a")
    return (
    <div>
        <Card as={Link} to={`/games/${id}`} style={{ padding: '20px' }}>
            <Image src={Images[randNum]} style={{ height: '200px' }} />
            <Card.Content>
            <Card.Header><div style={{color: 'blue'}}>Title:</div> {props.game.title}</Card.Header>
            <Card.Meta>
                <span className='date'>Date: {time}</span>
            </Card.Meta>
            <Card.Description>Notes: {props.game.notes}</Card.Description>
            <Card.Description>Location: {props.game.place}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Icon name='user' />
                {props.game.users.length} Going
            </Card.Content>
        </Card>
    </div>
)

}

class GamesList extends Component{
    render() {
        return (
            <div>
                <Container style={{ padding: '20px' }}>
                    <Card.Group itemsPerRow={4} >
                        {this.props.games.map( game => <GameCard game={game} key={game.id}/> )}
                    </Card.Group>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = ({games}) => {
    return { games: games }
}

export default connect(mapStateToProps)(GamesList)