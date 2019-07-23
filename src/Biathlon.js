import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BiathlonIcon = ({
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
    <path d='M12.88,3.64C13.65,3.64 14.28,4.27 14.28,5.04C14.28,5.81 13.65,6.44 12.88,6.44C12.11,6.44 11.5,5.81 11.5,5.04C11.5,4.27 12.11,3.64 12.88,3.64M15,13H16.5V19H15V13M15,8.5H16.5V10H15V8.5M10.04,2.6L8,2.04L6.06,8.58L3.9,11.42L7.17,12.37L10.04,2.6M19.67,18.55C19.31,18.93 18.88,19.5 18.4,19.7C17.91,19.92 17.54,20 17,20H13.5L13.43,17C13.42,16.83 13.37,16.67 13.28,16.5L10.88,12.24L11.76,9.5C12.34,10.55 13,11.73 13.06,11.83C13.21,12 13.45,12.13 13.69,12.13H15.9C16.35,12.13 16.71,11.77 16.71,11.32C16.71,10.9 16.38,10.56 15.96,10.53L14.29,10.4L12.4,7C12.4,7 12,6.42 11.14,6.42C10.27,6.42 10,6.84 9.83,7.42L6,20H3V22H17C18.37,22 19.53,21.34 20.5,20.37L19.67,18.55M9.75,14.39L11.62,17.39L11.75,20H7.75L9.75,14.39Z' />
  </Svg>
)

BiathlonIcon.displayName = 'BiathlonIcon'

BiathlonIcon.defaultProps = {
  size: 24
}

export default BiathlonIcon