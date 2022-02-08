import {render,screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from '../index'

beforeEach(() => {
    render(<Counter />);
})

it('should show an initial count of 0',()=> {
    expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.getByTestId('count')).toBeInTheDocument();
    //toHaveTextContent will check the child have content that we are passing inside it
    expect(screen.getByTestId('count')).toHaveTextContent('0');
})

it('should increase count when Incremement is clicked', () => {
    const btn = screen.getByRole('button', {name:'Increment'})
    userEvent.click(btn);
    expect(btn).toBeInTheDocument();
    expect(screen.getByTestId('count')).toHaveTextContent('1');
})

it('should decrease count when Decrement button is clicked', ()=> {
    const btn = screen.getByRole('button', {name:'Decrement'})
    userEvent.click(btn);
    userEvent.click(btn);
    expect(btn).toBeInTheDocument();
    expect(screen.getByTestId('count')).toHaveTextContent('-2')
})