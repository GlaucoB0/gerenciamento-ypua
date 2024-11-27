import { Form } from "react-router-dom";

const FormRoot = ({ method, action, children, position }) => {
  return (
    <Form style={{position}} method={method} action={action}>
      {children}
    </Form>
  )
}

export default FormRoot;