import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const EmoticonAngryIcon = ({
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
    <path d='M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M7,9.5V8L10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5M14.77,17.23C14.32,16.5 13.25,16 12,16C10.75,16 9.68,16.5 9.23,17.23L7.81,15.81C8.71,14.72 10.25,14 12,14C13.75,14 15.29,14.72 16.19,15.81L14.77,17.23M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5L17,8V9.5Z' />
  </Svg>
)

EmoticonAngryIcon.displayName = 'EmoticonAngryIcon'

EmoticonAngryIcon.defaultProps = {
  size: 24
}

export default EmoticonAngryIcon