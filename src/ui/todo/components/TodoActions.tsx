import { Box, Button, IconButton } from "@mui/material";


interface Props {
    onComplete: () => void
}
export const TodoActions: React.FunctionComponent<Props> = ({onComplete}) => {
    return (
        <Box sx={{ ml: 1 }}>
            <Button onClick={onComplete}>complete tasks</Button>
        </Box>
    );
}