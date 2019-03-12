import React from 'react'
import { Form, Dropdown } from 'semantic-ui-react'
import { connect } from 'react-redux'


class InviteForm extends React.Component{
    state = {
        users: [],
        message: ''
    }

    submitHandler = (e) => {
        let invitedId = e.target.invited.value
        let curUserId = this.props.user.id
        let gameId = e.target.game.value
        let options = {
            method: 'POST',
            headers: {
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
        .then( console.log )
        .then(this.setState({ message: 'You dished out an invite - nice!' }))
    }

    fetchUsers = () => {
        fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then(users => (this.setState({ users: users})))
    }

    componentDidMount() {
        this.fetchUsers()
    }
    
    render() {
        // let users = this.state.users.length > 0 ? this.state.users.map( user => user.invite_format) : []
        let users = this.state.users.map( user => user.invite_format)
        let usersMinusMe = users.filter(user => user.id !== this.props.user.id)
        let games = this.props.user.games.map( game => { key: game.id, value: game.id, text: game.title } )
        return (

            <div>
                <p>{this.state.message}</p>
                <Form onSubmit={this.submitHandler}>
                    <Form.Field>
                        <Dropdown placeholder='Which Player' name='invited' options={usersMinusMe} />
                        <Dropdown placeholder='Which Game' name='game' options={games} />
                        <input type='submit' value="Invite User" />
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