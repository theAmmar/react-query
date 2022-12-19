import React from 'react';
import { useMutation } from "react-query";
import { useNavigate } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export const User = () => {
    const navigate = useNavigate()
    // Mutation section
    const mutation = useMutation(async newUser => {
        return await fetch('http://localhost:3004/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        });
    },
        {
            onSuccess: () => {
                return navigate('/')
            }
        }
    )

    const handleSubmit = (e) => {
        e.preventDefault()
        const { Id, firstName, lastName, userName } = e.target.elements
        const formData = {
            id: Id.value,
            firstName: firstName.value,
            lastName: lastName.value,
            username: userName.value
        }
        mutation.mutate(formData)
    }
    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="Id">Id</Label>
                <Input name="Id" id="Id" placeholder="Enter an Id" />
            </FormGroup>
            <FormGroup>
                <Label for="firstName">First Name</Label>
                <Input name="firstName" id="firstName" placeholder="Enter first name" />
            </FormGroup>
            <FormGroup>
                <Label for="lastName">Last Name</Label>
                <Input name="lastName" id="lastName" placeholder="Enter last name" />
            </FormGroup>
            <FormGroup>
                <Label for="userName">User Name</Label>
                <Input name="userName" id="userName" placeholder="Enter user name" />
            </FormGroup>

            <Button type='submit'>Submit</Button>
        </Form>
    );

}