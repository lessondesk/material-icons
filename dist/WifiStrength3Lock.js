import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const WifiStrength3LockIcon = ({
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
    <path d='M12,3C7.79,3 3.7,4.42 0.38,7C4.42,12.06 7.89,16.37 12,21.5C13.23,19.97 14.29,18.66 15.5,17.14V14.5C15.5,12.44 16.77,10.59 18.69,9.84C17.19,8.96 14.84,8 12,8C9,8 6.68,9 5.2,9.84L3.27,7.44C5.91,5.85 8.92,5 12,5C15.07,5 18.08,5.86 20.71,7.45L18.84,9.79C19.37,9.6 19.93,9.5 20.5,9.5C20.85,9.5 21.2,9.54 21.54,9.62C22.2,8.8 23.03,7.76 23.65,7C20.32,4.41 16.22,3 12,3M20.5,12C19.1,12 18,13.1 18,14.5V16C17.5,16 17,16.5 17,17V21C17,21.5 17.5,22 18,22H23C23.5,22 24,21.5 24,21V17C24,16.5 23.5,16 23,16V14.5C23,13.1 21.9,12 20.5,12M20.5,13C21.3,13 22,13.7 22,14.5V16H19V14.5C19,13.7 19.7,13 20.5,13Z' />
  </Svg>
)

WifiStrength3LockIcon.displayName = 'WifiStrength3LockIcon'

WifiStrength3LockIcon.defaultProps = {
  size: 24
}

export default WifiStrength3LockIcon