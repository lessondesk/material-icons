import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const AccountBadgeOutlineIcon = ({
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
    <path d='M17,3H14V5H17V21H7V5H10V3H7C5.9,3 5,3.9 5,5V21C5,22.1 5.9,23 7,23H17C18.1,23 19,22.1 19,21V5C19,3.9 18.1,3 17,3M12,7C13.1,7 14,7.9 14,9C14,10.1 13.1,11 12,11C10.9,11 10,10.1 10,9C10,7.9 10.9,7 12,7M16,15H8V14C8,12.67 10.67,12 12,12C13.33,12 16,12.67 16,14V15M16,18H8V17H16V18M12,20H8V19H12V20M13,5H11V1H13V5Z' />
  </Svg>
)

AccountBadgeOutlineIcon.displayName = 'AccountBadgeOutlineIcon'

AccountBadgeOutlineIcon.defaultProps = {
  size: 24
}

export default AccountBadgeOutlineIcon