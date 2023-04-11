import React from 'react'
import { Stack, Alert, AlertTitle, Button } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'

function Alerts() {
    return (
        <Stack spacing={2}>
            <Alert severity='error'>
                <AlertTitle>Error</AlertTitle>
                This is an error alert
            </Alert>
            <Alert severity='warning'>
                <AlertTitle>Warning</AlertTitle>
                This is an warning alert
            </Alert>
            <Alert severity='info'>
                <AlertTitle>Info</AlertTitle>
                This is an info alert
            </Alert>
            <Alert severity='success'>
                <AlertTitle>Success</AlertTitle>
                This is an success alert
            </Alert>

            <Alert severity='error' variant='outlined'>
                <AlertTitle>Error</AlertTitle>
                This is an error alert
            </Alert>
            <Alert severity='warning' variant='outlined'>
                <AlertTitle>
                    Warning
                </AlertTitle>
                This is an warning alert
            </Alert>
            <Alert severity='info' variant='outlined'>
                <AlertTitle>Info</AlertTitle>
                This is an info alert
            </Alert>
            <Alert severity='success' variant='outlined'>
                <AlertTitle>Success</AlertTitle>
                This is an success alert
            </Alert>

            <Alert severity='error' variant='filled' onClose={() => alert("Close Alert")}>
                <AlertTitle>Error</AlertTitle>
                This is an error alert
            </Alert>
            <Alert severity='warning' variant='filled'>
                <AlertTitle>Warning</AlertTitle>
                This is an warning alert
            </Alert>
            <Alert severity='info' variant='filled'>
                <AlertTitle>Info</AlertTitle>
                his is an info alert
            </Alert>
            <Alert
                severity='success'
                variant='filled'
                icon={<CheckIcon fontSize='inherit' />}
                action={
                    <Button color='inherit' size='small'>
                        UNDO
                    </Button>
                }
            >
                <AlertTitle>Success</AlertTitle>
                This is an success alert
            </Alert>
        </Stack>
    )
}

export default Alerts