const Notification = (props) => {
  const {className, messageText, url} = props
  return(
       <div className={className}>
            <img src={url} />
            <p>{messageText}</p>
       </div>
  )
}

const element = (
  <Notification  className="messageInformation" messageText="Information Message" url="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" />
  <Notification  className="messageSuccess" messageText="Success Message"  url="https://assets.ccbp.in/frontend/react-js/success-icon-img.png" />
  <Notification  className="messageWarning" messageText="Warning Message"  url="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png" />
  <Notification  className="msgError" messageText="Error Message"  url="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" />
)

ReactDOM.render(element, document.getElementById('root'))
