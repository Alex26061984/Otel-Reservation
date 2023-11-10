import React, { useState,useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Client from './Client';
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from 'react-router-dom';

function Edit(){
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [room, setRoom] = useState('');
    const [price, setPrice] = useState('');
    const [id, setId] = useState('');

    let history = useNavigate();

    var index=Client.map(function(e){
        return e.id;
    }).indexOf(id);

    const handleSubmit=(e)=>{
        e.preventDefault();
        let a=Client[index];
        a.Name=name;
        a.Surname=surname;
        a.Room=room;
        a.Price=price;

        history("/");
    }

    useEffect(()=>{
        setId(localStorage.getItem('id'))
        setName(localStorage.getItem('Name'))
        setSurname(localStorage.getItem('Surname'))
        setRoom(localStorage.getItem('Room'))
        setPrice(localStorage.getItem('Price'))
    },[]);

    return (
        <div>

            <Form className="d-grid gap-2" style={{ margin: "15rem" }}>

                <Form.Group className="mb-3" controls="formName">
                    <Form.Control type="text" placeholder="Enter Name" value={name} required onChange={(e) => setName(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controls="formSurname">
                    <Form.Control type="text" placeholder="Enter Surname" value={surname} required onChange={(e) => setSurname(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controls="formRoom">
                    <Form.Control type="number" placeholder="Enter Room Number" value={room} required onChange={(e) => setRoom(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controls="formPrice">
                    <Form.Control type="text" placeholder="Enter Price" value={price} required onChange={(e) => setPrice(e.target.value)}></Form.Control>
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type="submit">Update</Button>
            </Form>

        </div>
    );
}

export default Edit;
