import React from 'react';
import { Table } from 'react-bootstrap'

const Orders = () => {
    // const dispatch=useDispatch();
    // const {}=useSelector(state=>console.log(state))
    return (
        <div className='mt-32'>
        <h1 className='text-4xl my-6 py-4 text-emerald-600' >Orders</h1>
        <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>price</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>ManfrottoMBLF-WN-BPcamera</td>
            <td >$170</td>
            <td className='text-red-500'>processing</td>
            
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>2</td>
            <td>AcerAspireE15E5-575G-57D4</td>
            <td >$579.99</td>
            <td className='text-emerald-500'>delivered</td>
            
          </tr>
        </tbody>
      </Table>
        </div>
    );
};

export default Orders;