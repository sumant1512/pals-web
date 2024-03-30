export const APP_ROUTES = {
  HOME: '',
  LOGIN: 'login',
  PRODUCTS: {
    PARENT: 'products',
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
