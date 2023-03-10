import React from 'react'
import { SVGProps } from 'react'

const FavoriteActive = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="m12 22-1.595-1.417c-1.852-1.653-3.382-3.079-4.592-4.278-1.21-1.199-2.173-2.275-2.888-3.23-.715-.953-1.214-1.829-1.498-2.628A7.262 7.262 0 0 1 1 7.995c0-1.708.577-3.134 1.732-4.278C3.888 2.572 5.328 2 7.05 2c.953 0 1.86.2 2.723.6.861.4 1.604.962 2.227 1.689A6.515 6.515 0 0 1 16.95 2c1.723 0 3.163.572 4.317 1.717C22.422 4.86 23 6.287 23 7.995c0 .835-.142 1.653-.426 2.452-.284.8-.784 1.675-1.499 2.629-.715.954-1.677 2.03-2.887 3.23-1.21 1.198-2.741 2.624-4.593 4.277L12 22Z"
      fill={props.color ?? 'currentColor'}
    />
  </svg>
)

const FavoriteInactive = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="m12 22-1.595-1.417c-1.852-1.653-3.382-3.079-4.592-4.278-1.21-1.199-2.173-2.275-2.888-3.23-.715-.953-1.214-1.829-1.498-2.628A7.262 7.262 0 0 1 1 7.995c0-1.708.577-3.134 1.732-4.278C3.888 2.572 5.328 2 7.05 2c.953 0 1.86.2 2.723.6.861.4 1.604.962 2.227 1.689A6.515 6.515 0 0 1 16.95 2c1.723 0 3.163.572 4.317 1.717C22.422 4.86 23 6.287 23 7.995c0 .835-.142 1.653-.426 2.452-.284.8-.784 1.675-1.499 2.629-.715.954-1.677 2.03-2.887 3.23-1.21 1.198-2.741 2.624-4.593 4.277L12 22Zm0-2.943c1.76-1.562 3.208-2.902 4.345-4.02 1.137-1.116 2.035-2.088 2.695-2.914.66-.827 1.118-1.563 1.375-2.208a5.16 5.16 0 0 0 .385-1.92c0-1.09-.367-1.999-1.1-2.725-.733-.727-1.65-1.09-2.75-1.09-.862 0-1.66.24-2.393.721-.733.482-1.567 1.624-1.567 1.624L12 7.833l-.99-1.308S10.176 5.383 9.443 4.9A4.276 4.276 0 0 0 7.05 4.18c-1.1 0-2.017.363-2.75 1.09-.733.726-1.1 1.635-1.1 2.725 0 .635.128 1.275.385 1.92s.715 1.381 1.375 2.208c.66.826 1.558 1.798 2.695 2.915 1.137 1.117 2.585 2.457 4.345 4.02Z"
      fill={props.color ?? 'currentColor'}
    />
  </svg>
)

interface Props extends SVGProps<SVGSVGElement> {
  active?: boolean
}

export const FavoriteIcon = ({ active = false, ...props }: Props) => {
  return active ? (
    <FavoriteActive {...props} />
  ) : (
    <FavoriteInactive {...props} />
  )
}
