import React, { useState, useEffect } from "react";
import StepOneConsulente from "./singUpConsulente/StepOneConsulente";
import StepTwoConsulente from "./singUpConsulente/StepTwoConsulente";
import StepZero from "./StepZero";
import StepThreeConsulente from "./singUpConsulente/StepThreeConsulente";
import {register, login} from "../../actions/auth";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from "react-router-dom";

function SingUp() {
  const { message } = useSelector(state => state.message);
const navigate=useNavigate();
  const dispatch = useDispatch();
  const [successful, setSuccessful] = useState(false);
  //manterrà i valori utili che verranno aggiunti nei vari step del form
  const [data, setData] = useState({
    username:"",
    cognome: "",
    nome: "",
    email: "",
    telefono: "",
    password: "",
    acceptedTos: false,
  });

  //indica qual è lo step corrente: per ora i valori da 0 a 4 sono per il consulente, sono da aggiungere i valori per l'azienda
  const [currentStep, setCurrentStep] = useState(0);

  //funzione per andare allo step successivo dallo step zero
  const handleNextStepZero = (nextStep = false) => {
    //se si scegli consuente si incrementa di 1 altrimenti si passa allo sgtato 5 il primo dell'azienda
    if (nextStep) {
      setCurrentStep((prev) => 1);
    } else {
      setCurrentStep((prev) => 5);
    }
  };
  //una volta terminata
  const makeRequest = (formData) => {
    /*console.log(formData);
    JSON.stringify(formData);*/
    setSuccessful(false);
    dispatch(register(formData.username, formData.email, formData.password, formData.telefono, "consulente"))
        .then(() => {
          setSuccessful(true);
          dispatch(login(formData.username, formData.password))
        })
        .catch(() => {
          setSuccessful(false);
        });
  };
  const handleNextStep = (newData, final = false) => {
    if(currentStep===1) {
      setData(newData);
    }
    if (final) {
      makeRequest(newData);
      navigate("/congratulazioni");
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };
  const handlePrevStep = (newData, goToZero = false) => {
    if(currentStep===1) {
      setData( newData);
    }
    if (goToZero) {
      setCurrentStep( 0);
      return;
    }
    setCurrentStep((prev) => prev - 1);
  };
  //vettore che contiene i vari step: verrà indicizzato con currenteStep
  const steps = [
    <StepZero next={handleNextStepZero} data={data} />,
    <StepOneConsulente
      next={handleNextStep}
      prev={handlePrevStep}
      data={data}
    />,
    <StepTwoConsulente
      next={handleNextStep}
      prev={handlePrevStep}
      data={data}
    />,
    <StepThreeConsulente
      next={handleNextStep}
      prev={handlePrevStep}
      data={data}
    />,
  ];

  useEffect(() => {
    window.scrollTo({
      top: 1,
      behavior: 'smooth',
    });
  }, [currentStep]);
  return (
      <>
        <div>{steps[currentStep]}</div>
      </>
  );
}

export default SingUp;
