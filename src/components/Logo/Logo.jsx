import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to={`/`}>
      <svg width='114' height='23' viewBox='0 0 114 23' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M30.3432 1.06L24.4932 22H19.5432L15.6132 7.09L11.5032 22L6.5832 22.03L0.943203 1.06H5.4432L9.1332 17.32L13.3932 1.06H18.0732L22.0932 17.23L25.8132 1.06H30.3432ZM37.2856 1.06V22H33.0856V1.06H37.2856ZM59.3452 22H55.1452L45.6352 7.63V22H41.4352V1.03H45.6352L55.1452 15.43V1.03H59.3452V22ZM67.6958 4.45V9.7H74.7458V13.03H67.6958V18.58H75.6458V22H63.4958V1.03H75.6458V4.45H67.6958ZM83.6626 18.67H90.5626V22H79.4626V1.06H83.6626V18.67ZM102.952 22.21C100.992 22.21 99.1921 21.75 97.5521 20.83C95.9121 19.91 94.6121 18.64 93.6521 17.02C92.6921 15.38 92.2121 13.53 92.2121 11.47C92.2121 9.43 92.6921 7.6 93.6521 5.98C94.6121 4.34 95.9121 3.06 97.5521 2.14C99.1921 1.22 100.992 0.76 102.952 0.76C104.932 0.76 106.732 1.22 108.352 2.14C109.992 3.06 111.282 4.34 112.222 5.98C113.182 7.6 113.662 9.43 113.662 11.47C113.662 13.53 113.182 15.38 112.222 17.02C111.282 18.64 109.992 19.91 108.352 20.83C106.712 21.75 104.912 22.21 102.952 22.21ZM102.952 18.46C104.212 18.46 105.322 18.18 106.282 17.62C107.242 17.04 107.992 16.22 108.532 15.16C109.072 14.1 109.342 12.87 109.342 11.47C109.342 10.07 109.072 8.85 108.532 7.81C107.992 6.75 107.242 5.94 106.282 5.38C105.322 4.82 104.212 4.54 102.952 4.54C101.692 4.54 100.572 4.82 99.5921 5.38C98.6321 5.94 97.8821 6.75 97.3421 7.81C96.8021 8.85 96.5321 10.07 96.5321 11.47C96.5321 12.87 96.8021 14.1 97.3421 15.16C97.8821 16.22 98.6321 17.04 99.5921 17.62C100.572 18.18 101.692 18.46 102.952 18.46Z'
          fill='black'
        />
      </svg>
    </Link>
  )
}
