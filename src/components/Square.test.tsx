import { render, screen, fireEvent} from '@testing-library/react'
import { SQUARE_STATUS } from '../constants'

import Square from './Square'

const clickHandler = jest.fn()

const EmptySquareProps = {
    id: 10,
    state: SQUARE_STATUS.EMPTY,
    turn: null,
    onClick: clickHandler
}

const BlackSquareProps = {
    id: 11,
    state: SQUARE_STATUS.BLACK,
    turn: 1,
    onClick: clickHandler
}

const WhiteSquareProps = {
    id: 12,
    state: SQUARE_STATUS.WHITE,
    turn: 2,
    onClick: jest.fn()
}

describe('Empty square component', () => {
    test('should render a square', () => {
        render(<Square {...EmptySquareProps}></Square>)
        const square = screen.getByTestId('square')
        expect(square).toBeInTheDocument()
    })

    test('should call the click handler when clicked by user', () => {
        render(<Square {...EmptySquareProps}></Square>)
        const square = screen.getByTestId('square')
        fireEvent.click(square)
        expect(clickHandler).toBeCalled()
    })
})

describe('Black square component', () => {
    test('should render a black stone', () => {
        render(<Square {...BlackSquareProps}></Square>)
        const square = screen.getByTestId('square')
        expect(square).toHaveClass('black')
    })

    test('should not call the click handler when clicked by user', () => {
        render(<Square {...BlackSquareProps}></Square>)
        const square = screen.getByTestId('square')
        fireEvent.click(square)
        expect(clickHandler).not.toBeCalled()
    })
})

describe('White square component', () => {
    test('should have class "white"', () => {
        render(<Square {...WhiteSquareProps}></Square>)
        const square = screen.getByTestId('square')
        expect(square).toHaveClass('white')
    })

    test('should not call the click handler when clicked by user', () => {
        render(<Square {...WhiteSquareProps}></Square>)
        const square = screen.getByTestId('square')
        fireEvent.click(square)
        expect(clickHandler).not.toBeCalled()
    })
})