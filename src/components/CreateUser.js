import React, { Component } from "react";
import { Form, Input, TextArea, Button, Container } from 'semantic-ui-react'

class CreateUser extends Component{
    state = {
        name: '',
        username: '',
        email: '',
        bio: '',
        password: '',
    }

    render(){
        return (
          <Container text>
          <Form>
            <Form.Group widths='equal'>
              <Form.Field
                id='form-input-control-name'
                control={Input}
                label='Name'
                placeholder='Name'
                onChange={(e) => this.onChangeHandler(e)}
                name='name'
              />
              <Form.Field
                id='form-input-control-username'
                control={Input}
                label='Username'
                placeholder='Username'
                onChange={(e) => this.onChangeHandler(e)}
                name='username'
              />
              <Form.Field
                control={Input}
                options="string"
                label='Email'
                placeholder='Email'
                onChange={(e) => this.onChangeHandler(e)}
                name='email'
              />
            </Form.Group>
            <Form.Field
              id='form-textarea-control-bio'
              control={TextArea}
              label='Bio'
              placeholder='Tell the community about yourself, your style of play, etc.'
              onChange={(e) => this.onChangeHandler(e)}
              name='bio'
            />
            <Form.Input
              id='form-textarea-control-bio'
              type='password'
              label='Password'
              placeholder='Password'
              onChange={(e) => this.onChangeHandler(e)}
              name='password'
            />
            <Form.Field
              id='form-button-control-public'
              control={Button}
              content='Confirm'
              onClick={(e) => this.onSubmitHandler(e)}
            />
          </Form>
          </Container>
        )
      }
    }

export default CreateUser