import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const LanguageRubyOnRailsIcon = ({
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
    <path d='M19.8,16.7C19.8,16.7 21.6,16.5 21.6,14.3C21.6,12.1 19.5,11.8 19.5,11.8H15.7V19H17.6V17.3L19.3,19H22L19.8,16.7M19,15.3H17.5V13.7H19C19,13.7 19.4,13.9 19.4,14.5C19.5,15.1 19,15.3 19,15.3M21.3,8.2V8.4C13.2,6.1 10,13.2 10.6,18.7C10.6,18.7 4.9,18.7 4.3,18.7C5,13.3 11.8,2.6 21.3,8.2M20.5,6.9C19.8,6.6 19.1,6.3 18.4,6.1L18.5,4.8L20.6,5.6L20.5,6.9M18.5,8.7C19.2,8.7 19.9,8.8 20.6,9L20.5,10.2L18.7,10L18.5,8.7M13.9,5.8L13.5,4.6L15.6,4.4L16,5.7C15.8,5.7 14.1,5.8 13.9,5.8M15.2,9.5C15.6,9.3 16.3,9 17.2,8.8L17.6,10L15.8,10.7L15.2,9.5M11.8,6.5C11.2,6.8 10.6,7.1 10,7.5L9.2,6.2L11,5.2L11.8,6.5M14.3,10.1L15.1,11.3L14,12.6L12.9,11.6C13.2,11 13.7,10.5 14.3,10.1M11.6,15C11.7,14.2 11.9,13.5 12.2,12.7L13.4,13.7L13.1,15.6L11.6,15M7.9,9.3C7.4,9.8 6.9,10.4 6.5,10.9L5.2,9.8L6.7,8.2L7.9,9.3M4.8,13.7C4.4,14.5 4.1,15.3 3.8,16L2,15.3L2.9,13L4.8,13.7M11.5,16.3L13.3,16.9L13.6,18.9L11.6,18.4C11.6,18.2 11.5,17.5 11.5,16.3Z' />
  </Svg>
)

LanguageRubyOnRailsIcon.displayName = 'LanguageRubyOnRailsIcon'

LanguageRubyOnRailsIcon.defaultProps = {
  size: 24
}

export default LanguageRubyOnRailsIcon