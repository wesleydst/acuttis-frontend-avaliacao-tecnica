import { render, screen } from '@testing-library/react';
import App from './App';

test('Renderiza h3 com a mensagem "Hello Universe!"', () => {
  render(<App />);
  const h3Element = screen.getByText(/Hello Universe!/i);
  expect(h3Element).toBeInTheDocument();
});
