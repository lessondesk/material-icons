import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const TwitterRetweetIcon = ({
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
    <path d='M6,5.75L10.25,10H7V16H13.5L15.5,18H7C5.9,18 5,17.1 5,16V10H1.75L6,5.75M18,18.25L13.75,14H17V8H10.5L8.5,6H17C18.1,6 19,6.9 19,8V14H22.25L18,18.25Z' />
  </Svg>
)

TwitterRetweetIcon.displayName = 'TwitterRetweetIcon'

TwitterRetweetIcon.defaultProps = {
  size: 24
}

export default TwitterRetweetIcon