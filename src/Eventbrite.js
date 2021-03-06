import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const EventbriteIcon = ({
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
    <path d='M12,17.5C10.15,17.5 8.42,16.56 7.41,15L17.41,12.75L22.08,11.75C22.05,10.32 21.71,8.92 21.08,7.64C18.66,2.61 12.62,0.5 7.58,2.92C2.55,5.34 0.44,11.38 2.86,16.41C5.29,21.44 11.33,23.56 16.36,21.14C18.5,20.09 20.25,18.31 21.22,16.11L16.61,15C15.6,16.57 13.86,17.5 12,17.5M12,6.5C13.76,6.5 15.41,7.34 16.44,8.77L6.57,11.19C6.96,8.5 9.28,6.5 12,6.5Z' />
  </Svg>
)

EventbriteIcon.displayName = 'EventbriteIcon'

EventbriteIcon.defaultProps = {
  size: 24
}

export default EventbriteIcon