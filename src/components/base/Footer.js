import React from 'react';

export default function Footer() {
  return (
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
  );
}