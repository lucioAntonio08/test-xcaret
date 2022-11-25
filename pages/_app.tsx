import '../styles/globals.css'
import type {AppContext, AppProps} from 'next/app'
import {Provider} from "react-redux";
import {store} from "../store/store";
import {useEffect} from "react";
import {useAppDispatch} from "../hooks";

 function App({Component, pageProps}: AppProps) {

    // const getData = async () => {
    //     const data = await fetch('https://raw.githubusercontent.com/javialcocer/test-json/main/data.json', {
    //         method: 'GET',
    //     })
    //         .then((response) => response.json())
    //         .then((data) => (data))
    //         .catch((error) => {
    //             console.error('Error:', error)
    //         })
    //     const {es} = data
    //     const {en} = data
    //
    //     localStorage.setItem('langEs',JSON.stringify(es))
    //     localStorage.setItem('langEn',JSON.stringify(en))
    // }
    // useEffect(() => {
    //     getData()
    // }, []);

    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}
export default App
