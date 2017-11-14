import fetch from 'isomorphic-fetch'

let nextTodoId = 0
export const saveDesc = obj => dispatch => {
    dispatch(saveDevice(obj)).then(res => {
    });
    return {
        type:'SAVE_DESCRIPTION',
        obj
    }
}

export const receiveDevices = json => (
     {
      type: 'RECEIVE_DEVICES',
      devices: json,
      receivedAt: Date.now()
    }
)

export const setFetching = json => (
     {
      type: 'FETCHING'
    }
)

export const receiveData = (id, json) => (
     {
      type: 'RECEIVE_DATA',
      device: id,
      data: json,
      receivedAt: Date.now()
    }
)

export const fetchDevices = () => dispatch => {
    return dispatch(doFetch('http://localhost:3000/api/devices')).then( (json, err) => {
        console.log(json);
        dispatch(receiveDevices(json));
        dispatch(setFetching());
    });
}

export const fetchData = (id) => dispatch => {
    return dispatch(doFetch('http://localhost:3000/api/measurements/'+id)).then( (json, err) => {
        dispatch(receiveData(id,json));
        dispatch(setFetching());
    });
}

export const saveDevice = (data) => dispatch => {
    console.log("saveDevice");
    return dispatch(doFetch("http://localhost:3000/api/devices", {
        method: 'post',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
    }))
    .then(json => {
        console.log(json);
        dispatch(receiveDevices(json));
    });
}

const doFetch = (url, params={  method: 'get',
                                headers: {"Content-type": "application/json" }
                            }) => dispatch => {
    console.log("doFetch");
    dispatch(setFetching());
    return fetch(url, params)
        .then(
            response => response.json(),
            error => console.log('errori', error)
        )/*.then(res => {
            dispatch(setFetching());
        })*/
}
