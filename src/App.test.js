import {render, screen} from '@testing-library/react'
import App from './App'

beforeEach(() => {
  //before each test will render app everytime
  render(<App/>);
})

//

it('should show an image', () => {
  // render(<App />);
  const img =screen.getByAltText('logo');
  expect(img).toBeInTheDocument()

})

it('should show an element with a role attribute',() => {
  // render(<App/>);
  //We are not assigning element to varibale instead of that directly using inside expect function
  //trying to get a particular element using it's role attribute (role can be img ,heading etc...)
  expect(screen.getByRole('link', { name: 'Learn React'})).toBeInTheDocument();
  expect(screen.getByRole('img')).toBeInTheDocument();
  expect(screen.getByRole('button', {pressed: true})).toBeInTheDocument();

})

it('should show text in document', () => {
  // render(<App/>);
  expect(screen.getByText('Learn React')).toBeInTheDocument();

})

it('should have a title', () => {
  // render(<App/>);
  expect(screen.getByTitle('tooltip')).toBeInTheDocument(); //search for particular element that has a title attribute
})

it('testing component using testById', () => {
  // render(<App/>);
  //getByTestId looks for component with attribute data-testid
  expect(screen.getByTestId('link_any_thing')).toBeInTheDocument(); //When component is deeply nested you can use this for any component
})


//looks for form element with particular value 
it('should have a value', () => {
  expect(screen.getByDisplayValue('Gaurav')).toBeInTheDocument();
})
it('should have a value', () => {
  expect(screen.getByDisplayValue('anything')).toBeInTheDocument();
})

//it looks for an input element with particular placeholder 
it('should have a placeholder text', () => {
  expect(screen.getByPlaceholderText('Enter name')).toBeInTheDocument();
})


//it looks for particular label with text provided to it and relate that label to form input

it('should have a label text',()=>{
  expect(screen.getByLabelText('Name')).toBeInTheDocument();
})
it('should have a label text',()=>{
  expect(screen.getByLabelText('Age')).toBeInTheDocument();
})
