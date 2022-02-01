import React from 'react';
import { Table } from 'react-bootstrap'

const Orders = () => {
    // const dispatch=useDispatch();
    // const {}=useSelector(state=>console.log(state))
    return (
        <div>
        <h1 className='text-4xl my-6 py-4 text-emerald-600' >Orders</h1>
        <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Heaphone</td>
            <td className='text-emerald-600'>Delivered</td>
            <td >@x5</td>
          </tr>
        </tbody>
      </Table>
        </div>
    );
};

export default Orders;