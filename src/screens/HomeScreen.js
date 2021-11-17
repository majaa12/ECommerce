import React, { useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Row, Col} from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listProducts } from '../actions/productActions'     


function HomeScreen() {
    
    const dispatch = useDispatch()
    /* sad moramo da te podatke renderujemo, koristimo useSelector da uzmemo samo deo stanja a to je productList(combineReducer) */
    const productList = useSelector(state => state.productList)
    const {error, loading, products} = productList

    useEffect(()=> {
        dispatch(listProducts())

    }, [dispatch])

    return (
        <div>
            <h1>Latest Products</h1>
            {loading ? <Loader />
                : error ? <Message variant='danger'>{error}</Message>
                    : 
                    <div>
                    <Row>
                        {products.map((product) => (
                            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                <Product product={product} />
                            </Col>
                        ))}              
                    </Row>
                    </div>
            }
          
        </div>
    )
}

export default HomeScreen
