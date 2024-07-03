// import '../styles/globals.css';
// import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
// import { Toaster } from "react-hot-toast";

// function MyApp({ Component, pageProps }) {
//   return (
//     <ThirdwebProvider desiredChainId={ChainId.Mumbai}>
//       <Component {...pageProps} />
//       <Toaster />
//     </ThirdwebProvider>
//   )
// }

// export default MyApp
import '../styles/globals.css';
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      desiredChainId={ChainId.Mumbai}
      clientId="2de850e544403b1541358534937d93b4" // Replace "YOUR_CLIENT_ID" with your actual client ID
    >
      <Component {...pageProps} />
      <Toaster />
    </ThirdwebProvider>
  )
}

export default MyApp
