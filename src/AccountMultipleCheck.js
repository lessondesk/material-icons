import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const AccountMultipleCheckIcon = ({
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
    <path d='M22.59,7.92L23.75,9.33L19,14.08L16.25,11.08L17.41,9.92L19,11.5L22.59,7.92M6,5C7.66,5 9,6.34 9,8C9,9.66 7.66,11 6,11C4.34,11 3,9.66 3,8C3,6.34 4.34,5 6,5M11,5C12.66,5 14,6.34 14,8C14,9.66 12.66,11 11,11C10.68,11 10.37,10.95 10.08,10.85C10.65,10.04 11,9.06 11,8C11,6.94 10.65,5.95 10.08,5.14C10.37,5.05 10.68,5 11,5M6,13C8,13 12,14 12,16V18H0V16C0,14 4,13 6,13M12.62,13.16C14.63,13.5 17,14.46 17,16V18H14V16C14,14.82 13.45,13.88 12.62,13.16Z' />
  </Svg>
)

AccountMultipleCheckIcon.displayName = 'AccountMultipleCheckIcon'

AccountMultipleCheckIcon.defaultProps = {
  size: 24
}

export default AccountMultipleCheckIcon