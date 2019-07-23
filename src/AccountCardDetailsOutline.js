import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const AccountCardDetailsOutlineIcon = ({
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
    <path d='M22,3H2C0.91,3.04 0.04,3.91 0,5V19C0.04,20.09 0.91,20.96 2,21H22C23.09,20.96 23.96,20.09 24,19V5C23.96,3.91 23.09,3.04 22,3M22,19H2V5H22V19M14,17V15.75C14,14.09 10.66,13.25 9,13.25C7.34,13.25 4,14.09 4,15.75V17H14M9,7C7.62,7 6.5,8.12 6.5,9.5C6.5,10.88 7.62,12 9,12C10.38,12 11.5,10.88 11.5,9.5C11.5,8.12 10.38,7 9,7M14,7V8H20V7H14M14,9V10H20V9H14M14,11V12H18V11H14' />
  </Svg>
)

AccountCardDetailsOutlineIcon.displayName = 'AccountCardDetailsOutlineIcon'

AccountCardDetailsOutlineIcon.defaultProps = {
  size: 24
}

export default AccountCardDetailsOutlineIcon