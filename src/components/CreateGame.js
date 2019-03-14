import React from 'react'
import { Form, Container, TextArea } from 'semantic-ui-react'
import * as DateTime from 'react-datetime'
import { addGame } from '../redux/actions'
import { connect } from 'react-redux'

class CreateGame extends React.Component {
    state = {
        title: '',
        place: '',
        notes: '',
        time: new Date(),
        user_id: localStorage.user_id
    }



    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleDateTime = (e) => {
        this.setState({ time: e.toDate()})
    }

    onSubmitHandler = (e) => {
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(this.state)
        }

        fetch('http://localhost:3000/games', options)
        .then(res => res.json())
        .then(game => {
            this.props.dispatch(addGame(game))
            this.props.history.push('/profile')
        })
    }
    
    render(){
        return (
        <Container text>
        <Form onSubmit={(e) => this.onSubmitHandler(e)}>
            <Form.Field>
            <label>Name your Game</label>
            <input
                placeholder="Name"
                name='title'
                onChange={this.handleChange}
            />
            </Form.Field>
    
            <Form.Field>
            <label>Details on location - Where you playin</label>
            <input
                placeholder="Location Notes"
                name='place'
                onChange={this.handleChange}
            />
            </Form.Field>
    
            <Form.Field>
            <label>Game notes</label>
            <input
                placeholder="Is it more competitve, just for fun, half-court or full-court, etc."
                name='notes'
                control={TextArea}
                onChange={this.handleChange}
            />
            </Form.Field>
            
            <label>Select a date and time</label>
            <DateTime 
                inputProps={{ placeholder: 'Selec the date and time'}}
                input={false}  
                name='time'
                onChange={this.handleDateTime}
                
            />
    
            <Form.Field>
            <input type='submit' />
            </Form.Field>
        </Form>

        </Container>
        
        )
    }
}
    

export default connect()(CreateGame)