import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const AccountBadgeIcon = ({
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
    <path d='M17,3H14V6H10V3H7C5.9,3 5,3.9 5,5V21C5,22.1 5.9,23 7,23H17C18.1,23 19,22.1 19,21V5C19,3.9 18.1,3 17,3M12,8C13.1,8 14,8.9 14,10C14,11.1 13.1,12 12,12C10.9,12 10,11.1 10,10C10,8.9 10.9,8 12,8M16,16H8V15C8,13.67 10.67,13 12,13C13.33,13 16,13.67 16,15V16M13,5H11V1H13V5M16,19H8V18H16V19M12,21H8V20H12V21Z' />
  </Svg>
)

AccountBadgeIcon.displayName = 'AccountBadgeIcon'

AccountBadgeIcon.defaultProps = {
  size: 24
}

export default AccountBadgeIcon