import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ThoughtBubbleIcon = ({
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
    <path d='M3.5,19C4.33,19 5,19.67 5,20.5C5,21.33 4.33,22 3.5,22C2.67,22 2,21.33 2,20.5C2,19.67 2.67,19 3.5,19M8.5,16C9.88,16 11,17.12 11,18.5C11,19.88 9.88,21 8.5,21C7.12,21 6,19.88 6,18.5C6,17.12 7.12,16 8.5,16M14.5,15C13.31,15 12.23,14.5 11.5,13.65C10.77,14.5 9.69,15 8.5,15C6.54,15 4.91,13.59 4.57,11.74C3.07,11.16 2,9.7 2,8C2,5.79 3.79,4 6,4C6.26,4 6.5,4.03 6.77,4.07C7.5,3.41 8.45,3 9.5,3C10.69,3 11.77,3.5 12.5,4.35C13.23,3.5 14.31,3 15.5,3C17.46,3 19.09,4.41 19.43,6.26C20.93,6.84 22,8.3 22,10C22,12.21 20.21,14 18,14L17.23,13.93C16.5,14.59 15.55,15 14.5,15Z' />
  </Svg>
)

ThoughtBubbleIcon.displayName = 'ThoughtBubbleIcon'

ThoughtBubbleIcon.defaultProps = {
  size: 24
}

export default ThoughtBubbleIcon