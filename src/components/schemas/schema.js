import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const schema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username troppo corto")
    .required("Campo obbligatorio"),
  alias: yup
    .string()
    .matches(/^[A-Za-z ]*$/, 'Inserisci alias valido')
    .max(40)
    .required("Campo obbligatorio"),
  cognome: yup
    .string()
    .matches(/^[A-Za-z ]*$/, 'Inserisci cognome valido')
    .max(40)
    .required("Campo obbligatorio"),
  nome: yup
    .string()
    .matches(/^[A-Za-z ]*$/, 'Inserisci nome valido')
    .max(40)
    .required("Campo obbligatorio"),
  indirizzo: yup
    .string()
    .min(3, 'Inserisci un indirizzo valido')
    .max(40)
    .required("Campo obbligatorio"),
  cap: yup
    .string()
    .matches(/^[0-9]{5}$/, 'Inserisci cap valido')
    .required("Campo obbligatorio"),
  cf: yup
    .string()
    .matches(/^[A-Z]{6}\d{2}[A-Z]\d{2}[A-Z]\d{3}[A-Z]$/, 'Inserisci cf valido')
    .required( "Campo obbligatorio"),
  iva: yup
    .string()
    .matches(/^[0-9]{11}$/, 'Inserisci partita iva valida'),
  telefono: yup
      .string()
      .matches(/^((00|\+)39[. ]??)??3\d{2}[. ]??\d{7}$/, 'Inserisci numero di telefono valido')
    .required("Campo obbligatorio"),
  acceptedTos: yup
    .boolean()
    .oneOf([true], "Si prega di accettare i termini di servizio"),
  email: yup.string().email("Inserisci email valida").required("Campo obbligatorio"),
  password: yup
    .string()
    .min(5, "Password troppo corta")
    .matches(passwordRules, { message: "Password troppo debole" })
    .required("Campo obbligatorio"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Le password devono corrispondere")
    .required("Campo obbligatorio"),

  tariffa:yup
  .number()
  .typeError("Inserire un valore decimale (il simbolo decimale è il punto \".\")"),

});
