import { Button, Container, Divider, Typography } from '@mui/material';

export default function Head() {
    return (
        <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="content">
                <Typography variant="h1" sx={{ fontSize: 64, fontWeight: 'bold' }}>FIND CLOTHES THAT MATCHES YOUR STYLE</Typography>
                <Typography variant="subtitle1" mt={3}>
                    Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                </Typography>
                <Button sx={{
                    backgroundColor: 'black',
                    color: 'white',
                    borderRadius: 20,
                    padding: '16px 54px',
                    mt: 4,

                }}>
                    Shop Now
                </Button>
                <div className='counter'>
                    <div>
                        <Typography variant="h3" mt={3}>200+</Typography>
                        <Typography variant="subtitle1">International Brands</Typography>
                    </div>
                    <Divider orientation="vertical" flexItem sx={{ margin: '0 20px' }} />
                    <div>
                        <Typography variant="h3" mt={3}>200+</Typography>
                        <Typography variant="subtitle1">International Brands</Typography>
                    </div>
                    <Divider orientation="vertical" flexItem sx={{ margin: '0 20px' }} />
                    <div>
                        <Typography variant="h3" mt={3}>200+</Typography>
                        <Typography variant="subtitle1">International Brands</Typography>
                    </div>
                </div>
            </div>
            <div className="image-container">
                <img src='/images/home/head-home-image.png' alt="homepage" className="image" />
            </div>
        </Container>
    );
}