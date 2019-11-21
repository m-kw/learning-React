import shortid from 'shortid';

export const getCardsForColumn = ({ cards, searchString }, columnId) => cards.filter(card => card.columnId === columnId && new RegExp(searchString, 'i').test(card.title));

const reducerName = 'cards';
const createActionName = name => `app/${reducerName}/${name}`;

export const ADD_CARD = createActionName('ADD_CARD');

export const createAction_addCard = payload => ({ payload, type: ADD_CARD });

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_CARD:
      return [...state, { ...action.payload, id: shortid.generate() }];
    default:
      return state;
  }
}
