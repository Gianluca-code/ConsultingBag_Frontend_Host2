import * as yup from "yup";

export const denyListSchema = yup.object().shape({

    piva: yup
    .string()
    .matches(/^[0-9]{11}$/, 'Inserisci partita iva valida')
    .required("Campo obbligatorio"),

    motivazione: yup
    .string()
    .max(150, "Stringa troppo lunga")

});