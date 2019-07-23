import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const NativescriptIcon = ({
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
    <path d='M7.5,3H16.5C19,3 21,5 21,7.5V16.5C21,19 19,21 16.5,21H7.5C5,21 3,19 3,16.5V7.5C3,5 5,3 7.5,3M6,13.5V16.5C6,17.33 6.67,18 7.5,18H9V10.5L15,18H16.5C17.33,18 18,17.33 18,16.5V13.5C18,12.67 18.67,12 19.5,12C18.67,12 18,11.33 18,10.5V7.5C18,6.67 17.33,6 16.5,6H15V13.5L9,6H7.5C6.67,6 6,6.67 6,7.5V10.5C6,11.33 5.33,12 4.5,12C5.33,12 6,12.67 6,13.5Z' />
  </Svg>
)

NativescriptIcon.displayName = 'NativescriptIcon'

NativescriptIcon.defaultProps = {
  size: 24
}

export default NativescriptIcon