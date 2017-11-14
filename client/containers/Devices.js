import React from 'react'
import { connect } from 'react-redux'
import DeviceList from '../components/DeviceList'
import {saveDesc} from '../actions'

import { Button } from 'react-bootstrap';

const mapStateToProps = state => {
    console.log("mapStateProps");
    console.log(state);
    return {
        devices: state.Ruuvit.devices//getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: id => {
            console.log("click");
        //      dispatch(toggleTodo(id))
        },
        onSubmitHandler: (evt,desc) => {
            evt.preventDefault();
            dispatch(saveDesc(desc));


        }
    }
}

const Devices = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeviceList)


/*let Devices = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
         <Button type="submit" bsStyle="primary" bsSize="large" block>Save</Button>
      </form>
    </div>
  )
}
Devices = connect()(Devices)
*/

export default Devices
