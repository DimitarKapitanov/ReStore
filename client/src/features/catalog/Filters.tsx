import { Box, Checkbox, FormControlLabel, FormGroup, Typography } from "@mui/material";

export default function Filters() {
    return (
        <Box sx={{ width: 200, padding: 2 }}>
            <Typography variant="h6">Filters</Typography>
            <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Filter 1" />
                <FormControlLabel control={<Checkbox />} label="Filter 2" />
                <FormControlLabel control={<Checkbox />} label="Filter 3" />
            </FormGroup>
        </Box>
    );
}