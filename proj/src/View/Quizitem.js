import React, { Component } from 'react';
import {Item} from "semantic-ui-react"
import QuizlistContainer from '../Container/QuizlistContainer';

class Quizitem extends Component {
    render() {
        const {quiz} = this.props;
        return (
            <div>
                <Item.Group>
                    <Item>
                    <Item.Image size='tiny' src={quiz.imgUrl} />

                    <Item.Content>
                        <Item.Header as='a'>{quiz.title}</Item.Header>
                        {/* <Item.Meta>Description</Item.Meta> */}
                        <Item.Description>
                    {/* <Image src='/images/wireframe/short-paragraph.png' /> */}
                        <p>{quiz.price}</p>
                        </Item.Description>
                    <Item.Extra>Additional Details</Item.Extra>
                </Item.Content>
                </Item>
                </Item.Group>
            </div>
        );
    }
}

export default Quizitem;