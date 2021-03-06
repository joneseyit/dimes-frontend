import React from 'react'
import { connect } from 'react-redux'
import Images from '../CardImages'
import { Card, Image, Icon, Container, Button } from 'semantic-ui-react'
import { showGame } from '../redux/actions'
import { USER_GAMES } from '../endpoints'


class ShowGame extends React.Component {
    state = {
        error: ''
    }

    joinGame = () => {
        let userID = this.props.user.id
        let gameID = this.props.game.id
        let token = localStorage.token
        const options = {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_game: {
                    user_id: userID,
                    game_id: gameID
                }
            })

        }

        fetch(USER_GAMES, options)
        .then(res => res.json())
        .then( game =>{
            if(game.error){
                this.setState({ error: game.error})
            } else {
                return this.props.dispatch(showGame(game))
            }
        }) 
    }
    
    render() {
        const moment = require('moment')
        let randNum = Math.floor( Math.random() * 5 )
        return (
            <div>
                <Container style={{padding: '20px', display: 'flex',justifyContent: 'center'}}>
                
            {
                this.props.game === null ? 
                <p>Loading un momento...</p>
                :
                (<Card style={{ padding: '20px' }}>
                        <Image src={Images[randNum]} style={{ height: '200px' }} />
                        <Card.Content>
                        <Card.Header><div style={{color: 'blue'}}>Title:</div> {this.props.game.title}</Card.Header>
                        <Card.Meta>
                            <span className='date'>Date: {moment(this.props.game.time).format("MMMM-DD-YYYY h:mm a")}</span>
                        </Card.Meta>
                        <Card.Description>Notes: {this.props.game.notes}</Card.Description>
                        <Card.Description>Location: {this.props.game.place}</Card.Description>
                        </Card.Content>
                        <Card.Description>
                            {this.state.error} 
                        </Card.Description>
                        <Button animated='fade' onClick={this.joinGame}>
                            <Button.Content visible>Join Game</Button.Content>
                            <Button.Content hidden><Icon name= 'basketball ball'/> </Button.Content>
                        </Button>
                        <Card.Content extra>
                            {this.props.game.users.length} Going
                        </Card.Content>
                        {this.props.game.users.map(user => {
                            return (
                                <Card.Content extra>
                                    <Icon name='user' />
                                    {user.username}
                                </Card.Content>
                            )
                        })}


                    </Card>)
            }   
                </Container>
            </div>
        )
    }
}


const mapStateToProps = ({game, user}) => {
    return { game: game, user: user}
}

export default connect(mapStateToProps)(ShowGame)