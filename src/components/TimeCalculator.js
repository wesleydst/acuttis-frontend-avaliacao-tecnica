import React, { useState } from 'react';
import axios from "axios";
import TimeValidationOnTheFly from "./../util/TimeValidation";
import History from "./time_calculator/History";
import LoadingSubmitButton from './time_calculator/LoadingButton';
import InputTime from './time_calculator/InputTime';

export default function TimeCalculator() {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const validateStartTime = (e) => TimeValidationOnTheFly(e.target.value, setStartTime);
  const validateEndTime = (e) => TimeValidationOnTheFly(e.target.value, setEndTime);

  function handleSubmit(e) {
    e.preventDefault();
    const startEncoded = encodeURI(startTime);
    const endEncoded = encodeURI(endTime);
    const endpoint = `/time-calculator/calculate/${startEncoded}/${endEncoded}`;
    setLoading(true);
    axios.get(BACKEND_URL + endpoint)
      .then(res => {
        setHistory([{ ...res.data, start: startTime, end: endTime }, ...history]);
        setStartTime("");
        setEndTime("");
        setLoading(false);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='card-panel z-depth-5' style={{ marginTop: "50px" }}>
        <div className="row">
          <div className="col s12">
            <h6 className='center'>Informe o período de trabalho:</h6>
          </div>
          <InputTime id="start-time" label="Início" className="offset-s2"
            disabled={loading}
            value={startTime}
            onChange={validateStartTime}
          />
          <InputTime id="end-time" label="Fim"
            disabled={loading}
            value={endTime}
            onChange={validateEndTime}
          />
          <div className="col s8 offset-s2">
            <LoadingSubmitButton isLoading={loading} />
          </div>
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