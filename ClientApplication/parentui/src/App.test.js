import { render, screen } from '@testing-library/react';
import App from './App';
import  HomeComponent from "./HomeComponent/HomeComponent";


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

