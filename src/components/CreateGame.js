import React from 'react'
import { Form, Container, TextArea } from 'semantic-ui-react'
import * as DateTime from 'react-datetime'
class CreateGame extends React.Component {
    state = {
        title: '',
        place: '',
        time: '',
        notes: ''
    }

    handleChange = (e) => {
        this.setState({  })
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
                placeholder="Is it more competitve, just for fun, etc."
                name='notes'
                control={TextArea}
                onChange={this.onChangeHandler}
            />
            </Form.Field>

            {/* <DatePicker
                inline
                selected={Date.now()}
                onChange={this.handleChange}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={30}
                dateFormat="MMMM d, yyyy h:mm aa"
                timeCaption="time"
            /> */}

            <DateTime 
                input={false}
                name='time'
            />
    
            <Form.Field>
            <input type='submit' />
            </Form.Field>
        </Form>

        </Container>
        
        )
    }
}
    

export default CreateGame