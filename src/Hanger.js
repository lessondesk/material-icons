import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const HangerIcon = ({
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
    <path d='M20.76,16.34H20.75C21.5,16.77 22,17.58 22,18.5C22,19.88 20.88,21 19.5,21H4.5C3.12,21 2,19.88 2,18.5C2,17.58 2.5,16.77 3.25,16.34H3.24L11,11.86C11,11.86 11,11 12,10C13,10 14,9.1 14,8C14,6.9 13.1,6 12,6C10.9,6 10,6.9 10,8H8C8,5.79 9.79,4 12,4C14.21,4 16,5.79 16,8C16,9.86 14.73,11.42 13,11.87L20.76,16.34M4.5,19V19H19.5V19C19.67,19 19.84,18.91 19.93,18.75C20.07,18.5 20,18.21 19.75,18.07L12,13.59L4.25,18.07C4,18.21 3.93,18.5 4.07,18.75C4.16,18.91 4.33,19 4.5,19Z' />
  </Svg>
)

HangerIcon.displayName = 'HangerIcon'

HangerIcon.defaultProps = {
  size: 24
}

export default HangerIcon