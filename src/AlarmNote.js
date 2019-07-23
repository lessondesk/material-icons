import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const AlarmNoteIcon = ({
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
    <path d='M17.4,1.86L16.11,3.39L20.71,7.25L22,5.72L17.4,1.86M6.6,1.86L2,5.71L3.29,7.24L7.88,3.39L6.6,1.86M12,4C7.03,4 3,8.03 3,13C3,17.97 7.03,22 12,22C12.33,22 12.67,22 13,21.94V19.94C12.67,20 12.33,20 12,20C8.13,20 5,16.87 5,13C5,9.13 8.13,6 12,6C15.1,6 17.83,8.03 18.71,11H20.78C19.85,6.9 16.2,4 12,4M23,15H20V20.5C20,21.88 18.88,23 17.5,23C16.12,23 15,21.88 15,20.5C15,19.12 16.12,18 17.5,18C18.04,18 18.57,18.18 19,18.5V13H23V15M11.5,8V13.25L7.5,15.62L8.25,16.85L13,14V8H11.5Z' />
  </Svg>
)

AlarmNoteIcon.displayName = 'AlarmNoteIcon'

AlarmNoteIcon.defaultProps = {
  size: 24
}

export default AlarmNoteIcon