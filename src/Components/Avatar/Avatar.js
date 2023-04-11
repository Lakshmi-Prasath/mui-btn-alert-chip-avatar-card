import React from 'react'
import { Stack, Avatar, AvatarGroup } from '@mui/material'
function MuiAvatar() {
    return (
        <Stack spacing={4}>
            <Stack direction="row" spacing={1}>
                <Avatar sx={{ bgcolor: 'primary.light' }}>PR</Avatar>
                <Avatar sx={{ bgcolor: 'success.light' }}>SD</Avatar>
            </Stack>
            <Stack direction="row" spacing={1}>
                <AvatarGroup max={4}>

                    <Avatar
                        src='https://m.media-amazon.com/images/M/MV5BZWJlODhlMzctOTU0Yi00MTUwLTkxODYtMDNjNTQxYTI2YTE1XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg'
                        alt='Vijay'
                    />
                    <Avatar
                        src='https://images.news18.com/ibnlive/uploads/2022/08/001-5-5.png'
                        alt='Trisha'
                    />
                    <Avatar
                        src='https://igimages.gumlet.io/tamil/home/lokesh-salmankhan1972022m2.jpg?w=376&dpr=2.6'
                        alt='Lokesh'
                    />
                    <Avatar sx={{ bgcolor: 'primary.light' }}>PR</Avatar>
                    <Avatar sx={{ bgcolor: 'success.light' }}>SD</Avatar>
                    <Avatar sx={{ bgcolor: 'success.light' }}>SD</Avatar>
                </AvatarGroup>
            </Stack>
            <Stack direction="row" spacing={1}>
                <Avatar sx={{ bgcolor: 'primary.light', width: 60, height: 60 }}>PR</Avatar>
                <Avatar variant='rounded' sx={{ bgcolor: 'success.light', width: 60, height: 60 }}>SD</Avatar>
            </Stack>
        </Stack>
    )
}

export default MuiAvatar