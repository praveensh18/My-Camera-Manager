import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserDetails,fetchCameraDetails,fetchRecordings } from '../../actions';
import './Profile.css';

class Profile extends Component {
  componentDidMount() {
    if(this.props.token) {
      this.props.fetchUserDetails(this.props.token.access_token);
      this.props.fetchCameraDetails(this.props.token.access_token);
    }
  }

  renderCameraDetails() {
    if(this.props.cameraDetails) {
      return this.props.cameraDetails.map(camera => {
        return (
          <div key={camera.cameraId} className="camera-section">

            <h3>{camera.name}</h3>
            <div className="play-icon" onClick={() => this.renderRecording(camera.cameraId)} >
              <i className="large middle camera icon aligned" />
              <span>PLAY</span>
            </div>
            <div className="camera-details">
              <div>Camera Id:</div>
              <div>{camera.cameraId}</div>
            </div>
            <div className="camera-details">
              <div>Zone Id:</div>
              <div>{camera.zoneId}</div>
            </div>
          </div>
        )
      })
    }
    return 'Camera details are not available!'
  }

  // Function to fetch recording based upon selected camera id
  renderRecording(cameraId) {
    this.props.fetchRecordings(cameraId,this.props.token.access_token)
  }

  // Function to show recordings of selected camera
  showRecordings() {
    if(this.props.recordings) {
      return this.props.recordings.map((rec,index) => {
        return (
          <div key={index}>
            <video width="400" id="video" src={rec.urls.mp4Https} type="video/mp4" controls crossOrigin="anonymous">
            </video>
          </div>
        )
      })
    }
  }

  render() {
    if(this.props.userDetails) {
      return (
        <div className="profile-wrapper">

          <div className="user-details">
            <div className="detail-heading">User Details:</div>
            <div className="data">
              <h4>User Id: </h4>
              <div>{this.props.userDetails.userId}</div>
            </div>
            <div className="data">
              <h4>First Name: </h4>
              <div>{this.props.userDetails.firstName}</div>
            </div>
            <div className="data">
              <h4>Last Name: </h4>
              <div>{this.props.userDetails.lastName}</div>
            </div>
            <div className="data">
              <h4>Email: </h4>
              <div>{this.props.userDetails.email}</div>
            </div>
            <div className="data">
              <h4>Account Id: </h4>
              <div>{this.props.userDetails.accountId}</div>
            </div>
          </div>
          <hr />
          <div>
            <div className="detail-heading">Camera Details:</div>
            {this.renderCameraDetails()}
          </div>
         
          <div  className="recording-list">
            {this.showRecordings()}
          </div>
        </div>
      )
    }
    return (
      <h3>Please login and try again...</h3>
      )
  }
}

// Function to provide all required state details to class props
const mapStateToProps = (state) => {
  return {
    token: state.auth.userData,
    userDetails: state.details.userDetails,
    cameraDetails: state.details.cameraDetails,
    recordings: state.details.recordings
  }
}

export default connect(mapStateToProps,{ fetchUserDetails,fetchCameraDetails,fetchRecordings })(Profile);