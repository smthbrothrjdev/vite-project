import App from './App';

import { render, screen, cleanup } from './utils/MagicWrapper';

describe('when application loads', () => {
  it('should title says vote+react', () => {
    render(<App />);
    expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument();
  });
});
