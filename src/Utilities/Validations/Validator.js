export default function Validate(values) {
    let errors = {}
    if (!values.visitorEmail) {
      errors.visitorEmail = 'Email address is required'
    } else if (!/\S+@\S+\.\S+/.test(values.visitorEmail)) {
      errors.visitorEmail = 'Email address is invalid'
    }
    if (!values.visitorName) {
      errors.visitorName = 'Name is required'
    } else if (values.visitorName.length < 1) {
      errors.visitorName = 'Name must be 1 or more characters'
    }
    if (!values.visitorMessage) {
      errors.visitorMessage = 'Message is required'
    } else if (values.visitorMessage.length < 1) {
      errors.visitorMessage = 'Message must be 1 or more characters'
    }
    return errors
  }