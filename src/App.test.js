import {render, screen} from '@testing-library/react'
import App from './App'
//
it('should show an image', () => {
  render(<App />);
  const img =screen.getByAltText('logo');
  expect(img).toBeInTheDocument()

})

it('should show an element with a role attribute',() => {
  render(<App/>);
  //We are not assigning element to varibale instead of that directly using inside expect function
  //trying to get a particular element using it's role attribute (role can be img ,heading etc...)
  expect(screen.getByRole('link', { name: 'Learn React'})).toBeInTheDocument();
  expect(screen.getByRole('img')).toBeInTheDocument();
  expect(screen.getByRole('button', {pressed: true})).toBeInTheDocument();

})

