interface Props {
  className?: string
  color?: 'light' | 'dark'
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Logo = ({className='block h-10 w-10', color='dark'}: Props = {}) => {
  const textColor = color === 'dark'? `text-gray-100` : `text-indigo-600`
  const colors = [
    color === 'dark' ? '#f8aC6C' : '#7A2708',
    color === 'dark' ? '#f78A4A' : '#C45B12',
    color === 'dark' ? '#e1603F' : '#E1603F',
    color === 'dark' ? '#c45B12' : '#F78A4A',
    color === 'dark' ? '#c7421D' : '#F8AC6C',
    color === 'dark' ? '#c84603' : '#DEC6AE',
    color === 'dark' ? '#c04000' : '#FCFAD8',
  ]
  return (
    <div className={classNames(
        className || '',
        'flex align-middle items-center'
      )}>
      <img
        className="block h-8 w-auto"
        src="/images/logo.png"
        alt="Web3Firewall"
      />
      <span className={classNames(`inline-block font-['monospace'] uppercase`, textColor)}>Web3Firewall</span>
    </div>
  )
}

export default Logo
