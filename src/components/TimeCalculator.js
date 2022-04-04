import React from 'react';

export default function TimeCalculator() {
  const tdPadding = { padding: "5px" };
  return (
    <form>
      <div className='card-panel z-depth-5' style={{ marginTop: "50px" }}>
        <div className="row">
          <div className="col s12">
            <h6 className='center'>Informe o período de trabalho:</h6>
          </div>
          <div className="input-field col s4 offset-s2">
            <input
              id='start-time'
              type="text"
              className="validate"
              placeholder="HH:mm" />
            <label htmlFor="start-time">Início</label>
          </div>
          <div className="input-field col s4">
            <input
              id='end-time'
              type="email"
              className="validate"
              placeholder="HH:mm" />
            <label htmlFor="end-time">Fim</label>
          </div>
          <div className="col s8 offset-s2">
            <button
              className="btn waves-effect waves-light pink accent-2"
              style={{ width: "100%" }}
              type="submit"
            >
              Calcular horas
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
                <tr style={{ fontSize: "18px" }}>
                  <td style={tdPadding}>19:00 até 23:00</td>
                  <td style={tdPadding}>03:00</td>
                  <td style={tdPadding}>01:00</td>
                </tr>
                <tr>
                  <td style={tdPadding}>19:00 até 23:00</td>
                  <td style={tdPadding}>03:00</td>
                  <td style={tdPadding}>01:00</td>
                </tr>
                <tr>
                  <td style={tdPadding}>19:00 até 23:00</td>
                  <td style={tdPadding}>03:00</td>
                  <td style={tdPadding}>01:00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </form>
  );
}