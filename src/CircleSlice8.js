import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CircleSlice8Icon = ({
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
    <path d='M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M12,4C7.58,4 4,7.58 4,12C4,16.42 7.58,20 12,20C16.42,20 20,16.42 20,12C20,7.58 16.42,4 12,4M12,19C10.1,19 8.3,18.2 7.1,16.9C5.9,15.6 5,13.9 5,12C5,10.1 5.8,8.3 7.1,7.1C8.4,5.9 10.1,5 12,5C13.9,5 15.7,5.8 16.9,7.1C18.1,8.4 19,10.1 19,12C19,13.9 18.2,15.7 16.9,16.9C15.6,18.1 13.9,19 12,19Z' />
  </Svg>
)

CircleSlice8Icon.displayName = 'CircleSlice8Icon'

CircleSlice8Icon.defaultProps = {
  size: 24
}

export default CircleSlice8Icon