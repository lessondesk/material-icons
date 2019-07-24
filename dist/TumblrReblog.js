import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const TumblrReblogIcon = ({
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
    <path d='M3.75,17L8,12.75V16H18V11.5L20,9.5V16C20,17.1 19.1,18 18,18H8V21.25L3.75,17M20.25,7L16,11.25V8H6V12.5L4,14.5V8C4,6.9 4.9,6 6,6H16V2.75L20.25,7Z' />
  </Svg>
)

TumblrReblogIcon.displayName = 'TumblrReblogIcon'

TumblrReblogIcon.defaultProps = {
  size: 24
}

export default TumblrReblogIcon