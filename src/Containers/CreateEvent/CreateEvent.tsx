import React from 'react';
import { TextField, Button } from '@mui/material';
import { Wrapper, Content, Header, Actions } from './styles';

const CreateEvent = () => {
  return (
    <Wrapper>
      <Header>Header / navigation</Header>
      <Content>
        <h2>Title the event:</h2>
        <TextField id="outlined-basic" label="Event name" variant="outlined" />
        <h2>Select people to go:</h2>
        <TextField id="filled-basic" label="Add person" variant="outlined" />
        <h2>Add types of places to meet up:</h2>
        <TextField
          id="standard-basic"
          label="What and where?"
          variant="outlined"
        />
      </Content>
      <Actions>
        <Button variant="outlined" color="primary">
          Continue
        </Button>
      </Actions>
      {/* <BackgroundImage /> */}
    </Wrapper>
  );
};

export default CreateEvent;
