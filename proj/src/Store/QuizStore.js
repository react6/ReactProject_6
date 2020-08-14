import {observable,computed,action} from "mobx";
import Quizs from "../Quiz";

class QuizStore {
    
    @observable quizs=Quizs;
    @observable selectquiz = Quizs[0];

    @computed
    get getquizs(){
        return this.quizs ? this.quizs.slice() : [];
    }

    @computed
    get getselectquiz(){
        return this.selectquiz ? this.selectquiz : {};
    }

    

}

export default new QuizStore();