export const APP_ROUTES = {
  HOME: '',
  ESTIMATE: 'estimate',
  LOGIN: 'login',
  TRY_ON: 'try-on',
  PRODUCTS: {
    PARENT: 'products',
  },
  CART: {
    PARENT: 'cart',
  },
  ADMIN: {
    PARENT: 'admin',
    CHILD_ROUTES: {
      CREATE_QR: 'create-qr',
      LIST_QR: 'list-qr',
      PAYMENT_REQUEST: 'payment-request',
    },
  },
};
