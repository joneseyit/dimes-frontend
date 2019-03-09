import React from 'react'
import { Card, Image, Container } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addUser } from '../redux/actions'

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
                    <Container style={{padding: '20px', display: 'flex',justifyContent: 'center'}}>
                        <Card style={{ padding: '20px' }}>
                            <Image src={this.props.user.avatar || 'https://images.unsplash.com/photo-1518479044931-404a93dcaf0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'} />
                            <Card.Content>
                            <Card.Header>Name {this.props.user.name}</Card.Header>
                            <Card.Meta>
                                <span className='date'>Username: {this.props.user.username}</span>
                            </Card.Meta>
                            <Card.Description>Member since: {this.props.user.created_at.split('-')[0]}</Card.Description>
                            {/* <Card.Description>Bio: {this.props.user.bio}</Card.Description> */}
                            </Card.Content>

                        </Card>
                    </Container>
                </div>)
                :
                <p>Loading...</p>
            
        )
    }
}
const mapStateToProps =(state) => {
    console.log('inside state2props ')
    return { user: state.user }
}

export default connect(mapStateToProps)(Profile)