const {
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  DELETE_ITEM,
} = require('./constants');

const initialState = [
  {
    id: 1,
    image: require('../../assets/appleImg.png'),
    itemName: 'Apple',
    cost: '$' + 2.5,
    orderDate: 'Monday, 6 March',
    quantity: 5,
  },
  {
    id: 2,
    image: require('../../assets/orangeItem.png'),
    itemName: 'Orange',
    cost: '$' + 2.5,
    orderDate: 'Monday, 6 March',
    quantity: 5,
  },
  {
    id: 3,
    image: require('../../assets/strawItem.png'),
    itemName: 'Strawberry',
    cost: '$' + 2.5,
    orderDate: 'Monday, 6 March',
    quantity: 5,
  },
];

export const cartItems = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_QUANTITY:
      return state.map(item =>
        item.id === action.payload.id
          ? {...item, quantity: item.quantity + 1}
          : item,
      );
    case DECREASE_QUANTITY:
      if (action.payload.quantity === 0) {
        return state.map(item =>
          item.id === action.payload.id
            ? {...item, quantity: item.quantity - 1}
            : item,
        );
      } else {
        return state.filter(item => item.id !== action.payload.id);
      }
    case DELETE_ITEM:
      return state.filter(item => item.id !== action.payload.id);
    default:
      return state;
  }
};
