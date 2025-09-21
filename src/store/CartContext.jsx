import  { createContext, useReducer } from 'react';

const CartContext = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {}
});

//parameters "state" and "action" are passed automatically to the function by React when it uses it
function cartReducer(state, action) {
    if(action.type === 'ADD_ITEM') {
        //check if the item already exists in the array
        const existingCartItemIndex = state.items.findIndex(
            item => item.id === action.item.id
        );
        
        //create a new array to use to add the new item as updating the state's one is not a good practice
        const updatedItems = [...state.items];

        if(existingCartItemIndex > -1) { //already existing item
            const existingItem = state.items[existingCartItemIndex];
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        } else { //new item
            updatedItems.push({
                ...action.item, 
                quantity: 1
            });
        }

        return {...state, items: updatedItems};
    }
    if(action.type === 'REMOVE_ITEM') {
        const existingCartItemIndex = state.items.findIndex(
            item => item.id === action.id
        );
        const existingCartItem = state.items[existingCartItemIndex];

        const updatedItems = [...state.items];

        if(existingCartItem.quantity === 1) { //remove the overall item
            updatedItems.splice(existingCartItemIndex, 1); //remove 1 item at the given index
        } else { //reduce the quantity
            const updatedItem = {
                ...existingCartItem, 
                quantity: existingCartItem.quantity - 1
            };

            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {...state, items: updatedItems};
    }

    return state;
}

export function CartContextProvider({children}) {
    const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

    function addItem(item) {
        dispatchCartAction({type: 'ADD_ITEM', item});
    }

    function removeItem(id) {
        dispatchCartAction({type: 'REMOVE_ITEM', id});
    }

    const cartContext = {
        items: cart.items,
        addItem,
        removeItem
    }

    console.log(cartContext);

    return(
        //before React 19.x you should have used 
        //<CartContext.Provider></CartContext.Provider>
        <CartContext value={cartContext}>{children}</CartContext>
    )
}

export default CartContext;