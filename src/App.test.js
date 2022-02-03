import {render, screen} from '@testing-library/react'
import App from './App'
//
it('should show an image', () => {
  render(<App />);
  const img =screen.getByAltText('logo');
  expect(img).toBeInTheDocument()

})
