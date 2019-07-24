import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const QuicktimeIcon = ({
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
    <path d='M12,3C16.97,3 21,7.03 21,12C21,13.76 20.5,15.4 19.62,16.79L21,18.17V20C21,20.55 20.55,21 20,21H18.18L16.79,19.62C15.41,20.5 13.76,21 12,21C7.03,21 3,16.97 3,12C3,7.03 7.03,3 12,3M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C12.65,17 13.26,16.88 13.83,16.65L10.95,13.77C10.17,13 10.17,11.72 10.95,10.94C11.73,10.16 13,10.16 13.78,10.94L16.66,13.82C16.88,13.26 17,12.64 17,12C17,9.24 14.76,7 12,7Z' />
  </Svg>
)

QuicktimeIcon.displayName = 'QuicktimeIcon'

QuicktimeIcon.defaultProps = {
  size: 24
}

export default QuicktimeIcon