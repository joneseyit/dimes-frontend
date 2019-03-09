import React, { Component } from "react";
import { Form, Input, TextArea, Button, Container } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addUser } from '../redux/actions'

class CreateUser extends Component{
    state = {
        name: '',
        username: '',
        email: '',
        bio: '',
        password: '',
        img: '',
        errors: ''
    }

    fileHandler = (e) => {
        this.setState({ img: e.target.files[0] })
    }

    onChangeHandler =(e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmitHandler = (e) => {
        const data = new FormData()
        data.append('name', this.state.name)
        data.append('username', this.state.username)
        data.append('email', this.state.email)
        data.append('bio', this.state.bio)
        data.append('password', this.state.password)
        data.append('img', this.state.img)

        let options = {
            method: 'POST',
            body: data
        }
        fetch('http://localhost:3000/users', options)
        .then(res => res.json())
        .then(data => {
            if(data.errors){
                this.setState({ errors: data.errors })
            } else {
                this.props.dispatch(addUser(data.user))
                localStorage.setItem('user_id', data.user_id)
                localStorage.setItem('token', data.token)
                this.props.history.push('/profile')
            }
        })
    }

    render(){
        return (
          <Container text>
          {this.state.errors ? (
            <div className="error-message">{this.state.errors}</div>
          ) : null}
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
              name ='bio'
            />

            <Form.Field>
              <label>Upload Avatar</label>
              <input
                type='file'
                placeholder='Choose Image'
                name='img'
                onChange={this.fileHandler}
              />
              
              </Form.Field>

            <Form.Input
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


export default connect()(CreateUser)