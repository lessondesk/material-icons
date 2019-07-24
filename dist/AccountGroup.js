import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const AccountGroupIcon = ({
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
    <path d='M12,5.5C13.93,5.5 15.5,7.07 15.5,9C15.5,10.93 13.93,12.5 12,12.5C10.07,12.5 8.5,10.93 8.5,9C8.5,7.07 10.07,5.5 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14C3.34,14 2,12.66 2,11C2,9.34 3.34,8 5,8M19,8C20.66,8 22,9.34 22,11C22,12.66 20.66,14 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z' />
  </Svg>
)

AccountGroupIcon.displayName = 'AccountGroupIcon'

AccountGroupIcon.defaultProps = {
  size: 24
}

export default AccountGroupIcon