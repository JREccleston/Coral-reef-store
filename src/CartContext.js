import { createContext, useState } from "react";
import { lpsProducts, getProductData } from "./componets/LpsProducts";






export const CartContext = createContext({
    items: [],
    addToCart: () => { },
    getProductQuantity: () => { },
    deleteFromCart: () => { },
    getTotalCost: () => { },
});

export function CartProvider({ children }) {
    const [cartProducts, setcartProducts] = useState([]);


    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity;
        if (quantity === undefined) {
            return 0;
        }
        return quantity;
    }

    function addToCart(id) {
        const quantity = getProductQuantity(id);
        if (quantity === 0) {
            setcartProducts(
                [
                    ...cartProducts,
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            )
        } else {
            setcartProducts(
                cartProducts.map(
                    product =>
                        product.id === id
                            ? { ...product, quantity: product.quantity + 1 }
                            : product
                )
            )
        }
    }

    function deleteFromCart(id) {
        setcartProducts(
            cartProducts =>
                cartProducts.filter(currentProduct => {
                    return currentProduct.id != id;
                })
        )

    }
    function getTotalCost() {
        let totalCost = 0;
        cartProducts.map((cartItem) => {
            const productdata = getProductData(cartItem.id);
            totalCost += (productdata.price * cartItem.quantity);
        })
        return totalCost;
    }


    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addToCart,
        deleteFromCart,
        getTotalCost,
    }
    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
