import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BabyIcon = ({
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
    <path d='M18.5,4C19.88,4 21,5.12 21,6.5C21,7.88 19.88,9 18.5,9C17.12,9 16,7.88 16,6.5C16,5.12 17.12,4 18.5,4M4.5,20C3.67,20 3,19.33 3,18.5C3,17.67 3.67,17 4.5,17H11.5C12.33,17 13,17.67 13,18.5C13,19.33 12.33,20 11.5,20H4.5M16.09,19L14.69,15H11L6.75,10.75C6.75,10.75 9,8.25 12.5,8.25C15.5,8.25 15.85,9.25 16.06,9.87L18.92,18C19.2,18.78 18.78,19.64 18,19.92C17.22,20.19 16.36,19.78 16.09,19Z' />
  </Svg>
)

BabyIcon.displayName = 'BabyIcon'

BabyIcon.defaultProps = {
  size: 24
}

export default BabyIcon