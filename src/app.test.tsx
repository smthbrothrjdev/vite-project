import App from './App';

import { render, screen } from './utils/MagicWrapper';

describe('when application loads', () => {
  test('the title says vote+react', () => {
    render(<App />);
    expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument();
  });
});
