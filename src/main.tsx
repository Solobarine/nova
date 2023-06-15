import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { CookiesProvider } from 'react-cookie'
import App from './App.tsx'
import store from './features/store/store.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CookiesProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </CookiesProvider>
  </React.StrictMode>,
)
