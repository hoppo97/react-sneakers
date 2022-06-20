import React from 'react';
import Card from "../components/Card";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncOrders } from '../redux/slices/ordersSlice';
import SkeletonComponent from '../components/Skeleton/Skeleton';
import { useLocation } from "react-router-dom";

function Orders() {
    const dispatch = useDispatch();
    const {orders, status, error} = useSelector(state => state?.ordersReducer);
    const location = useLocation().pathname;

    React.useEffect(() => {
        dispatch(fetchAsyncOrders())
    }, []);

    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40"> 
                <h1>Мои заказы</h1>
            </div>
                <>
                    {error && <h2>Ошибка {error}</h2>}
                    {status === 'loading' && <SkeletonComponent />}
                    {status !== 'loading' && orders.map((item, index) => (
                        <div key={item.id}>
                        {item.id && <h2 className="d-block mb-25">Заказ #{item.id}</h2>}
                            <div  className="d-flex flex-wrap">
                                {item.items.map(card => (
                                    <Card  
                                    key={card.id}
                                    {...card}
                                    loading={status} 
                                    false={true}  
                                    location={location}
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