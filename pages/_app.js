import App from 'next/app';
import Head from 'next/head';
import { AppProvider as PolarisProvider } from "@shopify/polaris";
import { Provider as AppBridgeProvider, Provider } from "@shopify/app-bridge-react";
import '@shopify/polaris/dist/styles.css';
import translations from '@shopify/polaris/locales/en.json';
import ClientRouter from '../components/ClientRouter';
import Cookies from 'js-cookie';

class MyApp extends App {

    render() {
        const { Component, pageProps } = this.props;
        const config = { apiKey: API_KEY, shopOrigin: Cookies.get('shopOrigin'), forceRedirect: true };
        return (
            <React.Fragment>
                <Head>
                    <title>Sample App</title>
                    <meta charSet="utf-8"/>
                </Head>
                <AppBridgeProvider config={config}>
                 <ClientRouter />
                    <PolarisProvider  i18n={translations}>
                        <Component {...pageProps} />
                    </PolarisProvider >
                </AppBridgeProvider>
            </React.Fragment>
        );
    };
}

export default MyApp;