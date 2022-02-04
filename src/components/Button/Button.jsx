import './Button.scss'

export default function Button({ content, selector }) {
  return <button className={`button ${selector}`}>{content}</button>
}
