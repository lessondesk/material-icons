import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const SlackwareIcon = ({
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
    <path d='M7.47,17.19C7.37,17.95 7.08,18.21 6.19,18.21C5.27,18.21 4.87,17.79 4.81,16.87L4.61,13.65C4.61,12.91 4.87,12.55 5.86,12.55C7.21,12.55 7.04,13.54 7.64,14.5C8.33,15.62 10,16.35 12.31,16.35C15.17,16.35 17,15.14 17,13.57C17,12.23 15.89,11.39 13.85,11.16L11.5,10.89C7.21,10.42 5.1,9.19 5.1,6.62C5.1,4.07 8.06,2 12.21,2C13.5,2 14.81,2.29 16.29,2.76C16.29,2.26 16.58,2.1 17.3,2.1C18.46,2.1 18.55,2.39 18.62,3.08L18.85,5.88C18.85,6.5 18.39,6.83 17.63,6.83C16.35,6.83 16.55,5.88 15.86,5.07C15.17,4.26 13.79,3.73 12.08,3.73C9.44,3.73 7.7,4.89 7.7,6.5C7.7,7.8 8.92,8.56 11.38,8.82L13.95,9.08C17.7,9.5 19.61,10.92 19.61,13.33C19.61,16.17 16.71,18.08 12.21,18.08C10.56,18.08 9.08,17.77 7.47,17.19M1,16H2V21H23V22H1V16Z' />
  </Svg>
)

SlackwareIcon.displayName = 'SlackwareIcon'

SlackwareIcon.defaultProps = {
  size: 24
}

export default SlackwareIcon