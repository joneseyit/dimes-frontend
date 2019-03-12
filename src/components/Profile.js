import React from 'react'
import { Card, Image, Container, Button, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addUser } from '../redux/actions'
import { Link } from 'react-router-dom'
import InviteForm from './InviteForm'

class Profile extends React.Component {

    fetchUser = () => {
        let id = parseInt(localStorage.user_id)
        fetch(`http://localhost:3000/users/${id}`)
        .then(res => res.json())
        .then(user => this.props.dispatch(addUser(user)))
    }

    componentDidMount(){
        this.fetchUser()
    }
    
    render() {
        return(
            this.props.user ? 
                (<div>
                    <Container style={{padding: '20px', display: 'flex',justifyContent: 'left'}}>
                        <Card.Group itemsPerRow={3}>
                            <Card style={{ padding: '20px' }}>
                                <Image src={this.props.user.avatar || 'https://images.unsplash.com/photo-1518479044931-404a93dcaf0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'} />
                                <Card.Content>
                                <Card.Header>Profile info </Card.Header>
                                <Card.Description>Registered Name: {this.props.user.name}</Card.Description>
                                <Card.Description>
                                    Username: {this.props.user.username}
                                </Card.Description>
                                <Card.Description>Member since: {this.props.user.created_at.split('-')[0]}</Card.Description>
                                {/* <Card.Description>Bio: {this.props.user.bio}</Card.Description> */}
                                </Card.Content>

                            </Card>

                            <Card style={{ padding: '20px' }}>
                                <Image src={'https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'} />
                                <Card.Content>
                                <Card.Header>Upcoming Games: </Card.Header>
                                    <Card.Description>
                                    {   this.props.user.games.length ? 
                                        this.props.user.games.map(game => {
                                                        let id = game.id
                                                        return (
                                                        <div>
                                                            <Link to={`/games/${id}`} key={id}>{game.title}</Link>
                                                        </div>
                                                        )
                                                    })
                                        :
                                        <div>You're not registered for a game right now</div>
                                    }

                                    </Card.Description>
                                    <Button as={Link} to='/games/new' animated='fade'>
                            <Button.Content visible>Create Game</Button.Content>
                            <Button.Content hidden><Icon name= 'basketball ball'/> </Button.Content>
                        </Button>
                                    
                                    
                                </Card.Content>

                            </Card>

                            <Card style={{ padding: '20px' }}>
                                <Image src='https://islandpacificacademy.org/wp-content/uploads/2015/12/Dimes-in-a-pile.jpg' />
                                <Card.Content>
                                <Card.Header>Invites Received:</Card.Header>
                                <Card.Description>
                                   {this.props.user.inviteds.length > 0 ? 
                                   (
                                    <Card>
                                         <Card.Content extra>
                                            <div className='ui two buttons'>
                                            <Button basic color='green'>
                                                Approve
                                            </Button>
                                            <Button basic color='red'>
                                                Decline
                                            </Button>
                                            </div>
                                        </Card.Content>
                                    </Card>   
                                   )
                                   :
                                   (
                                       "You currently don't have any invites to respond to"
                                    )
                                    }
                                </Card.Description>
                                <Card.Header>Send Invite</Card.Header>
                                    <InviteForm />
                                </Card.Content>

                            </Card>
                        </Card.Group>
                    </Container>
                </div>)
                :
                <p>Loading...</p>
            
        )
    }
}
const mapStateToProps =(state) => {
    return { user: state.user }
}

export default connect(mapStateToProps)(Profile)