import { createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/Layout';
import Products, {action as updateAvailabilityAction, loader as productsLoader} from './views/Products';
import NewProduct, {action as newProductAction} from './views/NewProduct';
import {action as deleteProductAction} from './components/ProductDetails'
import EditProduct, { loader as editProductLoader, action as editProductAction}from './views/EditProduct';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
        children: [
            {
                index: true,
                element: <Products />,
                loader: productsLoader,
                action: updateAvailabilityAction
            },
            {
                path: 'productos/nuevo',
                element: <NewProduct />,
                action: newProductAction,

            },
            {
                path: 'productos/:id/editar', //ROA pattern - Resource oriented disign
                element:<EditProduct/>,
                loader: editProductLoader,
                action: editProductAction
            },
            {
                path: 'productos/:id/eliminar', //ROA pattern - Resource oriented disign
                action: deleteProductAction
            }
        ]
	},
]);
