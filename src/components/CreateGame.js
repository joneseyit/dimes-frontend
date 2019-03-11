import React from 'react'
import { Form, Container, TextArea } from 'semantic-ui-react'

class CreateGame extends React.Component {

    render(){
        return (
        <Container text>
        <Form onSubmit={(e) => this.onSubmitHandler(e)}>
            <Form.Field>
            <label>Name your Game</label>
            <input
                placeholder="Name"
                name='title'
                onChange={this.getCoords}
            />
            </Form.Field>
    
            <Form.Field>
            <label>Details on location - Where you playin</label>
            <input
                placeholder="Location Notes"
                name='place'
                onChange={this.onChangeHandler}
            />
            </Form.Field>
    
            <Form.Field>
            <label>Game notes</label>
            <input
                placeholder="Notes"
                name='notes'
                control={TextArea}
                onChange={this.onChangeHandler}
            />
            </Form.Field>
    
            <Form.Field>
            <input type='submit' />
            </Form.Field>
        </Form>
        </Container>
        )
    }
}
    

export default CreateGame