import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MonitorLockIcon = ({
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
    <path d='M20.5,13C21.88,13 23,14.12 23,15.5V16C23.55,16 24,16.45 24,17V21C24,21.55 23.55,22 23,22H18C17.45,22 17,21.55 17,21V17C17,16.45 17.45,16 18,16V15.5C18,14.12 19.12,13 20.5,13M20.5,14C19.67,14 19,14.67 19,15.5V16H22V15.5C22,14.67 21.33,14 20.5,14M20,4H2V16H15V18H13V20H15V22H7V20H9V18H2C0.89,18 0,17.1 0,16V4C0,2.89 0.89,2 2,2H20C21.1,2 22,2.9 22,4V11.53C21.41,11.19 20.73,11 20,11V4Z' />
  </Svg>
)

MonitorLockIcon.displayName = 'MonitorLockIcon'

MonitorLockIcon.defaultProps = {
  size: 24
}

export default MonitorLockIcon