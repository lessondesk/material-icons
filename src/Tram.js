import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const TramIcon = ({
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
    <path d='M19,16.94V8.5C19,5.71 16.39,5.1 13,5L13.75,3.5H17V2H7V3.5H11.75L11,5C7.86,5.11 5,5.73 5,8.5V16.94C5,18.39 6.19,19.6 7.59,19.91L6,21.5V22H8.23L10.23,20H14L16,22H18V21.5L16.5,20H16.42C18.11,20 19,18.63 19,16.94M12,18.5C11.17,18.5 10.5,17.83 10.5,17C10.5,16.17 11.17,15.5 12,15.5C12.83,15.5 13.5,16.17 13.5,17C13.5,17.83 12.83,18.5 12,18.5M17,14H7V9H17V14Z' />
  </Svg>
)

TramIcon.displayName = 'TramIcon'

TramIcon.defaultProps = {
  size: 24
}

export default TramIcon