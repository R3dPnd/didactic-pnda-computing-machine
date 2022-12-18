import { logRoles, render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct inital color', () => {
  const { container } = render(<App />);
  logRoles(container);

  // find an element with role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
});

test('button turns blue when clicked', () => {
  const { container } = render(<App />);
  logRoles(container);

  // find an element with role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  // click the button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
  // expect the text to change as wellw
  expect(colorButton).toHaveTextContent('Change to red');
})

test('inital conditions', () => {
  render(<App/>);

  // check that the button starts out enables
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorButton).toBeEnabled();

  //check that the checkbox starts out unchecked
  const disableCheckbox = screen.getByRole('checkbox');
  expect(disableCheckbox).not.toBeChecked();

})