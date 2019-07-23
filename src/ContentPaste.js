import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ContentPasteIcon = ({
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
    <path d='M19,20H5V4H7V7H17V4H19M12,2C12.55,2 13,2.45 13,3C13,3.55 12.55,4 12,4C11.45,4 11,3.55 11,3C11,2.45 11.45,2 12,2M19,2H14.82C14.4,0.84 13.3,0 12,0C10.7,0 9.6,0.84 9.18,2H5C3.9,2 3,2.9 3,4V20C3,21.1 3.9,22 5,22H19C20.1,22 21,21.1 21,20V4C21,2.9 20.1,2 19,2Z' />
  </Svg>
)

ContentPasteIcon.displayName = 'ContentPasteIcon'

ContentPasteIcon.defaultProps = {
  size: 24
}

export default ContentPasteIcon