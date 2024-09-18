import { Container } from "@mui/material";
import Brands from "./Brands";
import Head from "./Head";

export default function HomePage() {
    return (
        <Container sx={{ maxWidth: '100% !important', padding: '0 !important' }}>
            <Head />
            <Brands />
        </Container>
    )
}
