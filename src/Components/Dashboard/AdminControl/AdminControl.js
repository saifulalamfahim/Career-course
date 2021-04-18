import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Dashboard from '../Dashboard';

const AdminControl = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch("http://localhost:4200/allOrders")
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    }, []);

    const handleChange = (e, id, name, service) => {
        const status = { status: e.target.value }

        fetch(`http://localhost:4200/addStatus/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(status)
        })
            .then(res => res.json())
            .then(data => {
                document.getElementById("changed").innerHTML = `<b class='text-success'> Status has been changed of the "${service}" service belongs to ${name}! </b>`;
            })
    }
    return (
        <section className="m-3">
            <div className="row mt-5">
                <div className="col-md-3">
                    <Dashboard></Dashboard>
                </div>
                <div className="col-md-9">
                    <div className="d-flex justify-content-between">
                        <h4 className="bg-white">Service List</h4>
                        <h4>{loggedInUser.name}</h4>
                    </div>
                    <div style={{backgroundColor: "#071226"}} className="adminService p-4">
                        {orders.length === 0 && <h5 align="center">Loading..........Or, You didn't order anything</h5>}
                        <div style={{ borderRadius: "20px" }} className="bg-white p-3">
                            <div className="table-responsive">
                                <table className="table bg-white table-borderless serveListBg" id="changed">
                                    <thead className=" p-2">
                                        <tr className=" p-2">
                                            <th scope="col">Name</th>
                                            <th scope="col">Email ID</th>
                                            <th scope="col">Service</th>
                                            <th scope="col">Project Details</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            orders.map(order =>
                                                <tr key={order._id}>
                                                    <td>{order.name}</td>
                                                    <td>{order.email}</td>
                                                    <td>{order.service}</td>
                                                    <td>{order.desc}</td>
                                                    <td>
                                                        <select name="status" onChange={(e) => handleChange(e, order._id, order.name, order.service)} style={{ border: "none" }}>
                                                            <option value="Pending">Pending</option>
                                                            <option value="done">Done</option>
                                                            <option value="On Going">On Going</option>
                                                            {order.status && <option selected>{order.status}</option>}
                                                        </select>

                                                    </td>
                                                </tr>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminControl;