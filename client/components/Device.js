import React from 'react'
import PropTypes from 'prop-types'
import { Grid,Row, Col, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

let getValidationState = () => {
    console.log("validia");
}

const Device = ({ id, mac, description, onSubmitHandler }) => {

    let desc, inputId
return (
      <form onSubmit={(evt) => {
          onSubmitHandler(evt,{id:inputId.value, desc:desc.value})

      }}>
       <FormGroup
         controlId="formBasicText"
         validationState={getValidationState()}
       >
       <Grid fluid={true}>
           <Row>
             <Col md={2}>
                  <ControlLabel>ID</ControlLabel>
             </Col>
             <Col md={5}>
                  <ControlLabel>MAC</ControlLabel>
             </Col>
             <Col md={5}>
                  <ControlLabel>Description</ControlLabel>
             </Col>
         </Row>
         <Row>
             <Col md={2}>
             <FormControl
               type="number"
               disabled="true"
               value={id}
               placeholder="id"
               readOnly
               inputRef={(ref) => {inputId = ref}}
             />
             <FormControl.Feedback />
             </Col>

             <Col md={5}>
                 <FormControl
                   type="text"
                   value={mac}
                   placeholder="enter mac"
                   readOnly
                 />
                 <FormControl.Feedback />
             </Col>

             <Col md={4}>
                 <FormControl
                   type="text"
                   defaultValue={description}
                   placeholder="enter desc"
                   inputRef={(ref) => {desc = ref}}
                 />
                 <FormControl.Feedback />
             </Col>
             <Col md={1}>
                 <Button type="submit">S</Button>
             </Col>
           </Row>
       </Grid>
       </FormGroup>
     </form>

)}

Device.propTypes = {
 // onClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    mac: PropTypes.string.isRequired,
    //description: PropTypes.string.isRequired,
    onSubmitHandler:PropTypes.func.isRequired
}

export default Device
