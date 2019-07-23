import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BikeIcon = ({
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
    <path d='M5,20.5C3.07,20.5 1.5,18.93 1.5,17C1.5,15.07 3.07,13.5 5,13.5C6.93,13.5 8.5,15.07 8.5,17C8.5,18.93 6.93,20.5 5,20.5M5,12C2.24,12 0,14.24 0,17C0,19.76 2.24,22 5,22C7.76,22 10,19.76 10,17C10,14.24 7.76,12 5,12M14.8,10H19V8.2H15.8L13.86,4.93C13.57,4.43 13,4.1 12.4,4.1C11.93,4.1 11.5,4.29 11.2,4.6L7.5,8.29C7.19,8.6 7,9 7,9.5C7,10.13 7.33,10.66 7.85,10.97L11.2,13V18H13V11.5L10.75,9.85L13.07,7.5M19,20.5C17.07,20.5 15.5,18.93 15.5,17C15.5,15.07 17.07,13.5 19,13.5C20.93,13.5 22.5,15.07 22.5,17C22.5,18.93 20.93,20.5 19,20.5M19,12C16.24,12 14,14.24 14,17C14,19.76 16.24,22 19,22C21.76,22 24,19.76 24,17C24,14.24 21.76,12 19,12M16,4.8C17,4.8 17.8,4 17.8,3C17.8,2 17,1.2 16,1.2C15,1.2 14.2,2 14.2,3C14.2,4 15,4.8 16,4.8Z' />
  </Svg>
)

BikeIcon.displayName = 'BikeIcon'

BikeIcon.defaultProps = {
  size: 24
}

export default BikeIcon