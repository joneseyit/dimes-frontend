import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
    
    
  
    render(){
        return (
            <div>
        <Menu stackable inverted>
        <Menu.Item as={ Link } to='/'>
          <img src='https://www.shareicon.net/data/128x128/2017/03/29/881801_school_512x512.png' />
        </Menu.Item>

        <Menu.Item
          as={ Link } to='/games'
          name='Browse All Games'
          onClick={this.handleItemClick}
        >
          Browse All Games
        </Menu.Item>

        <Menu.Item name='login'  onClick={this.handleItemClick}>
          Sign-in <br/> <br/> Sign up
        </Menu.Item>

        <Menu.Item
          name='about'
          onClick={this.handleItemClick}
        >
          About Dimes
        </Menu.Item>

        <Menu.Item
          name='explained'
          onClick={this.handleItemClick}
        >
          How It Works
        </Menu.Item>

      </Menu>
            </div>
        )
    }
}

export default NavBar