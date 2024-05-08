import React, { createContext } from 'react'

const CartContext = createContext({
    items:[],
})
function CartContextProvider({ children }){
    return(
        <CartContext.Provider value={{items:[]}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
