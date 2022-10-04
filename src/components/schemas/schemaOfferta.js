import * as yup from "yup";


export const schemaOfferta = yup.object().shape({
  dataInizioDisponibilita: yup
    .date()
    .min(new Date(), "Non può essere antecedente ad oggi")
    .max(new Date((new Date()).getFullYear()+2, (new Date()).getMonth()), "Massimo nei prossimi due anni a partire da ora")
    .required("Campo obbligatorio"),
  
  dataFineDisponibilita: yup
    .date()
    .min(yup.ref('dataInizioDisponibilita'), "Non può essere antecedente alla data di inizio disponibilità")
    .max(new Date((new Date()).getFullYear()+4, (new Date()).getMonth()), "Massimo nei successivi due anni a partire dalla data di inizio, non valorizzare se non necessaria"),
    //non è required

  areaProfessionale: yup
    .string()
    .required("Inserire area professionale"),
  
  conoscenzeMesseADisposizione: yup
    .string()
    .max(150, "Stringa troppo lunga"),

  ruoloDesiderato: yup
    .string()
    .required("Inserire ruolo desiderato"),
  
  tariffaGiornalieraDesiderata: yup
    .number()
    .typeError("Inserire un valore decimale (il simbolo decimale è il punto \".\")"),

  disponibilitaTempo: yup
    .string(),

  noteSullaDisponibilita: yup
    .string()
    .max(150, "Stringa troppo lunga"),

  tariffaTrattabile: yup
    .bool()

});
