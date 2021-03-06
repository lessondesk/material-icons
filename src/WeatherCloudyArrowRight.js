import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const WeatherCloudyArrowRightIcon = ({
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
    <path d='M6,7L6.69,7.06C7.32,4.72 9.46,3 12,3C15.04,3 17.5,5.46 17.5,8.5L17.42,9.45C17.88,9.16 18.42,9 19,9C20.66,9 22,10.34 22,12C22,13.66 20.66,15 19,15H6C3.79,15 2,13.21 2,11C2,8.79 3.79,7 6,7M6,9C4.9,9 4,9.9 4,11C4,12.1 4.9,13 6,13H19C19.55,13 20,12.55 20,12C20,11.45 19.55,11 19,11H15.5V8.5C15.5,6.57 13.93,5 12,5C10.07,5 8.5,6.57 8.5,8.5V9H6M22,19L19,22V20H2V18H19V16L22,19' />
  </Svg>
)

WeatherCloudyArrowRightIcon.displayName = 'WeatherCloudyArrowRightIcon'

WeatherCloudyArrowRightIcon.defaultProps = {
  size: 24
}

export default WeatherCloudyArrowRightIcon