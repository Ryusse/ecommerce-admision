import './Toggle.scss'

export default function Toggle({ open, onClick }) {
  return (
    <button role='button' className={`toggle ${open ? 'open' : ''}`} onClick={onClick}>
      <div className={`toggle__line ${open ? 'open' : ''}`}></div>
      <div className={`toggle__line ${open ? 'open' : ''}`}></div>
      <div className={`toggle__line ${open ? 'open' : ''}`}></div>
    </button>
  )
}
