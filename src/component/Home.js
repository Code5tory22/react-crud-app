import React from 'react'
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Employees from './employees';
import { Link,useNavigate} from 'react-router-dom'

const Home = () => {

    let history = useNavigate();

    const handleDelete = (id) => {
        let index = Employees.map((e) => {
            return  e.id
        }).indexOf(id);

        Employees.splice(index,1);
        history()
    }

    return (
        <>
            <div style={{ margin: "10rem" }}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Age
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Employees && Employees.length > 0
                                ?
                                Employees.map((item) => {
                                    return (
                                        <tr>
                                            <td>
                                                {item.Name}
                                            </td>
                                            <td>
                                                {item.Age}
                                            </td>
                                            <td>
                                                <Link to='/edit'>
                                                    <Button onClick={ () => alert(item.id)}>Edit</Button>
                                                </Link>
                                                &nbsp;
                                                <Button onClick={ () => handleDelete(item.id)}>Delete</Button>

                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                "No data available"
                        }
                    </tbody>

                </Table>
                <br/>
                <Link className='d-grid gap-2' to='/create'>
                        <Button size="lg">Create</Button>
                </Link>
            </div>
        </>
    )
}

export default Home
