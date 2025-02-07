import { render } from 'react-dom'
import App from './app/App'
import 'app/styles/index.scss'
import { StoreProvider } from 'app/Providers/StoreProvider'
import { BrowserRouter } from 'react-router-dom'

render(
    <BrowserRouter>
        <StoreProvider>
            <App />
        </StoreProvider>
    </BrowserRouter>,
    document.getElementById('root')
)