export const APP_ROUTES = {
  HOME: '',
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
      DASHBOARD: 'dashboard',
      CREATE_COUPON: 'create-coupon',
      VIEW_COUPON: 'view-coupon',
      ADD_DEALER: 'add-dealer',
      VIEW_DEALER: 'view-dealer',
      DEALER_LEDGER: 'dealer-ledger',
      DEALER_TRANSACTIONS: 'dealer-transactions',
      DEALER_CREDIT_REQUEST: 'dealer-credit-request',
      PAYMENT_REQUEST: 'payment-request',
    },
  },
  ESTIMATE: {
    PARENT: 'estimate',
    CHILD_ROUTES: {
      PREVIEW: 'preview',
    },
  },
};
