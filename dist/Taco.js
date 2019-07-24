import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const TacoIcon = ({
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
    <path d='M19,18H5C2.79,18 1,16.21 1,14C1,9.58 4.58,6 9,6C10.06,6 11.07,6.21 12,6.58C12.93,6.21 13.94,6 15,6C19.42,6 23,9.58 23,14C23,16.21 21.21,18 19,18M3,14C3,15.1 3.9,16 5,16C6.1,16 7,15.1 7,14C7,11.63 8.03,9.5 9.67,8.04L9,8C5.69,8 3,10.69 3,14M19,16C20.1,16 21,15.1 21,14C21,10.69 18.31,8 15,8C11.69,8 9,10.69 9,14C9,14.73 8.81,15.41 8.46,16H19Z' />
  </Svg>
)

TacoIcon.displayName = 'TacoIcon'

TacoIcon.defaultProps = {
  size: 24
}

export default TacoIcon