import React from 'react'
import { Form, Dropdown, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'

let token = localStorage.token
class InviteForm extends React.Component{
    state = {
        users: [],
        message: '',
        invitedId: null,
        gameId: null,
        dropdownDefault: 'Choose a player'
    }

    onChangeHandler = (value, text) => {
        this.setState({ [text.name]: text.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        let invitedId = this.state.invitedId
        let curUserId = this.props.user.id
        let gameId = this.state.gameId
        let options = {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                user_id: curUserId,
                invited_id: invitedId,
                responded: false,
                game_id: gameId

            })

        }

        fetch('http://localhost:3000/invitations', options)
        .then( res => res.json())
        .then( data => {
            if(data.error){
                this.setState({ message: data.error})
            }
            else {
                this.setState({ message: "Your invite has been sent!"})
            }
        })
    }

    fetchUsers = () => {
        let options = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        }

        fetch('http://localhost:3000/users', options)
        .then(res => res.json())
        .then(users => (this.setState({ users: users})))
    }

    componentDidMount() {
        this.fetchUsers()
    }
    
    render() {
        //map over and convert users to the format to be put into the dropdown
        let users = this.state.users.map( user => user.invite_format)
        //the id gets saved in the value key of the format for the dropdown
        let usersMinusMe = users.filter(user => user.value !== this.props.user.id)
        let games = this.props.user.upcoming_games.map( game => {
            return { key: game.id, value: game.id, text: game.title }
        })
        return (

            <div>
                <p>{this.state.message}</p>
                <Form onSubmit={this.submitHandler}>
                    <Form.Field>
                        <label>Player</label>
                        <Dropdown placeholder='Which Player' icon='basketball ball' name='invitedId' options={usersMinusMe} onChange={this.onChangeHandler} style={{padding: '5px'}} />
                    </Form.Field>

                    <Form.Field>   
                        <label>Game</label>
                        <Dropdown placeholder='Which Game' icon='basketball ball' name='gameId' options={games} onChange={this.onChangeHandler} />
                    </Form.Field>

                    <Form.Field>
                        <Button type='submit' value="Dish Invite">Dish Invite </Button>
                    </Form.Field>
                </Form>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return { user: state.user }
}

export default connect(mapStateToProps)(InviteForm)