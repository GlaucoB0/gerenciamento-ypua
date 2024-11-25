import { Form } from "react-router-dom";

const FormRoot = ({ method, action, children }) => {
  return (
    <Form method={method} action={action}>
      {children}
    </Form>
  )
}

export default FormRoot;