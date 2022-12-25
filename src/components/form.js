import React, { useReducer } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { initialState, reducer } from '../reducers/form-reducer'
export const ReducerForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state)
    return (
        <Form>
            <FormGroup>
                <Label for="firstName">First Name</Label>
                <Input 
                    name="firstName" 
                    id="firstName" 
                    value={state.firstName} 
                    onChange={(e)=>{
                        dispatch({
                            type: 'changeValue',
                            field: e.target.name,
                            value: e.target.value
                        })
                    }}
                    placeholder="enter your first name" 
                />
            </FormGroup>
            <FormGroup>
                <Label for="lastName">Last Name</Label>
                <Input 
                    name="lastName" 
                    id="lastName" 
                    value={state.lastName}
                    onChange={(e)=>{
                        dispatch({
                            type: 'changeValue',
                            field: e.target.name,
                            value: e.target.value
                        })
                    }} 
                    placeholder="enter your last name" />
            </FormGroup>
            <FormGroup>
                <Label for="userName">User Name</Label>
                <Input
                    name="userName" 
                    id="userName" 
                    value={state.userName}
                    onChange={(e)=>{
                        dispatch({
                            type: 'changeValue',
                            field: e.target.name,
                            value: e.target.value
                        })
                    }} 
                    placeholder="enter your username name" />
            </FormGroup>
            <FormGroup>
                <Label for="email">Email</Label>
                <Input 
                    type="email" 
                    name="email" 
                    id="email" 
                    value={state.email}
                    onChange={(e)=>{
                        dispatch({
                            type: 'changeValue',
                            field: e.target.name,
                            value: e.target.value
                        })
                    }} 
                    placeholder="enter a valid email address" />
            </FormGroup>
            <Button>Submit</Button>
            <Button onClick={()=>{dispatch({type:'reset'})}}>Reset</Button>
        </Form>
    );
}
