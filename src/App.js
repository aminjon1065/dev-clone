import './styles/App.scss';
import {QueryClient, QueryClientProvider} from "react-query";
import MainRoutes from "./routes";
import {ReactQueryDevtoolsPanel} from "react-query/devtools";

function App() {
    const queryClient = new QueryClient();
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <MainRoutes/>
                <ReactQueryDevtoolsPanel/>
            </QueryClientProvider>
        </>
    );
}

export default App;
