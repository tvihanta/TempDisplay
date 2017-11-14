import {fetchDevices} from '../actions'

const Ruuvit = (state = {"devices":[], "data":{}, "fetching":false}, action) => {
  switch (action.type) {
    /*case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
    ]*/
    case 'FETCHING':
        return Object.assign({}, state, {
          fetching: state.fetching ? false : true
        })
    case 'FETCH_DEVICES':
        return null
    case 'RECEIVE_DEVICES':
        console.log(state)
        return Object.assign({}, state, {
            devices: action.devices
        })
    case 'RECEIVE_DATA':
        console.log(action);
        return Object.assign({}, state, {
            data: action.data
        })
    case 'SAVE_DEVICE_DESC':
        return null
    /*case 'TOGGLE_TODO':
        console.log(state);
        return state.map((todo, index) => {
          if (index === action.id) {
            return Object.assign({}, todo, {
              completed: !todo.completed
            })
          }
          return todo
      })*/
    default:
      return state
  }
}

export default Ruuvit
