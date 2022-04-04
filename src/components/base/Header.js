import React from 'react';

export default function Header() {
  return (
    <>
      <div id='modal-rules' className='modal'>
        <div className='modal-content'>
          <h5>Regras da aplicação</h5>
          <p>Descrição...</p>
        </div>
        <div className='modal-footer'>
          <a className='modal-close waves-effect waves-default btn-flat' href="#!">Fechar</a>
        </div>
      </div>
      <div className="navbar-fixed">
        <nav className='cyan darken-1'>
          <div className='nav-wrapper container'>
            <a className='brand-logo' href="#!">Acuttis</a>
            <ul className='right'>
              <li>
                <a className='modal-trigger' href="#modal-rules">Ler Regras</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}