import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const DeveloperBoardIcon = ({
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
    <path d='M22,9V7H20V5C20,3.9 19.1,3 18,3H4C2.9,3 2,3.9 2,5V19C2,20.1 2.9,21 4,21H18C19.1,21 20,20.1 20,19V17H22V15H20V13H22V11H20V9H22M18,19H4V5H18V19M6,13H11V17H6V13M12,7H16V10H12V7M6,7H11V12H6V7M12,11H16V17H12V11Z' />
  </Svg>
)

DeveloperBoardIcon.displayName = 'DeveloperBoardIcon'

DeveloperBoardIcon.defaultProps = {
  size: 24
}

export default DeveloperBoardIcon