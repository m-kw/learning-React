const reducerName = 'lists';
const createActionName = name => `app/${reducerName}/${name}`;

export const ADD_LIST = createActionName('ADD_LIST');

export const createAction_addList = payload => ({ payload, type: ADD_LIST });

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_LIST:
      return [...state, { ...action.payload}];
    default:
      return state;
  }
}
