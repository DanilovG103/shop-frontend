import { Fragment } from 'react'
import { ServerStyleSheets as MaterialUiServerStyleSheets } from '@material-ui/core/styles'
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    const muiSheets = new MaterialUiServerStyleSheets()

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <Fragment key="styles">
            {initialProps.styles}
            {muiSheets.getStyleElement()}
            {sheet.getStyleElement()}
          </Fragment>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <div id="modal" />
          <NextScript />
        </body>
      </Html>
    )
  }
}
