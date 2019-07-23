import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CowboyIcon = ({
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
    <path d='M20,22H4V20C4,17.79 7.58,16 12,16C16.42,16 20,17.79 20,20M8,9H16V10C16,12.19 14.19,14 12,14C9.81,14 8,12.19 8,10M7.5,6C7.5,6 8,5 8.5,4C9,2.95 9.4,2 10.5,2V2C11.1,2 11.64,2.27 12,2.68V2.67C12.37,2.26 12.9,2 13.5,2V2C14.6,2 15.5,2.9 15.5,4C16,5 16.5,6 16.5,6H18C18,6 18,5.5 18,5C18,4.45 18.45,4 19,4C19.55,4 20,4.45 20,5C20,5.31 20,5.65 20,6C20,7.1 19.1,8 18,8C14.93,8 9.07,8 6,8C4.9,8 4,7.1 4,6C4,5.65 4,5.31 4,5C4,4.45 4.45,4 5,4C5.55,4 6,4.45 6,5C6,5.5 6,6 6,6' />
  </Svg>
)

CowboyIcon.displayName = 'CowboyIcon'

CowboyIcon.defaultProps = {
  size: 24
}

export default CowboyIcon