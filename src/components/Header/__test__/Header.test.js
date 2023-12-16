import { render, screen } from '@testing-library/react';
import Header from '../Header';

{/* tutorial content */}

// get by

test('should render same text passed into title prop', async () => {
  render(<Header title='My Header'/>);
  const headerElement = screen.getByText(/My Header/i);
  expect(headerElement).toBeInTheDocument();
});

// test('should render same text passed into title prop', async () => {
//   render(<Header title='My Header'/>);
//   const headerElement = screen.getByRole('heading');
//   expect(headerElement).toBeInTheDocument();
// });

test('should render same text passed into title prop', async () => {
  render(<Header title='My Header'/>);
  const headerElement = screen.getByRole('heading', { name: 'My Header'});
  expect(headerElement).toBeInTheDocument();
});

test('should render same text passed into title prop', async () => {
  render(<Header title='My Header'/>);
  const headerElement = screen.getByTitle('head');
  expect(headerElement).toBeInTheDocument();
});

test('should render same text passed into title prop', async () => {
  render(<Header title='My Header'/>);
  const headerElement = screen.getByTestId('1');
  expect(headerElement).toBeInTheDocument();
});

// find by

// async + await
test('should render same text passed into title prop', async () => {
  render(<Header title='My Header'/>);
  const headerElement = await screen.findByText(/My Header/i);
  expect(headerElement).toBeInTheDocument();
});

// query by
test('check if name not exist in document', async () => {
  render(<Header title='My Header'/>);
  const headerElement = screen.queryByText(/bob/i);
  expect(headerElement).not.toBeInTheDocument();
});

// get all
// check length to be equal to
test('check if heading element match count', async () => {
  render(<Header title='My Header'/>);
  const headerElements = screen.getAllByRole('heading');
  expect(headerElements.length).toBe(3);
});