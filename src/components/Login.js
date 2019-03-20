import React, { Component } from 'react'
import { Grid, Form, Button, Segment, Header, Message, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addUser } from '../redux/actions'
import { LOGIN } from '../endpoints'
  
  
  class Login extends Component {
    state = {
      username: "",
      password: "",
      errors: ""
    };
  
    handleOnChange = (e) => {
        e.preventDefault()
        let name = e.target.name
        let value = e.target.value
        this.setState({ [name] : value })
    }

    onSubmitHandler = (e) => {
        let username = this.state.username
        let password = this.state.password
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                    username: username,
                    password: password
             })
        }
        fetch(LOGIN, options)
        .then(res => res.json())
        .then( data => {
            if(data.errors){
                this.setState({ errors: data.errors})
                this.props.history.push("/login")
            } else{
                localStorage.setItem('token', data.token)
                localStorage.setItem('user_id', data.user_id)
                this.props.history.push('./profile')
                this.props.dispatch(addUser(JSON.parse(data.user)))
            }
        })
    }

    render() {
      return (
        <div className="login-form">
          <style>{`
       body > div,
       body > div > div,
       body > div > div > div.login-form {
         height: 100%;
       }
     `}</style>
          <Grid
            textAlign="center"
            style={{ height: "100%" }}
            verticalAlign="middle"
          >
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as="h2" color="teal" textAlign="center">
                <Image src='https://www.shareicon.net/data/128x128/2017/03/29/881801_school_512x512.png' />
                Log-in to your account
              </Header>
              {this.state.errors ? (
                <div className="error-message">{this.state.errors}</div>
              ) : null}
  
              <Form size="large" onSubmit={event => this.onSubmitHandler(event)}>
                <Segment stacked>
                  <Form.Input
                    fluid
                    icon="user"
                    iconPosition="left"
                    placeholder="Username"
                    name="username"
                    onChange={this.handleOnChange}
                  />
                  <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={this.handleOnChange}
                  />
  
                  <Button color="teal" fluid size="large">
                    Login
                  </Button>
                </Segment>
              </Form>
              <Link to='/signup'>
              <Message style={{fontSize: '20px'}}>
                Got next? <p>Sign Up</p>
              </Message>
              </Link>
            </Grid.Column>
          </Grid>
        </div>
      );
    }
  }
  
  export default connect()(Login);
  