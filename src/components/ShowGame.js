import React from 'react'
import { connect } from 'react-redux'
import Images from '../CardImages'
import { Card, Image, Icon, Container, Button } from 'semantic-ui-react'
import { showGame } from '../redux/actions'


class ShowGame extends React.Component {
    state = {
        error: ''
    }

    joinGame = () => {
        let userID = parseInt(localStorage.user_id)
        let gameID = this.props.game.id
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_game: {
                    user_id: userID,
                    game_id: gameID
                }
            })

        }

        fetch('http://localhost:3000/user_games', options)
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
                            <span className='date'>Date: {this.props.game.time}</span>
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


const mapStateToProps = ({game}) => {
    return { game: game }
}

export default connect(mapStateToProps)(ShowGame)