interface Props {
  className?: string
  color?: 'light' | 'dark'
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const KnotLogo = ({className='block h-10 w-10', color='dark'}: Props = {}) => {
  const textColor = color === 'dark'? `text-gray-100` : `text-indigo-600`
  return (
    <div className={classNames(
        className || '',
        'flex align-middle items-center justify-center'
      )}>
      <img
        className="block h-8 w-auto"
        src="/images/logo.png"
        alt="Web3Firewall"
      />
      <span className={classNames(`pl-2 inline-block font-['monospace'] uppercase font-bold`, textColor)}>Web3Firewall</span>
    </div>
  )
}

export default KnotLogo
