import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

class NavBar extends Component {
    
    
  
    render(){
        return (
            <div>
        <Menu stackable inverted>
        <Menu.Item>
          <img src='data:image/png;base64,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' />
        </Menu.Item>

        <Menu.Item
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