import React from 'react'
import { connect } from 'react-redux'
import Images from '../CardImages'
import { Card, Image, Icon } from 'semantic-ui-react'

class ShowGame extends React.Component {
    
    render() {
        debugger
        let randNum = Math.floor( Math.random() * 5 )
        return (
            <div>
            {
                this.props.game === null ? 
                <p>Loading un momento...</p>
                :
                (<Card style={{ padding: '20px' }}>
                        <Image src={Images[randNum]} style={{ height: '200px' }} />
                        <Card.Content>
                        <Card.Header><div style={{color: 'blue'}}>Title:</div> {this.props.game.title}</Card.Header>
                        <Card.Meta>
                            <span className='date'>Date: {this.props.game.time}</span>
                        </Card.Meta>
                        <Card.Description>Notes: {this.props.game.notes}</Card.Description>
                        <Card.Description>Location: {this.props.game.place}</Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Icon name='user' />
                            22 Going
                        </Card.Content>
                    </Card>)
            }   
            </div>
        )
    }
}


const mapStateToProps = ({game}) => {
    return { game: game }
}

export default connect(mapStateToProps)(ShowGame)