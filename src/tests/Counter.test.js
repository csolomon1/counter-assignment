// import necessary react testing library helpers here
// import the Counter component here

import Counter from '../components/Counter';
import {render, fireEvent} from '@testing-library/react'




let getByTestId, getByText;



beforeEach(() => {
  const result = render(<Counter />);
  getByText = result.getByText;
  getByTestId = result.getByTestId;
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = getByText('Counter');
  expect(counterMessage).toBeInTheDocument();

});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCount = getByTestId('count');
  expect(initialCount).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above

  //things to match
  const countIncrements = getByTestId('count');
  const incrementButton = getByText('+');

  fireEvent.click(incrementButton);
  expect(countIncrements).toHaveTextContent('1');

});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above

  //things to match
  const countDecrements = getByTestId('count');
  const decrementButton = getByText('-');

  fireEvent.click(decrementButton);
  expect(countDecrements).toHaveTextContent('-1');
});
