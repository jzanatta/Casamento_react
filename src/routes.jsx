import { BrowserRouter, Route, Routes } from "react-router-dom";
// tem que importar o react-router-dom
import Home from "./pages/Home";
import Casal from "./pages/Casal";
import Presentes from "./pages/Presentes";
import Presenca from "./pages/Presenca";
import Confirmado from "./pages/Confirmado";
import Pagamento from "./pages/Pagamento";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Suspense } from "react";

function Layout({ children }) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}

function AppRoutes() {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        {/* Basicamente, rota raiz, chama componente Home... */}
                        <Route path="/casal" element={<Casal />}></Route>
                        <Route path="/presentes" element={<Presentes />}></Route>
                        <Route path="/presenca" element={<Presenca />}></Route>
                        <Route path="/confirmado" element={<Confirmado />}></Route>
                        <Route path="/pagamento" element={<Pagamento />}></Route>
                    </Routes>
                </Layout>
            </Suspense>
        </BrowserRouter>
    )
}

export default AppRoutes
