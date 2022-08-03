import "./styles/App.scss";
import {QueryClient, QueryClientProvider} from "react-query";
import MainRoutes from "./routes";

function App() {
    const queryClient = new QueryClient();
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <MainRoutes/>
            </QueryClientProvider>
        </>
    );
}

export default App;
