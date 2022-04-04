import './App.css';

export default function App() {
  const tdPadding = { padding: "5px" };
  return (
    <>
      <div className="navbar-fixed">
        <nav className='cyan darken-1'>
          <div className='nav-wrapper container'>
            <a className='brand-logo' href="http://localhost:3000">Acuttis</a>
            <ul className='right'>
              <li>
                <a className='modal-trigger' href="#modal-rules">Ler Regras</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <main className='grey lighten-3'>
        <div className='container'>
          <div className='row'>
            <div className="col s12 m8 l6 offset-m2 offset-l3">
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
            </div>
          </div>
        </div>
      </main>
      <footer className='page-footer cyan darken-3'>
        <div className='container'>
          <div className='row'>
            <div className='col s4'>
              <p>Avaliação Técnica</p>
            </div>
            <div className="col s4">
              <p className='center'>Feito com <a className='white-text' href="https://materializecss.com">Materialize</a></p>
            </div>
            <div className="col s4">
              <p className='right'>Wesley Tavares</p>
            </div>
          </div>
        </div>
      </footer>

      <div id='modal-rules' className='modal'>
        <div className='modal-content'>
          <h5>Regras da aplicação</h5>
          <p>Descrição...</p>
        </div>
        <div className='modal-footer'>
          <a className='modal-close waves-effect waves-default btn-flat' href="#!">Fechar</a>
        </div>
      </div>
    </>
  );
}
