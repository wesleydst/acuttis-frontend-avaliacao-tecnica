import React from 'react';

export default function Header() {
  return (
    <>
      <div id='modal-rules' className='modal'>
        <div className='modal-content'>
          <h5>Regras da aplicação</h5>
          <p>
            Você deve informar um período de trabalho (período = hora inicial e hora final)
            E clicar no botão "CALCULAR HORAS". Assim o sistema vai identificar a
            quantidade de horas que foram trabalhadas em horário diurno e também
            as que foram trabalhadas em horário noturno.
          </p>
          <p>
            Sendo que:
            <br />
            - 05:00 como início de período considera-se como período diurno e
            22:00 como início de período considera-se como período noturno.
            <br />
            - Informar um período começando e terminando no mesmo horário é inválido,
            pois se considerar que os horários são do mesmo dia não faz sentido e
            se a hora final fosse o dia seguinte daria um intervalo de 24h, o que não
            é permitido pela regra de negócio.
          </p>
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