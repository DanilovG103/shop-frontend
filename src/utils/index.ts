export * from './routes'
export * from './date'
export * from './formate-price'
export * from './constants'

export const env = {
  uri: process.env.NEXT_PUBLIC_BASE_URL,
  image: process.env.NEXT_PUBLIC_IMAGE_URL ?? '',
}
