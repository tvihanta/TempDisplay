import React from 'react'
import PropTypes from 'prop-types'
import Device from './Device'

const DeviceList = ({ devices,  onSubmitHandler }) => (
<div>
    {devices.map(device => (
      <Device key={device.id} onSubmitHandler={onSubmitHandler} id={device.id}
      mac={device.mac} description={device.description}  />
    ))}
 </div>
)

DeviceList.propTypes = {
  devices: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      mac: PropTypes.string.isRequired,
      //description: PropTypes.string.isRequired,
      //onChange:PropTypes.func.isRequired
    }).isRequired
  ).isRequired,
 // onTodoClick: PropTypes.func.isRequired
}

export default DeviceList
