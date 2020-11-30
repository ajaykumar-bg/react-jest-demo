import React from 'react';
import ReactDOM from 'react-dom';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Button from '../../button';

afterEach(cleanup);

it('should render without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Button />, div);
});

it('should render with passed label', () => {
	const label = 'click me';
	const { getByTestId } = render(<Button label={label} />);
	expect(getByTestId('button')).toHaveTextContent(label);
});
