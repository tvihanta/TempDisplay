import React from 'react'
import { connect } from 'react-redux'
import DeviceList from '../components/DeviceList'
import {saveDesc} from '../actions'

import { Button } from 'react-bootstrap';
import Progress from 'react-progress';

var hasLoaded = false;
const mapStateToProps = state => {
    return {
        loading: state.Ruuvit.fetching//getVisibleTodos(state.todos, state.visibilityFilter)
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

/*const Devices = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeviceList)*/


var Loader = ({ loading, dispatch }) => {
    let percent = 0
    if (hasLoaded == false && loading == true){
        hasLoaded = true;
        percent = 100;
    } else if (hasLoaded == true && loading == false){
        percent = 0;
        hasLoaded == false;
    }
    console.log(hasLoaded);

    return (
    <div>
      <Progress percent={percent}/>
    </div>
    )
}
export default connect(mapStateToProps)(Loader)
//export default Loader
