import {
    Box,
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
    CardMedia,
    List,
    ListItem,
    ListItemText
} from "@mui/material"
function Cards() {
    return (
        <Box width="300px">
            <Card>
                <CardMedia
                    component="img"
                    height="240"
                    image="https://upload.wikimedia.org/wikipedia/commons/5/51/Brihadeeswara_Temple_Gopuram_at_Night.jpg"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component='div'>
                        Thanjai Periya Kovil
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        The Great Living Chola Temples is a UNESCO World Heritage Site designation for a group of Chola dynasty era Hindu temples in the Indian state of Tamil Nadu. Completed between early 11th and the 12th century CE.
                    </Typography>
                    <Typography>
                        <List>
                            <ListItem>
                                <ListItemText primary="The monuments include:" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Brihadisvara Temple" secondary="at Thanjavur" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Brihadisvara Temple" secondary="at Gangaikonda Cholapuram" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Airavatesvara Temple" secondary="at Kumbakonam" />
                            </ListItem>
                        </List>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">like</Button>
                </CardActions>
            </Card>
        </Box>
    )
}

export default Cards