import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const Cpu64BitIcon = ({
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
    <path d='M9,3V5H7C5.9,5 5,5.9 5,7V9H3V11H5V13H3V15H5V17C5,18.1 5.9,19 7,19H9V21H11V19H13V21H15V19H17C18.1,19 19,18.1 19,17V15H21V13H19V11H21V9H19V7C19,5.9 18.1,5 17,5H15V3H13V5H11V3M8,9H11.5V10.5H8.5V11.25H10.5C11.05,11.25 11.5,11.7 11.5,12.25V14C11.5,14.55 11.05,15 10.5,15H8C7.45,15 7,14.55 7,14V10C7,9.45 7.45,9 8,9M12.5,9H14V11H15.5V9H17V15H15.5V12.5H12.5M8.5,12.75V13.5H10V12.75' />
  </Svg>
)

Cpu64BitIcon.displayName = 'Cpu64BitIcon'

Cpu64BitIcon.defaultProps = {
  size: 24
}

export default Cpu64BitIcon