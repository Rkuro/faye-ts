import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Nav from "./Nav";


export default function App() {
  return (
    <Container maxWidth={false}>
      <Nav/>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App v4-beta example with TypeScript
        </Typography>

      </Box>
    </Container>
  );
}
