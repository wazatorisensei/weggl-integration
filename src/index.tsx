import ReactDOM from 'react-dom/client'
import { WebglIntegration } from './WebglIntegration'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <WebglIntegration />,
)
