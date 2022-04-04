import React from 'react';

export default function Content(props) {
  return (
    <main className='grey lighten-3'>
      <div className='container'>
        <div className='row'>
          <div className="col s12 m8 l6 offset-m2 offset-l3">
            {props.children}
          </div>
        </div>
      </div>
    </main>
  );
}