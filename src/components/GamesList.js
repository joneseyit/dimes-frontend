import React, { Component } from 'react'
import { Card, Icon, Image, Container } from 'semantic-ui-react'
import { connect } from 'react-redux'
import Images from '../CardImages'

const GameCard = (props) => {
    let randNum = Math.floor( Math.random() * 5 )
    return (
    <div>
        <Card style={{ padding: '20px' }}>
            <Image src={Images[randNum]} style={{ height: '200px' }} />
            <Card.Content>
            <Card.Header><div style={{color: 'blue'}}>Title:</div> {props.game.title}</Card.Header>
            <Card.Meta>
                <span className='date'>Date: {props.game.time}</span>
            </Card.Meta>
            <Card.Description>Notes: {props.game.notes}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Icon name='user' />
                22 Going
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