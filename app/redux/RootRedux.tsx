
'use client'

import { Provider } from "react-redux";
import { store } from "./store/store";

interface props {
    children: React.ReactNode
}

const RootRedux = ({ children }: props) => {

    return <Provider store={store}>
                {children}
           </Provider>
}

export default RootRedux;