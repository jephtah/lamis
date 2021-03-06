import React, { useState } from 'react';
import {
  FormGroup,
  Input,
  Card, CardHeader, CardBody, CardDeck, Alert
} from 'reactstrap';
import MatButton from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Spinner from 'react-bootstrap/Spinner'
import PatientVitals from '../PatientDashboardWidgets/PatientVitals'
import PatientAllergies from '../PatientDashboardWidgets/PatientAllergies'
import moment from 'moment';
import { connect } from 'react-redux';
import * as actions from "../../../actions/consultation";
import * as CODES from "../../../api/codes";

function ConsultationPage(props) {
  const [errorMsg, setErrorMsg] = useState('')
  const [showErrorMsg, setShowErrorMsg] = useState(false)
  const onDismiss = () => setShowErrorMsg(false)
  const [successMsg, setSuccessMsg] = useState('')
  const [showSuccessMsg, setShowSuccessMsg] = useState(false)
  const onDismissSuccess = () => setShowSuccessMsg(false)
  const initialConsultState = {
    present_consultation: '',
    consultation_notes: ''
  };
  const [consult, setconsult] = useState(initialConsultState);
  const [newAllergy, setNewAllergy] = useState([])
  const [showLoading, setShowLoading] = useState(false)

  const Saveconsult = e => {
    e.preventDefault()
    const formData = [{
      allergies: newAllergy,
      presentConsultation: consult.present_consultation,
      consultationNotes: consult.consultation_notes
    }]
    const data = {
      data: formData,
      patientId: props.patientId,
      visitId: props.visitId,
      formCode: CODES.CONSULTATION_FORM,
      programCode: CODES.GENERAL_SERVICE,
      dateEncounter: moment(new Date()).format('DD-MM-YYYY')
    }
    setShowSuccessMsg(false)
    setShowErrorMsg(false)
    setShowLoading(true)
    const onSuccess = () => {
      setconsult(initialConsultState)
      setNewAllergy([])
      setShowLoading(false)
      setShowSuccessMsg(true)
      setSuccessMsg("Consultation saved successfully!")
      window.scrollTo(0, 0);
    }
    const onError = errstatus => {
      const msg = !(errstatus && errstatus.data && errstatus.data.apierror && errstatus.data.apierror.message) ? 'Something went wrong' : errstatus.data.apierror.message
      setErrorMsg(msg)
      setShowErrorMsg(true)
      setShowLoading(false)
      window.scrollTo(0, 0);
    }
    props.createConsultation(data, onSuccess, onError)

  }

  const onChange = e => {
    e.persist()
    setconsult({ ...consult, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={Saveconsult}>
      <Alert color='danger' isOpen={showErrorMsg} toggle={onDismiss}>
        {errorMsg}
      </Alert>
      <Alert color='success' isOpen={showSuccessMsg} toggle={onDismissSuccess}>
        {successMsg}
      </Alert>
      <CardDeck>
        <PatientVitals height={props.height} getpatientdetails={props.getpatientdetails} />
        <PatientAllergies height={props.height} addstatus={true} patientAllergies={["Penicilin"]} setNewAllergy={setNewAllergy} />
      </CardDeck>
      <hr></hr>
      <CardDeck>
        <Card >
          <CardHeader> Presenting Complaints </CardHeader>
          <CardBody>
            <FormGroup>
              <Input type="textarea" name="consultation_notes" id="consultation_notes" style={{ height: '150px' }} value={consult.consultation_notes}
                onChange={onChange} />
            </FormGroup>

          </CardBody>
        </Card>
        <Card >
          <CardHeader> Consultation Notes</CardHeader>
          <CardBody>

            <FormGroup>
              <Input type="textarea" name="present_consultation" id="present_consultation" style={{ height: '150px' }} value={consult.present_consultation}
                onChange={onChange} />
              <br></br>
            </FormGroup>
          </CardBody>
        </Card>
      </CardDeck>
      <hr></hr>
      <CardDeck>
        <Card >
          <CardHeader> Clinical Diagnosis </CardHeader>
          <CardBody>
            <div class="demo-search">
              Type for starting search:
      <input type="text" class="ctw-input" autoComplete="off" data-ctw-ino="1" />
            </div>
            <div class="ctw-window" data-ctw-ino="1"></div>
          </CardBody>
        </Card>
      </CardDeck>
      <br />

      {props.visitId ? 

      <MatButton
        type="submit"
        variant="contained"
        color="primary"
        startIcon={<SaveIcon />}
      >
        Save  {showLoading &&

<Spinner animation="border" role="status">
  <span className="sr-only">Loading...</span>
</Spinner>
}
        </MatButton>
     :
     <Alert color='danger'> This patient does not have a current visit. You have to check in to proceed</Alert>
}
    </form>
  )
}
const mapStateToProps = (state) => {
  return {
    patient: state.patients.patient,
    consultation: state.consultations.newConsultation
  }
}

const mapActionToProps = {
  createConsultation: actions.create,
}

export default connect(mapStateToProps, mapActionToProps)(ConsultationPage);