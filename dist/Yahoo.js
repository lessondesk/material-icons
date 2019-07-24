import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const YahooIcon = ({
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
    <path d='M12.03,3.36C8.5,3.36 5.15,2.9 2,2C2,9.07 2,20.23 2,22C5.15,21.1 8.5,20.64 12.03,20.64C15.5,20.64 18.85,21.09 22,22C22,15.2 22,9.31 22,2C18.85,2.91 15.5,3.36 12.03,3.36M12.84,13.04L12.97,18.92L12,18.79C12,18.79 12,18.79 12,18.79C11.91,18.79 11.19,18.89 11,18.93L11.16,13.04C10.88,12.54 6.67,5.44 6.44,5.07L7.5,5.25C7.83,5.25 8.12,5.21 8.5,5.17C9.03,6.15 11.88,10.83 12,11.03C12,11.03 14.97,6.15 15.61,5.13C15.88,5.21 16.17,5.25 16.5,5.25C16.78,5.25 17.07,5.21 17.57,5.07L12.84,13.04Z' />
  </Svg>
)

YahooIcon.displayName = 'YahooIcon'

YahooIcon.defaultProps = {
  size: 24
}

export default YahooIcon