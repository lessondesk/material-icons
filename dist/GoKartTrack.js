import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const GoKartTrackIcon = ({
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
    <path d='M22,5.5C22,3.57 20.43,2 18.5,2C16.57,2 15,3.57 15,5.5V6C15,7.66 13.66,9 12,9C10,9 9,6 6,6C3.79,6 2,7.79 2,10V11H4V10C4,8.9 4.9,8 6,8C6.86,8 7.42,8.45 8.32,9.24C9.28,10.27 10.6,10.9 12,11C14.76,11 17,8.76 17,6V5.5C17,4.67 17.67,4 18.5,4C19.33,4 20,4.67 20,5.5C19.86,6.35 19.58,7.18 19.17,7.94C18.5,9.2 18.11,10.58 18,12C18.09,13.37 18.5,14.71 19.21,15.89C19.6,16.54 19.87,17.25 20,18C20,19.1 19.1,20 18,20C16.9,20 16,19.1 16,18C16,15.93 14.32,14.25 12.25,14.25C10.18,14.25 8.5,15.93 8.5,18V18.5C8.5,19.33 7.83,20 7,20C5.34,20 4,18.66 4,17V15H6V13H0V15H2V17C2,19.76 4.24,22 7,22C8.93,22 10.5,20.43 10.5,18.5V18C10.5,17.03 11.28,16.25 12.25,16.25C13.22,16.25 14,17.03 14,18C14,20.21 15.79,22 18,22C20.21,22 22,20.21 22,18C22,16 20,14 20,12C20,10 22,7.5 22,5.5Z' />
  </Svg>
)

GoKartTrackIcon.displayName = 'GoKartTrackIcon'

GoKartTrackIcon.defaultProps = {
  size: 24
}

export default GoKartTrackIcon