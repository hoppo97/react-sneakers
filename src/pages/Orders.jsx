import React from 'react';
import axios from 'axios';
import Card from "../components/Card";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncOrders } from '../redux/slices/ordersSlice';
import SkeletonComponent from '../components/Skeleton/Skeleton';

function Orders() {
    const dispatch = useDispatch();
    const {orders, status, error} = useSelector(state => state?.ordersReducer);
    console.log(status);

    React.useEffect(() => {
        dispatch(fetchAsyncOrders())
    }, []);

    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40"> 
                <h1>Мои заказы</h1>
            </div>
                <>
                {status === 'loading' && <SkeletonComponent />}
                {status !== 'loading' && orders.map((item, index) => (
                    <div key={item.id}>
                    {item.id && <h1 className="d-block mb-25">Заказ #{item.id}</h1>}
                        <div  className="d-flex flex-wrap">
                            {item.items.map(card => (
                                <Card  
                                key={card.id}
                                {...card}
                                loading={status} 
                                false={true}  
                            /> 
                            ))}
                        </div> 
                    </div>
                ))}
                </>
        </div>
    );
}

export default Orders;