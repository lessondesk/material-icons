import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const AccountChildIcon = ({
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
    <path d='M12,2C13.66,2 15,3.34 15,5C15,6.66 13.66,8 12,8C10.34,8 9,6.66 9,5C9,3.34 10.34,2 12,2M12,9C13.63,9 15.12,9.35 16.5,10.05C17.84,10.76 18.5,11.61 18.5,12.61V18.38C18.5,19.5 17.64,20.44 15.89,21.19V19C15.89,18.05 15.03,17.38 13.31,16.97C12.75,16.84 12.31,16.78 12,16.78C11.13,16.78 10.3,16.95 9.54,17.3C8.77,17.64 8.31,18.08 8.16,18.61C9.5,19.14 10.78,19.41 12,19.41L13,19.31V21.94L12,22C10.63,22 9.33,21.72 8.11,21.19C6.36,20.44 5.5,19.5 5.5,18.38V12.61C5.5,11.61 6.16,10.76 7.5,10.05C8.88,9.35 10.38,9 12,9M12,11C10.9,11 10,11.9 10,13C10,14.1 10.9,15 12,15C13.1,15 14,14.1 14,13C14,11.9 13.1,11 12,11Z' />
  </Svg>
)

AccountChildIcon.displayName = 'AccountChildIcon'

AccountChildIcon.defaultProps = {
  size: 24
}

export default AccountChildIcon