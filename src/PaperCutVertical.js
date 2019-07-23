import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PaperCutVerticalIcon = ({
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
    <path d='M11.43,3.23L12,4L12.57,3.23V3.24C13.12,2.5 14,2 15,2C16.66,2 18,3.34 18,5C18,5.35 17.94,5.69 17.83,6H20C21.1,6 22,6.9 22,8V20C22,21.1 21.1,22 20,22H4C2.9,22 2,21.1 2,20V8C2,6.9 2.9,6 4,6H6.17C6.06,5.69 6,5.35 6,5C6,3.34 7.34,2 9,2C10,2 10.88,2.5 11.43,3.24V3.23M4,8V20H11C11,19.45 11.45,19 12,19C12.55,19 13,19.45 13,20H20V8H15L14.9,8L17,10.92L15.4,12.1L12.42,8H11.58L8.6,12.1L7,10.92L9.1,8H9L4,8M9,4C8.45,4 8,4.45 8,5C8,5.55 8.45,6 9,6C9.55,6 10,5.55 10,5C10,4.45 9.55,4 9,4M15,4C14.45,4 14,4.45 14,5C14,5.55 14.45,6 15,6C15.55,6 16,5.55 16,5C16,4.45 15.55,4 15,4M12,16C12.55,16 13,16.45 13,17C13,17.55 12.55,18 12,18C11.45,18 11,17.55 11,17C11,16.45 11.45,16 12,16M12,13C12.55,13 13,13.45 13,14C13,14.55 12.55,15 12,15C11.45,15 11,14.55 11,14C11,13.45 11.45,13 12,13M12,10C12.55,10 13,10.45 13,11C13,11.55 12.55,12 12,12C11.45,12 11,11.55 11,11C11,10.45 11.45,10 12,10Z' />
  </Svg>
)

PaperCutVerticalIcon.displayName = 'PaperCutVerticalIcon'

PaperCutVerticalIcon.defaultProps = {
  size: 24
}

export default PaperCutVerticalIcon