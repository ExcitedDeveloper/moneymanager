import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  test('renders Vite and React heading', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { name: /vite \+ react/i });
    expect(heading).toBeInTheDocument();
  });

  test('displays initial count of 0', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /count is 0/i });
    expect(button).toBeInTheDocument();
  });

  test('increments count when button is clicked', async () => {
    const user = userEvent.setup();
    render(<App />);

    const button = screen.getByRole('button', { name: /count is 0/i });
    await user.click(button);

    expect(screen.getByRole('button', { name: /count is 1/i })).toBeInTheDocument();
  });

  test('increments count multiple times when button is clicked repeatedly', async () => {
    const user = userEvent.setup();
    render(<App />);

    const button = screen.getByRole('button', { name: /count is/i });

    await user.click(button);
    await user.click(button);
    await user.click(button);

    expect(screen.getByRole('button', { name: /count is 3/i })).toBeInTheDocument();
  });

  test('displays Vite logo with correct alt text', () => {
    render(<App />);
    const viteLogo = screen.getByAltText(/vite logo/i);
    expect(viteLogo).toBeInTheDocument();
  });

  test('displays React logo with correct alt text', () => {
    render(<App />);
    const reactLogo = screen.getByAltText(/react logo/i);
    expect(reactLogo).toBeInTheDocument();
  });
});
