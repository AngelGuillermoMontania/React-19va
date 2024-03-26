import { useFormik } from "formik";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      // Valores iniciales y estados de los inputs
      email: "",
      firstName: "",
      lastName: "",
    },
    validate: (values) => {
      // Funcion que valida, espera que retornes un objeto con errores
      const errors = {}; // creamos el objeto de erorres, vacio

      if (!values.firstName) {
        // Si no escribieron nada en el input, guardamos el error "Required"
        errors.firstName = "Required";
      } else if (values.firstName.length > 15) {
        // Si excede los 15 caracteres, guardamos el error "Must be 15 characters or less"
        errors.firstName = "Must be 15 characters or less";
      }

      if (!values.lastName) {
        errors.lastName = "Required";
      } else if (values.lastName.length > 20) {
        errors.lastName = "Must be 20 characters or less";
      }

      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) // Expresion regular
      ) {
        errors.email = "Invalid email address";
      }

      return errors; // Retorne el objeto con los errores
    },
    onSubmit: (values) => {
      // Funcion que se ejecuta al hacer click en el button tipo submit
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {" "}
      {/* formik.handleSubmit ejecuta el onSubmit declarado en formik */}
      <label>First Name</label>
      <input
        id="firstName" /* Siempre llamarlo igual que el initialValue */
        name="firstName" /* Siempre llamarlo igual que el initialValue */
        type="text"
        onChange={formik.handleChange} /* Valida ante cualquier cambio */
        onBlur={
          formik.handleBlur
        } /* Valida cuando hago foco o me posiciono sobre el input */
        value={
          formik.values.firstName
        } /* Valor que apunta hacia si mismo el estado de value */
      />
      {formik.touched.firstName &&
      formik.errors
        .firstName /* Si el campo fue tocado y ademas tiene errores, muestra el error */ ? (
        <div>{formik.errors.firstName}</div>
      ) : null}
      <label>Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}
      <label>Email</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
