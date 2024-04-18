import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom';



export default function Cart(){

    const [totalCart,setTotalCart] =useState(0);

    const {cart} = useSelector(state=>state);

    useEffect(()=>{
        setTotalCart(cart.reduce((acc,curr)=>acc+curr.price,0));
    },[cart])

    return <div>
    {
        cart&&cart.length?
        <div>

        </div>:
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
            <h1 className="text-gray-800 font-bold text-xl mb-2">Your cart is Empty</h1>
            <Link to='/'>
                <button className="bg-red-950 text-white border-2 rounded-lg font-bold p-4">
                    Shop Now
                </button>

            </Link>
        </div>
    }
    </div>
}