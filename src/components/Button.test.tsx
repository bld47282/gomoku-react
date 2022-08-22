import { render, screen, fireEvent } from '@testing-library/react'

import Button from './Button'

describe('Button component', () => {
    test('should render a button', () => {
        render(<Button>Test Button</Button>)
        const button = screen.getByText('Test Button')
        expect(button).toBeInTheDocument
    })

    test('should call the click handler when clicked by user', () => {
        const clickHandler = jest.fn()
        render(<Button onClick={clickHandler}>Test Button</Button>)
        const button = screen.getByText('Test Button')
        fireEvent.click(button)
        expect(clickHandler).toBeCalled()
    })
})