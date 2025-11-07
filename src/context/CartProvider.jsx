import { useReducer } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({children}) => {

    const initialState = []

    const cartReducer= (state=initialState, action={}) => {

        switch (action.type) {
            case '[CART] add Product':
                return [...state, action.payload]
            case '[CART] remove Product':
                return state.filter(product => product.id !== action.payload)
            case '[CART] increment Quantity':
                return state.map(product => {
                    const cant= product.quantity+1
                    if(product.id === action.payload) return {...product, quantity: cant}
                    return product
                })
            case '[CART] decrement Quantity':
                return state.map(product => {
                    const cant= product.quantity-1
                    if(product.id === action.payload && product.quantity > 1) return {...product, quantity: cant}
                    return product
                })
            default:
                return state
        }
        
    }


    const [shoppingList, dispatch] = useReducer(cartReducer, initialState)

    const addProduct = (product) => {
        product.quantity = 1
        const action= {
            type: '[CART] add Product',
            payload: product
        }
        dispatch(action)
    }

    const removeProduct = (id) => {
        const action= {
            type: '[CART] remove Product',
            payload: id
        }
        dispatch(action)
    }

    const incrementProduct = (id) => {
        const action= {
            type: '[CART] increment Quantity',
            payload: id
        }
        dispatch(action)
    }

    const decrementProduct = (id) => {
        const action= {
            type: '[CART] decrement Quantity',
            payload: id
        }
        dispatch(action)
    }

    
    return (
        <CartContext.Provider value={{ shoppingList, addProduct, removeProduct, incrementProduct, decrementProduct }}>
            {children}
        </CartContext.Provider>
    )
}