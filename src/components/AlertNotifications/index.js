// Write your code here
import {Component} from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'

class AlertNotifications extends Component {
  render() {
    return (
      <div className="mainContainer">
        <h1 className="mainHeading">Alert Notifications</h1>
        <Notification>
          <div>
            <div className="each">
              <AiFillCheckCircle className="logo" />
              <h1>Success</h1>
            </div>
            <p>You can access all the files in the folder</p>
          </div>
        </Notification>
        <Notification>
          <div>
            <div className="each">
              <MdWarning className="logo" />
              <h1>Error</h1>
            </div>
            <p>
              Sorry, you are not authorized to have access to delete the file
            </p>
          </div>
        </Notification>
        <Notification>
          <div>
            <div className="each">
              <RiErrorWarningFill className="logo" />
              <h1>Warning</h1>
            </div>
            <p>Viewers of this file can see comments and suggestions</p>
          </div>
        </Notification>
        <Notification>
          <div>
            <div className="each">
              <MdInfo className="logo" />
              <h1>Info</h1>
            </div>
            <p>Anyone on the internet can view these files</p>
          </div>
        </Notification>
      </div>
    )
  }
}

export default AlertNotifications
