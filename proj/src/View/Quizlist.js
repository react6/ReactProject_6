import React, { Component } from 'react';
import Quizitem from "./Quizitem"
import {Item, ItemGroup} from "semantic-ui-react"

class Quizlist extends Component {
    render() {
        const {quizs} = this.props;
        const quizlist = quizs.map((quiz)=>(
            <Quizitem quiz={quiz}/>
        ));

        return (
            <div>
                <ItemGroup>{quizlist}</ItemGroup>
            </div>
        );
    }
}

export default Quizlist;