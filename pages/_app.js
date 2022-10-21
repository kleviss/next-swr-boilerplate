import "../styles/globals.css";
import { SWRConfig } from "swr";

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig value={{ provider: () => new Map() }}>
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;
