import { Alert, AlertTitle, Button, ButtonGroup, Container, List, ListItem, ListItemText, Typography } from '@mui/material';
import { useState } from 'react';
import agent from '../../app/api/agent';

export default function AboutPage() {
    const [validationErrors, setValidationErrors] = useState<string[]>([]);

    function getValidationError() {
        agent.TestError.getValidationError()
            .then(() => console.log('No validation errors'))
            .catch(error => {
                setValidationErrors(error);
            });
    }
    return (
        <Container>
            <Typography variant='h2' gutterBottom>
                Error for testing purposes
            </Typography>
            <ButtonGroup fullWidth>
                <Button variant='contained' color='primary' onClick={() => agent.TestError.get400Error().catch(error => console.log(error))}>Test 400</Button>
                <Button variant='contained' color='primary' onClick={() => agent.TestError.get401Error().catch(error => console.log(error))}>Test 401</Button>
                <Button variant='contained' color='primary' onClick={() => agent.TestError.get404Error().catch(error => console.log(error))}>Test 404</Button>
                <Button variant='contained' color='primary' onClick={() => agent.TestError.get500Error().catch(error => console.log(error))}>Test 500</Button>
                <Button variant='contained' color='primary' onClick={getValidationError}> Test Validation</Button>
            </ButtonGroup>
            {
                validationErrors.length > 0 &&
                <Alert severity='error' sx={{ mt: 2 }}>
                    <AlertTitle color='error'>Validation Errors</AlertTitle>
                    <List>
                        {validationErrors.map(error => (
                            <ListItem key={error}>
                                <ListItemText>{error}</ListItemText>
                            </ListItem>
                        ))}
                    </List>
                </Alert>
            }
        </Container >
    )
}
