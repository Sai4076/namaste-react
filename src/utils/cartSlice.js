import { createSlice , current} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState : { 
        items: [],
    },
    reducers: {
        addItem: (state,action) => {
            console.log("AddItem==>",current(state.items));
            state.items.push(action.payload);
        },
        removeItem: (state,action) => {
            console.log("Action==>",action);
            const filteredList = state.items.filter(item  => (item.card.info.id !== action.payload.card.info.id));
            return {items: filteredList};
        },
        clearCart: (state) => {
            state.items.length = 0;
        },
    },
});


export const {addItem, removeItem , clearCart} = cartSlice.actions;

export default cartSlice.reducer;