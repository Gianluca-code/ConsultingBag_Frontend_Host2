import * as yup from "yup";


export const esperienzeSchema = yup.object().shape({
  dataInizio: yup
    .date()
    .max(new Date(), "Non può esistere un'esperienza lavorativa ancora non iniziata")
    .required("Campo obbligatorio"),
  
  dataFine: yup
    .date()
    .min(yup.ref('dataInizio'), "Non può essere antecedente alla data di inizio"),
    //non è required

  nomeAzienda: yup
    .string()
    .required("Inserire il nome dell'azienda committente")
    .max(200, "Stringa troppo lunga"),
  
  descrizioneAttivita: yup
    .string()
    .max(200, "Stringa troppo lunga")

});
