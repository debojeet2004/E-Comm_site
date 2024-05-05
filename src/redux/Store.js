import { configureStore } from '@reduxjs/toolkit';
import CartSlice from './CartSlice';
import WishSlice from './WishSlice';
import ProductSlice from './ProductSlice';
import ProductPageSlice from './ProductPageSlice';
import category from './category';

// const logger = (store) => (next) => (action) => {
//     console.log("store", store);
//     console.log("next", next);
//     console.log("action", action);
//     next(action);
// };

export const store = configureStore({
    reducer: {
        Products: ProductSlice,
        Cart: CartSlice,
        Wishlist: WishSlice,
        productPage: ProductPageSlice,
        category: category,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
