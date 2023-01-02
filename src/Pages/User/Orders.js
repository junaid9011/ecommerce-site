import React from 'react';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { myOrders } from '../../Redux/Actions/orderAction';
import { getCookie } from '../../Redux/Cookie';

const Orders = () => {
  const token=getCookie('token');
    const dispatch=useDispatch();
    useEffect(() => {
     dispatch(myOrders(token))
    }, [dispatch,token])
    
    const orders=useSelector(state=>(state?.myOrders?.order?.myOrder))
    console.log(orders)
    return (
        <div className='mt-32'>
        <h1 className='text-4xl my-6 py-4 text-emerald-600' >Orders</h1>
        <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            {/* <th>Product Name</th> */}
            <th>price</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
         { orders?.map((item,index)=><tr>
            <td>{index+1}</td>
            {/* <td>{item.name}</td> */}
            <td >${item.totalPrice}</td>
            <td className='text-red-500'>{item.orderStatus}</td>
            
          </tr>)}
        </tbody>
        {/* <tbody>
          <tr>
            <td>2</td>
            <td>AcerAspireE15E5-575G-57D4</td>
            <td >$579.99</td>
            <td className='text-emerald-500'>delivered</td>
            
          </tr>
        </tbody> */}
      </Table>
        </div>
    );
};

export default Orders;