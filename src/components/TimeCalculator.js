import React, { useState } from 'react';
import axios from "axios";
import TimeValidationOnTheFly from "./../util/TimeValidation";
import History from "./time_calculator/History";
import LoadingSubmitButton from './time_calculator/LoadingButton';
import InputTime from './time_calculator/InputTime';
import ErrorMessage from './time_calculator/ErrorMessage';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export default function TimeCalculator() {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [history, setHistory] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const validateStartTime = (e) => TimeValidationOnTheFly(e.target.value, setStartTime);
  const validateEndTime = (e) => TimeValidationOnTheFly(e.target.value, setEndTime);

  async function handleSubmit(e)  {
    e.preventDefault();

    setErrorMessage(null); // limpa erro anterior caso exista
    setLoading(true);
    try {
      // constroi a url para chamada
      const startEncoded = encodeURI(startTime);
      const endEncoded = encodeURI(endTime);
      const uri = `/time-calculator/calculate/${startEncoded}/${endEncoded}`;
      const url = BACKEND_URL + uri;

      const res = await axios.get(url); // obtém o cálculo à partir da API

      setHistory([{ ...res.data, start: startTime, end: endTime }, ...history]);

      // limpa campos
      setStartTime("");
      setEndTime("");
    } catch (error) {
      setErrorMessage("Falha ao realizar operação, tente novamente mais tarde.");
    }
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='card-panel z-depth-5' style={{ marginTop: "50px" }}>
        <div className="row">
          <div className="col s12">
            <h6 className='center'>Informe o período de trabalho:</h6>
          </div>
          <InputTime id="start-time" label="Início" className="offset-s2"
            disabled={isLoading}
            value={startTime}
            onChange={validateStartTime}
          />
          <InputTime id="end-time" label="Fim"
            disabled={isLoading}
            value={endTime}
            onChange={validateEndTime}
          />
          <div className="col s8 offset-s2">
            <LoadingSubmitButton isLoading={isLoading} />
          </div>
          {errorMessage && (<ErrorMessage message={errorMessage} />)}
        </div>
        <div className="row">
          <div className="col s12" style={{ marginTop: "20px" }}>
            <History
              items={history}
              footerMessage="* ao recarregar a página o histórico será perdido"
            />
          </div>
        </div>
      </div>
    </form>
  );
}