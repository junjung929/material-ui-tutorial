import React from 'react';
import { Typography, Button, Container } from '@material-ui/core';
import { KeyboardArrowRight } from '@material-ui/icons';

export default function Create() {
  return (
    <Container>
      <Typography
        variant='h6'
        color='textSecondary'
        component='h2'
        gutterBottom
      >
        Create a New Note
      </Typography>

      <Button
        onClick={() => console.log('you clicked me')}
        type='submit'
        color='secondary'
        variant='contained'
        endIcon={<KeyboardArrowRight />}
      >
        Submit
      </Button>


    </Container>
  );
}
