import React, { useState } from 'react';
import axios from "axios";
import TimeValidationOnTheFly from "./../util/TimeValidation";

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

  const tdPadding = { padding: "5px" };

  function History(props) {
    const fontSizeForLast = { fontSize: "18px" };
    const items = props.items.map((item, i) =>
      <tr key={i} style={i === 0 ? fontSizeForLast : {}}>
        <td style={tdPadding}>{item.start} até {item.end}</td>
        <td style={tdPadding}>{convertMinutesToHHmm(item.daytimeInMinutes)}</td>
        <td style={tdPadding}>{convertMinutesToHHmm(item.nocturnalInMinutes)}</td>
      </tr>
    );
    return items;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='card-panel z-depth-5' style={{ marginTop: "50px" }}>
        <div className="row">
          <div className="col s12">
            <h6 className='center'>Informe o período de trabalho:</h6>
          </div>
          <div className="input-field col s4 offset-s2">
            <input
              disabled={loading ? true : false}
              value={startTime}
              onChange={validateStartTime}
              type="text"
              placeholder="HH:mm"
              id='start-time'
            />
            <label htmlFor="start-time">Início</label>
          </div>
          <div className="input-field col s4">
            <input
              disabled={loading ? true : false}
              value={endTime}
              onChange={validateEndTime}
              type="text"
              placeholder="HH:mm"
              id='end-time'
            />
            <label htmlFor="end-time">Fim</label>
          </div>
          <div className="col s8 offset-s2">
            <button
              className={`btn waves-effect waves-light pink accent-2 ${loading ? "disabled" : ""}`}
              style={{ width: "100%" }}
              type="submit"
            >
              {loading && (
                <div className="progress cyan lighten-5" style={{ marginTop: "14px" }}>
                  <div className="indeterminate cyan darken-1"></div>
                </div>
              )}
              {!loading && "Calcular horas"}
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col s12" style={{ marginTop: "20px" }}>
            <table className='striped centered'>
              <caption>Histórico</caption>
              <thead>
                <tr>
                  <th style={tdPadding}>Período</th>
                  <th style={tdPadding}>Diurno</th>
                  <th style={tdPadding}>Noturno</th>
                </tr>
              </thead>
              <tbody>
                <History items={history} />
              </tbody>
              <tfoot>
                <tr>
                  <td className='center' colSpan={3}>
                    <small>* ao recarregar a página o histórico será perdido</small>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </form>
  );
}