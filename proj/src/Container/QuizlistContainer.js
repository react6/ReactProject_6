import React, { Component } from 'react';
import {inject,observer} from "mobx-react"
import Quizlist from "../View/Quizlist"


@inject("QuizStore")
@observer
class QuizlistContainer extends Component {
    render() {
        let quizs = this.props.QuizStore.getquizs;
        return (
            <Quizlist quizs={quizs}/>
        );
    }
}

export default QuizlistContainer;