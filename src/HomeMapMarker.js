import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const HomeMapMarkerIcon = ({
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
    <path d='M12,3L2,12H5V20H19V12H22L12,3M12,7.7C14.1,7.7 15.8,9.4 15.8,11.5C15.8,14.5 12,18 12,18C12,18 8.2,14.5 8.2,11.5C8.2,9.4 9.9,7.7 12,7.7M12,10C11.17,10 10.5,10.67 10.5,11.5C10.5,12.33 11.17,13 12,13C12.83,13 13.5,12.33 13.5,11.5C13.5,10.67 12.83,10 12,10Z' />
  </Svg>
)

HomeMapMarkerIcon.displayName = 'HomeMapMarkerIcon'

HomeMapMarkerIcon.defaultProps = {
  size: 24
}

export default HomeMapMarkerIcon