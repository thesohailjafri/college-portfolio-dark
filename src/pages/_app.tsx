import { MyContainer } from '@/components/ui/continers'
import Footer from '@/components/ui/footer'
import Navbar from '@/components/ui/navbar'
import { Provider } from '@/components/ui/provider'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <MyContainer>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </MyContainer>
    </Provider>
  )
}
