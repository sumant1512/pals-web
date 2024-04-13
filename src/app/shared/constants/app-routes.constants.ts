export const APP_ROUTES = {
  HOME: '',
  LOGIN: 'login',
  TRY_ON: 'try-on',
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
