import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const RadiatorOffIcon = ({
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
    <path d='M3.28,2L2,3.27L4.77,6.04L5.64,7.39L4.22,9.6L5.95,10.5L7.23,8.5L10.73,12H4C2.9,12 2,12.9 2,14V22H4V20H18.73L20,21.27V22H22V20.73L22,20.72V20.72L3.28,2M7,17C7,17.55 6.55,18 6,18C5.45,18 5,17.55 5,17V15C5,14.45 5.45,14 6,14C6.55,14 7,14.45 7,15V17M11,17C11,17.55 10.55,18 10,18C9.45,18 9,17.55 9,17V15C9,14.45 9.45,14 10,14C10.55,14 11,14.45 11,15V17M15,17C15,17.55 14.55,18 14,18C13.45,18 13,17.55 13,17V15C13,14.79 13.08,14.61 13.18,14.45L15,16.27V17M16.25,9.5L17.67,7.3L16.25,5.1L18.25,2L20,2.89L18.56,5.1L20,7.3V7.31L18,10.4L16.25,9.5M22,14V18.18L19,15.18V15C19,14.45 18.55,14 18,14C17.95,14 17.9,14 17.85,14.03L15.82,12H20C21.11,12 22,12.9 22,14M11.64,7.3L10.22,5.1L12.22,2L13.95,2.89L12.53,5.1L13.95,7.3L13.94,7.31L12.84,9L11.44,7.62L11.64,7.3M7.5,3.69L6.1,2.28L6.22,2.09L7.95,3L7.5,3.69Z' />
  </Svg>
)

RadiatorOffIcon.displayName = 'RadiatorOffIcon'

RadiatorOffIcon.defaultProps = {
  size: 24
}

export default RadiatorOffIcon