import { render, screen } from '@testing-library/react';
import App from './App';

test('should render learn react link header', () => {
	render(<App />);
	const linkElement = screen.getByText(/Learn React Unit testing with Jest/i);
	expect(linkElement).toBeInTheDocument();
});
