import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const WeatherHazyIcon = ({
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
    <path d='M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64M14,15C14,14.45 13.55,14 13,14H3C2.45,14 2,14.45 2,15C2,15.55 2.45,16 3,16H13C13.55,16 14,15.55 14,15M22,15C22,14.45 21.55,14 21,14H17C16.45,14 16,14.45 16,15C16,15.55 16.45,16 17,16H21C21.55,16 22,15.55 22,15M10,19C10,19.55 10.45,20 11,20H20C20.55,20 21,19.55 21,19C21,18.45 20.55,18 20,18H11C10.45,18 10,18.45 10,19M3,19C3,19.55 3.45,20 4,20H7C7.55,20 8,19.55 8,19C8,18.45 7.55,18 7,18H4C3.45,18 3,18.45 3,19M12,9C13.66,9 15,10.34 15,12H17C17,9.24 14.76,7 12,7C9.24,7 7,9.24 7,12H9C9,10.34 10.34,9 12,9Z' />
  </Svg>
)

WeatherHazyIcon.displayName = 'WeatherHazyIcon'

WeatherHazyIcon.defaultProps = {
  size: 24
}

export default WeatherHazyIcon