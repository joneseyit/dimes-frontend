import React from 'react'
import {Card, Button, Image } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { responded } from '../redux/actions'
import { showGame } from '../redux/actions'

class InviteCard extends React.Component {
    state = {
        errors: ''
    }

    joinGame = (userId, gameId) => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_game: {
                    user_id: userId,
                    game_id: gameId
                }
            })
        }
        fetch('http://localhost:3000/user_games', options)
        .then(res => res.json())
        .then( game =>{
            if(game.error){
                this.setState({ error: game.error})
            } else {
                this.props.dispatch(showGame(game))
                this.props.history.push(`/games/${gameId}`)
            }
        }) 
    }

    changeInviteStatus = (e, invitedId, gameId, userId) => {
        let options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                responded: true
             })
        }

        fetch(`http://localhost:3000/invitations/${invitedId}`, options)
        .then(res => res.json())
        .then( invite => this.props.dispatch(responded(invite)))

        if(e.target.name === "accept"){ this.joinGame(userId, gameId) }
    }

    render(){
        const gameId = this.props.invite.game.id
        const userId = parseInt(localStorage.user_id)
        const invitedId = this.props.invite.id

        return (
            <Card>
                <Card.Content as={Link} to={`/games/${gameId}`} >
                    <Image floated='right' size='mini' src='https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' />
                    <Card.Header>Invite Details</Card.Header>
                    <Card.Meta>  </Card.Meta>
                    <Card.Description>
                    <strong>{this.props.invite.sender} </strong> has invited you to play in <strong>{this.props.invite.game.title}</strong>
                    </Card.Description>
                        </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                        <Button basic color='green' name='accept' onClick={(e) => this.changeInviteStatus(e, invitedId, gameId, userId)}>
                            Accept
                        </Button>
                        <Button basic color='red' name='decline' onClick={(e) => this.changeInviteStatus(e, invitedId, gameId, userId)}>
                            Decline
                        </Button>
                        </div>
                </Card.Content>
            </Card> 
        )
    }
   
}

const mapStateToProps = (state) => {
    return { invites: state.invites, user: state.user, }
}

export default withRouter(connect(mapStateToProps)(InviteCard))