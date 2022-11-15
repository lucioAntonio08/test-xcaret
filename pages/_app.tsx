import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Provider} from "react-redux";
import {store} from "../store/store";
import {useEffect} from "react";

export default function App({ Component, pageProps }: AppProps) {

    // const getData = () => {
    //
    //     const data = fetch('https://raw.githubusercontent.com/javialcocer/test-json/main/data.json')
    //         .then((response) => response.json())
    //         .then((data) => console.log(data))
    //         .catch((error)=>{
    //             console.error('Error:',error)
    //         })
    //     console.log(data)
    // }
    // useEffect(() => {
    //     getData()
    // }, []);

  return (
        <Provider store={store} >
          <Component {...pageProps} />
        </Provider>
      )
}
