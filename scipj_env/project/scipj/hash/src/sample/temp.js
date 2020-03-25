
    <div className={translate_classes.root}>
    <AppBar position="static" color="default">
      <Tabs value={value1} onChange={handleChange1} indicatorColor="primary" textColor="primary" variant="scrollable"
      scrollButtons="auto" aria-label="scrollable auto tabs example" style={{ paddingTop: '64px' }}>
        <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
        <Tab label="Item Four" {...a11yProps(3)} />
      </Tabs>
    </AppBar>
    <TabPanel value={value1} index={0}>Item One</TabPanel>
    <TabPanel value={value1} index={1}>Item Two</TabPanel>
    <TabPanel value={value1} index={2}>Item Three</TabPanel>
    <TabPanel value={value1} index={3}>Item Four</TabPanel>
  </div>