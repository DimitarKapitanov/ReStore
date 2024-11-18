// TabsPanel.tsx
import { Box, Divider, Tab, Tabs, Typography } from "@mui/material";
import { SyntheticEvent } from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

interface TabsPanelProps {
  description: string;
  tabValue: number;
  handleTabChange: (event: SyntheticEvent, newValue: number) => void;
}

export default function TabsPanel({
  description,
  tabValue,
  handleTabChange,
}: TabsPanelProps) {
  return (
    <Box
      sx={{
        width: "100%",
        mt: 4,
        border: 2,
        borderColor: "divider",
        borderRadius: 4,
        boxShadow: 6,
        p: 2,
      }}
    >
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        aria-label="product information tabs"
        textColor="secondary"
        indicatorColor="secondary"
      >
        <Tab label="Product Information" />
        <Tab label="Reviews" />
        <Tab label="Another Tab" />
      </Tabs>
      <Divider sx={{ mt: 4 }} />

      <TabPanel value={tabValue} index={0}>
        <Typography variant="body1">{description}</Typography>
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        Reviews content here
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        Another tab content here
      </TabPanel>
    </Box>
  );
}
