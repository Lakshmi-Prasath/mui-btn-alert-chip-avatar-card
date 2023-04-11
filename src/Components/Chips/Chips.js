import { Stack, Chip, Avatar } from '@mui/material'
import FaceIcon from '@mui/icons-material/Face'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

function Chips() {
    const [chips, setChips] = useState(["chip-1", "chip-2", "chip-3"])
    const deleteHandler = (chipToDelete) => {
        setChips((chips) => chips.filter((chip) => chip !== chipToDelete))
    }
    return (
        <Stack direction='row' spacing={1}>
            <Chip label="ChipPrimary" color='primary' size='small' icon={<FaceIcon
            />} />
            <Chip label="Menu" color='primary' size='small' icon={<MenuIcon
            />} />
            <Chip label="outlined" color='secondary' variant='outlined' size='small' avatar={<Avatar>A</Avatar>} />
            <Chip label="click" color='success' onClick={() => alert("clicked")} />
            <Chip label="delete" color='error' onClick={() => alert("clicked")} onDelete={() => alert("delete handler called")} />
            {chips.map(chip => (
                <Chip key={chip} label={chip} onDelete={() => deleteHandler(chip)} />
            ))}
        </Stack>
    )
}

export default Chips