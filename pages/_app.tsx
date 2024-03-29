import '@/styles/globals.css'
import { ConfigProvider } from 'antd';
import type { AppProps } from 'next/app'
import type { ThemeConfig } from 'antd';
import Layout from '@/components/Shared/Layout';


const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: '#fffff',
    fontFamily: 'Inter',
  },
};
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div style={{ width: "100%", marginRight: "0" }}>

      <Layout>
        <ConfigProvider theme={theme}>
          <Component {...pageProps} />
        </ConfigProvider>
      </Layout>
    </div>
  )
};
