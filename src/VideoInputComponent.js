import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const VideoInputComponentIcon = ({
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
    <path d='M5,2C5,1.45 4.55,1 4,1C3.45,1 3,1.45 3,2V6H1V12H7V6H5V2M9,16C9,17.3 9.84,18.4 11,18.82V23H13V18.82C14.16,18.41 15,17.31 15,16V14H9V16M1,16C1,17.3 1.84,18.4 3,18.82V23H5V18.82C6.16,18.4 7,17.3 7,16V14H1V16M21,6V2C21,1.45 20.55,1 20,1C19.45,1 19,1.45 19,2V6H17V12H23V6H21M13,2C13,1.45 12.55,1 12,1C11.45,1 11,1.45 11,2V6H9V12H15V6H13V2M17,16C17,17.3 17.84,18.4 19,18.82V23H21V18.82C22.16,18.41 23,17.31 23,16V14H17V16Z' />
  </Svg>
)

VideoInputComponentIcon.displayName = 'VideoInputComponentIcon'

VideoInputComponentIcon.defaultProps = {
  size: 24
}

export default VideoInputComponentIcon