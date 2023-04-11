import React, { useState } from 'react'
import { Button, Stack, IconButton, Icon, ButtonGroup, ToggleButton, ToggleButtonGroup } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
function MuiButton() {
    const [formats, setFormats] = useState([])
    console.log({
        formats
    })
    const handleFormatChange = (_event, updatedFormats) => {
        setFormats(updatedFormats)
    }
    return (
        <Stack spacing={2} >
            <Stack spacing={4} direction="row">
                <Button variant='text' href='https://mui.com/material-ui/react-button/'>MUI.COM - BUTTON</Button>
                <Button variant='contained'>Contained</Button>
                <Button variant='outlined'>Outlined</Button>
            </Stack>
            <Stack spacing={4} direction="row">
                <Button variant='contained' color='primary'>PRIMARY</Button>
                <Button variant='text' color='secondary'>SECONDARY</Button>
                <Button variant='outlined' color='info'>INFO</Button>
                <Button variant='contained' color='error'>ERROR</Button>
                <Button variant='contained' color='warning'>WARNING</Button>
                <Button variant='contained' color='success'>SUCCESS</Button>
            </Stack>
            <Stack display="block" spacing={2} direction="row">
                <Button variant='contained' size='small'>SMALL</Button>
                <Button variant='contained' size='medium'>MEDIUM</Button>
                <Button variant='contained' size='large'>LARGE</Button>
            </Stack>
            <Stack spacing={4} direction="row">
                <Button variant='contained' startIcon={<SendIcon />} disableRipple>Send</Button>
                <Button variant='contained' endIcon={<SendIcon />} disableElevation>Send</Button>
                <IconButton aria-label='send' color='success' size="large">
                    <SendIcon onClick={() => alert("Alert")} />
                </IconButton>
            </Stack>
            <Stack direction="row">
                <ButtonGroup aria-label='alignment button group' variant='outlined' orientation='vertical' size='small' color='secondary'>
                    <Button onClick={() => alert("Left Clicked")}>LEFT</Button>
                    <Button >CENTER</Button>
                    <Button>RIGHT</Button>
                </ButtonGroup>
            </Stack>
            <Stack direction="row">
                <ToggleButtonGroup
                    value={formats}
                    onChange={handleFormatChange}
                    aria-label='text formatting'
                    size='small'
                    color='success'
                    orientation='vertical'
                    exclusive
                >
                    <ToggleButton value="bold" aria-label='bold'><FormatBoldIcon /></ToggleButton>
                    <ToggleButton value="italic" aria-label='italic'><FormatItalicIcon /></ToggleButton>
                    <ToggleButton value="underlined" aria-label='underlined'><FormatUnderlinedIcon /></ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack >
    )
}

export default MuiButton