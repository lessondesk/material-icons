import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MotherNurseIcon = ({
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
    <path d='M12,2C13.66,2 15,3.34 15,5C15,6.66 13.66,8 12,8C10.34,8 9,6.66 9,5C9,3.34 10.34,2 12,2M20,18L18,12.56C17.65,11.57 17.34,10.71 16,10C14.62,9.3 13.62,9 12,9C10.37,9 9.38,9.3 8,10C6.66,10.71 6.35,11.57 6,12.56L4,18C3.68,19.35 6.36,20.44 8.11,21.19V19C8.11,18.05 8.97,17.38 10.69,16.97C10.85,16.93 11,16.91 11.12,16.89C10.58,16.07 10.36,15.34 10.34,15.28L12.11,14.68C12.12,14.7 12.63,16.27 13.84,17.06C14.05,17.13 14.26,17.21 14.46,17.3C15.23,17.64 15.69,18.08 15.84,18.61C14.5,19.14 13.22,19.41 12,19.41L11,19.31V21.94L12,22C13.37,22 14.67,21.72 15.89,21.19C17.64,20.44 20.25,19.13 20,18M15.5,17C14.67,17 14,16.33 14,15.5C14,14.67 14.67,14 15.5,14C16.33,14 17,14.67 17,15.5C17,16.33 16.33,17 15.5,17Z' />
  </Svg>
)

MotherNurseIcon.displayName = 'MotherNurseIcon'

MotherNurseIcon.defaultProps = {
  size: 24
}

export default MotherNurseIcon