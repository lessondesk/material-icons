import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const KeyboardCloseIcon = ({
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
    <path d='M12,23L16,19H8M19,8H17V6H19M19,11H17V9H19M16,8H14V6H16M16,11H14V9H16M16,15H8V13H16M7,8H5V6H7M7,11H5V9H7M8,9H10V11H8M8,6H10V8H8M11,9H13V11H11M11,6H13V8H11M20,3H4C2.89,3 2,3.89 2,5V15C2,16.1 2.9,17 4,17H20C21.1,17 22,16.1 22,15V5C22,3.89 21.1,3 20,3Z' />
  </Svg>
)

KeyboardCloseIcon.displayName = 'KeyboardCloseIcon'

KeyboardCloseIcon.defaultProps = {
  size: 24
}

export default KeyboardCloseIcon