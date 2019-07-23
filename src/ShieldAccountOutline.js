import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ShieldAccountOutlineIcon = ({
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
    <path d='M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,3.18L19,6.3V11.22C19,12.92 18.5,14.65 17.65,16.17C16,14.94 13.26,14.5 12,14.5C10.74,14.5 8,14.94 6.35,16.17C5.5,14.65 5,12.92 5,11.22V6.3L12,3.18M12,6C10.07,6 8.5,7.57 8.5,9.5C8.5,11.43 10.07,13 12,13C13.93,13 15.5,11.43 15.5,9.5C15.5,7.57 13.93,6 12,6M12,8C12.83,8 13.5,8.67 13.5,9.5C13.5,10.33 12.83,11 12,11C11.17,11 10.5,10.33 10.5,9.5C10.5,8.67 11.17,8 12,8M12,16.5C13.57,16.5 15.64,17.11 16.53,17.84C15.29,19.38 13.7,20.55 12,21C10.3,20.55 8.71,19.38 7.47,17.84C8.37,17.11 10.43,16.5 12,16.5Z' />
  </Svg>
)

ShieldAccountOutlineIcon.displayName = 'ShieldAccountOutlineIcon'

ShieldAccountOutlineIcon.defaultProps = {
  size: 24
}

export default ShieldAccountOutlineIcon