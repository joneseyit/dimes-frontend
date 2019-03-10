import React from 'react'

class CreateGame extends React.Component {
    render() {
        return(
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
                    <label>Notes on location - Where you playin</label>
                    <input
                      placeholder="Location Notes"
                      name='location'
                      onChange={this.onChangeHandler}
                    />
                  </Form.Field>
            
                  <Form.Field>
                    <label>Give a caption or tell the community why you like this art</label>
                    <input
                      placeholder="Caption"
                      name='caption'
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
            
        )
    }
}

export default CreateGame