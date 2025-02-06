import { render } from 'react-dom'
import App from './app/App'
import 'app/styles/index.scss'
import { StoreProvider } from 'app/Providers/StoreProvider'

render(
    <StoreProvider>
        <App />
    </StoreProvider>,
    document.getElementById('root')
)