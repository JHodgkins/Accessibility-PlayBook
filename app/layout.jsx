import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'

export const metadata = {
  title: {
    default: 'Accessibility Playbook',
    template: '%s | Accessibility Playbook'
  },
  description:
    'A proof-of-concept accessibility playbook for product delivery teams.'
}

const navbar = (
  <Navbar
    logo={<strong>Accessibility Playbook</strong>}
    projectLink="https://github.com/JHodgkins/Accessibility-PlayBook"
  />
)

const footer = (
  <Footer>
    Accessibility Playbook POC — a documentation-as-code example.
  </Footer>
)

export default async function RootLayout({ children }) {
  return (
    <html lang="en-GB" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          footer={footer}
          editLink={null}
          copyPageButton={false}
          docsRepositoryBase="https://github.com/JHodgkins/Accessibility-PlayBook"
          feedback={{ content: null }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
