import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const SetTopBoxIcon = ({
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
    <path d='M5,15.5C5,15.78 4.78,16 4.5,16H3.5C3.22,16 3,15.78 3,15.5V15H2C1.45,15 1,14.55 1,14V11C1,10.45 1.45,10 2,10H22C22.55,10 23,10.45 23,11V14C23,14.55 22.55,15 22,15H21V15.5C21,15.78 20.78,16 20.5,16H19.5C19.22,16 19,15.78 19,15.5V15H5V15.5M3,12V13H5V12H3M6,12V13H8V12H6M20.5,11.5C19.95,11.5 19.5,11.95 19.5,12.5C19.5,13.05 19.95,13.5 20.5,13.5C21.05,13.5 21.5,13.05 21.5,12.5C21.5,11.95 21.05,11.5 20.5,11.5Z' />
  </Svg>
)

SetTopBoxIcon.displayName = 'SetTopBoxIcon'

SetTopBoxIcon.defaultProps = {
  size: 24
}

export default SetTopBoxIcon