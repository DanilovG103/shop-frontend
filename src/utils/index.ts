export * from './routes'
export const env = {
  uri: process.env.NEXT_PUBLIC_BASE_URL,
  image: process.env.NEXT_PUBLIC_IMAGE_URL ?? '',
}
