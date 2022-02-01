import styled from 'styled-components'
import { icons } from '../assets/icons/icons'

function getSize(size) {
  if (size === 'lg') return '8rem'
  if (size === 'md') return '4rem'
  if (size === 'sm') return '2rem'
  return size
}

const IconWrapper = styled.div.attrs((props) => ({
  size: props.size || 'md',
  fgColor: props.fgColor || 'red',
  bgColor: props.bgColor || 'white',
}))`
  background-color: ${({ bgColor }) => bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.375rem;
  width: ${({ size }) => getSize(size)};
  height: ${({ size }) => getSize(size)};
  margin-bottom: 1.25rem;
  svg {
    fill: ${({ fgColor }) => fgColor};
  }
`

const Icon = ({ name, size, fgColor, bgColor, button }) => {
  if (button)
    return (
      <IconWrapper
        as="button"
        name={name}
        size={size}
        fgColor={fgColor}
        bgColor={bgColor}
      >
        {icons[name]}
      </IconWrapper>
    )
  else
    return (
      <IconWrapper name={name} size={size} fgColor={fgColor} bgColor={bgColor}>
        {icons[name]}
      </IconWrapper>
    )
}

export default Icon
