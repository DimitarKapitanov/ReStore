import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function DressStyle() {
    return (
        <Container className='dress-style' maxWidth='lg'>
            <Typography variant="h2" className="dress-style-head">BROWSE BY DRESS STYLE</Typography>
            <Box className='dress-style-type'>
                <Grid container spacing={2}>
                    <Box className='dress-style-row'>
                        <Grid size={4} >
                            <img src="/images/home/casual.png" alt="dress-style-1" />
                        </Grid>
                        <Grid size={8} >
                            <img src="/images/home/formal.png" alt="dress-style-2" />
                        </Grid>
                    </Box>
                    <Box className='dress-style-row'>
                        <Grid size={8}>
                            <img src="/images/home/party.png" alt="dress-style-3" />
                        </Grid>
                        <Grid size={4}>
                            <img src="/images/home/gym.png" alt="dress-style-4" />
                        </Grid>
                    </Box>
                </Grid>
            </Box>
        </Container>
    )
}
