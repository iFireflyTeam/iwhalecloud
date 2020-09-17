import * as React from 'react'
import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import Button, {ButtonShape,ButtonSize,ButtonType} from "./index";


const defaultProps =  {
  onClick: jest.fn()
}

// const testProps: ButtonProps = {
  // btnType: ButtonType.danger
// }

test('test out button', () => {
  const wrapper = render(<Button>Nice</Button>)
  const element = wrapper.queryByText('Nice')
  expect(element).toBeTruthy()
})


describe('test Button component', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button {...defaultProps}>Nice</Button>)
    const element = wrapper.queryByText('Nice')
    // expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    // expect(wrapper).toHaveClass('btn btn-default')
    // todo 5-5
    // fireEvent.click(element)
    // expect(defaultProps.onClick).toHaveBeenCalled()

  })

  it('should render the correct component base on different props', () => {
    const wrapper = render(<Button>Nice</Button>)
    const element = wrapper.queryByText('Nice')
    // expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    // expect(wrapper).toHaveClass('btn btn-default')
  })

  it('should render the correct component base on different props', () => {
    const wrapper = render(<Button>Nice</Button>)
    const element = wrapper.queryByText('Nice')
    // expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    // expect(wrapper).toHaveClass('btn btn-default')
  })
})
