import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BugCheckOutlineIcon = ({
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
    <path d='M18,7H15.19C14.74,6.2 14.12,5.5 13.37,5L15,3.41L13.59,2L11.42,4.17C10.96,4.06 10.5,4 10,4C9.5,4 9.05,4.06 8.59,4.17L6.41,2L5,3.41L6.62,5C5.87,5.5 5.26,6.21 4.81,7H2V9H4.09C4.03,9.33 4,9.66 4,10V11H2V13H4V14C4,14.34 4.03,14.67 4.09,15H2V17H4.81C6.26,19.5 9.28,20.61 12,19.65C12,19.43 12,19.22 12,19C12,18.43 12.09,17.86 12.25,17.31C11.59,17.76 10.8,18 10,18C7.79,18 6,16.21 6,14V10C6,7.79 7.79,6 10,6C12.21,6 14,7.79 14,10V14C14,14.19 14,14.39 13.95,14.58C14.54,14.04 15.24,13.62 16,13.35V13H18V11H16V10C16,9.66 15.97,9.33 15.91,9H18V7M21.34,16L17.75,19.59L16.16,18L15,19.16L17.75,22.16L22.5,17.41L21.34,16M12,9V11H8V9H12M12,13V15H8V13H12Z' />
  </Svg>
)

BugCheckOutlineIcon.displayName = 'BugCheckOutlineIcon'

BugCheckOutlineIcon.defaultProps = {
  size: 24
}

export default BugCheckOutlineIcon