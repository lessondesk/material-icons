import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BrailleIcon = ({
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
    <path d='M7,8C7,7.45 7.45,7 8,7C8.55,7 9,7.45 9,8V12.47L10.21,12.6L15.15,14.79C15.67,15.03 16,15.56 16,16.14V20.5C15.97,21.32 15.32,21.97 14.5,22H8C7.62,22 7.26,21.85 7,21.57L2.1,17.37L2.84,16.6C3.03,16.39 3.3,16.28 3.58,16.28H3.8L7,18V8M19.5,2C18.67,2 18,2.67 18,3.5C18,4.33 18.67,5 19.5,5C20.33,5 21,4.33 21,3.5C21,2.67 20.33,2 19.5,2M19.5,7C18.67,7 18,7.67 18,8.5C18,9.33 18.67,10 19.5,10C20.33,10 21,9.33 21,8.5C21,7.67 20.33,7 19.5,7M14.5,7C13.67,7 13,7.67 13,8.5C13,9.33 13.67,10 14.5,10C15.33,10 16,9.33 16,8.5C16,7.67 15.33,7 14.5,7M19.5,12C18.67,12 18,12.67 18,13.5C18,14.33 18.67,15 19.5,15C20.33,15 21,14.33 21,13.5C21,12.67 20.33,12 19.5,12Z' />
  </Svg>
)

BrailleIcon.displayName = 'BrailleIcon'

BrailleIcon.defaultProps = {
  size: 24
}

export default BrailleIcon