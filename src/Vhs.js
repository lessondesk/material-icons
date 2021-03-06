import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const VhsIcon = ({
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
    <path d='M4,6C2.9,6 2,6.9 2,8V16C2,17.1 2.9,18 4,18H20C21.1,18 22,17.1 22,16V8C22,6.9 21.1,6 20,6H4M4.54,10H7V14H4.54C4.19,13.39 4,12.7 4,12C4,11.3 4.19,10.61 4.54,10M9,10H15V14H9V10M17,10H19.46C19.81,10.61 20,11.3 20,12C20,12.7 19.81,13.39 19.46,14H17V10Z' />
  </Svg>
)

VhsIcon.displayName = 'VhsIcon'

VhsIcon.defaultProps = {
  size: 24
}

export default VhsIcon