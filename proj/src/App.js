import React, { Component } from 'react';
import { Grid,Image } from 'semantic-ui-react';
import QuizlistContainer from "./Container/QuizlistContainer";
import QuizdetailContainer from "./Container/QuizdetailContainer";

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      
      <Grid columns={3} divided>
      <Grid.Row>
        <Grid.Column>
          <QuizlistContainer />
        </Grid.Column>
        <Grid.Column>
          <QuizdetailContainer />
        </Grid.Column>
        
      </Grid.Row>

    </Grid>
    
    );
  }
}

export default App;