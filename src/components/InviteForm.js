import React from 'react'
import { Form, Dropdown } from 'semantic-ui-react'

class InviteForm extends React.Component{
    state = {
        users: []
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
        let users = this.state.users.length > 0 ? this.state.users.map( user => user.invite_format) : []
        
        return (

            <div>
                <Dropdown placeholder='Select User to Invite' options={users}/>
            </div>
            
        )
    }
}

export default InviteForm