import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const HumanMaleMaleIcon = ({
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
    <path d='M7.5,2C8.6,2 9.5,2.9 9.5,4C9.5,5.1 8.6,6 7.5,6C6.4,6 5.5,5.1 5.5,4C5.5,2.9 6.4,2 7.5,2M6,7H9C10.1,7 11,7.9 11,9V14.5H9.5V22H5.5V14.5H4V9C4,7.9 4.9,7 6,7M16.5,2C17.6,2 18.5,2.9 18.5,4C18.5,5.1 17.6,6 16.5,6C15.4,6 14.5,5.1 14.5,4C14.5,2.9 15.4,2 16.5,2M15,7H18C19.1,7 20,7.9 20,9V14.5H18.5V22H14.5V14.5H13V9C13,7.9 13.9,7 15,7Z' />
  </Svg>
)

HumanMaleMaleIcon.displayName = 'HumanMaleMaleIcon'

HumanMaleMaleIcon.defaultProps = {
  size: 24
}

export default HumanMaleMaleIcon