import React from 'react';
import ReactDOM from 'react-dom';
import { Greet } from './../Greet';
import { render , cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import renderer from 'react-test-renderer';

afterEach(cleanup);

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Greet />,div);
})

it('renders file properly', () => {
    const { getByTestId } = render(<Greet name = "Bruce" heroName = "Batman"/>);
    expect(getByTestId('greetings')).toHaveTextContent("Hi Bruce a.k.a Batman");
})

it('renders file properly', () => {
    const { getByTestId } = render(<Greet name = "Diana" heroName = "Wonder woman"/>);
    expect(getByTestId('greetings')).toHaveTextContent("Hi Diana a.k.a Wonder woman");
})

it('matches snapshot', () => {
    const tree = renderer.create(<Greet name = "Diana" heroName = "Wonder woman"/>).toJSON();
    expect(tree).toMatchSnapshot();
})

it('matches snapshot', () => {
    const tree = renderer.create(<Greet name = "Bruce" heroName = "Batman"/>).toJSON();
    expect(tree).toMatchSnapshot();
})