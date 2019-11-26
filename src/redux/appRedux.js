const reducerName = 'app';
const createActionName = name => `app/${reducerName}/${name}`;

export const CHANGE_SELECTED_LIST = createActionName('CHANGE_SELECTED_LIST');

export const createAction_changeSelectedList = payload => ({ payload, type: CHANGE_SELECTED_LIST });

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case CHANGE_SELECTED_LIST:
      console.log('change selected list action', action);
      return {...state, ...action.payload};
    default:
      return state;
  }
}
