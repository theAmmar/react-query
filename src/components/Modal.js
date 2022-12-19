import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useMutation, useQueryClient } from 'react-query';

export const ModalDelete = ({buttonLabel, className, id}) => {
    const queryClient = useQueryClient()
    const [modal, setModal] = useState(false)
    
    const toggle = () => {
        setModal(!modal)
    }
    const deleteRecord = () => {
        toggle()
        mutation.mutate(id)
    }
    const mutation = useMutation(async recordId => {
        return await fetch(`http://localhost:3004/users/${recordId}`, {
            method: 'DELETE'
        });
    }, {
        onSuccess: () => {
            // makes react query client to fetch data against this key again,
            // acts like GET call after DELETE call.
            return queryClient.invalidateQueries(['getUsers'])
        }
    })

    return (
        <div>
            <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={deleteRecord}>Delete</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );

}
