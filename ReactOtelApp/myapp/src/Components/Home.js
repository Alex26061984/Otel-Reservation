// import React, { Fragment } from 'react';
import { Button, Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Client from './Client';
import { Link, useNavigate } from 'react-router-dom';
import '../Components/Home.css';

function Home() {

    let history = useNavigate();

    //Edit
    const handleEdit = (id, name, surname, room, price) => {
        localStorage.setItem('id', id);
        localStorage.setItem('Name', name);
        localStorage.setItem('Surname', surname);
        localStorage.setItem('Room', room);
        localStorage.setItem('Price', price);
    }

    //Delete
    const handleDelete = (id) => {
        var index = Client.map(function (e) {
            return e.id
        }).indexOf(id);

        Client.splice(index, 1);
        history('/');
    }

    return (
        <div style={{ margin: "10rem" }}>
            <Link to="/add">
                <Button>Add</Button>
            </Link>
            <br />
            <Table striped bordered hover size='sm'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Room</th>
                        <th>Price</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Client && Client.length > 0
                            ?
                            Client.map((item) => {
                                return (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.Name}</td>
                                        <td>{item.Surname}</td>
                                        <td>{item.Room}</td>
                                        <td>{item.Price}</td>
                                        <td>
                                            <Link to={'/edit'}>
                                                <Button className="edit-btn" onClick={() => handleEdit(item.id, item.Name, item.Surname, item.Room, item.Price)}>Update</Button>
                                            </Link>
                                        </td>
                                        <td>
                                            <Button className="delete-btn" onClick={() => handleDelete(item.id)}>Delete</Button>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "No data available"
                    }
                </tbody>

            </Table>
        </div>
    );
}

export default Home;