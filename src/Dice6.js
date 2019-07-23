import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const Dice6Icon = ({
  size,
  ...props
}) => (
  <Svg
    {...props}
    viewBox='0 0 24 24'
    width={size}
    height={size}
    fill='currentcolor'
  >
    <path d='M5,3H19C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H5C3.9,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3M7,5C5.9,5 5,5.9 5,7C5,8.1 5.9,9 7,9C8.1,9 9,8.1 9,7C9,5.9 8.1,5 7,5M17,15C15.9,15 15,15.9 15,17C15,18.1 15.9,19 17,19C18.1,19 19,18.1 19,17C19,15.9 18.1,15 17,15M17,10C15.9,10 15,10.9 15,12C15,13.1 15.9,14 17,14C18.1,14 19,13.1 19,12C19,10.9 18.1,10 17,10M17,5C15.9,5 15,5.9 15,7C15,8.1 15.9,9 17,9C18.1,9 19,8.1 19,7C19,5.9 18.1,5 17,5M7,10C5.9,10 5,10.9 5,12C5,13.1 5.9,14 7,14C8.1,14 9,13.1 9,12C9,10.9 8.1,10 7,10M7,15C5.9,15 5,15.9 5,17C5,18.1 5.9,19 7,19C8.1,19 9,18.1 9,17C9,15.9 8.1,15 7,15Z' />
  </Svg>
)

Dice6Icon.displayName = 'Dice6Icon'

Dice6Icon.defaultProps = {
  size: 24
}

export default Dice6Icon