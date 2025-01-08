import {Typography} from "@mui/material";

const Empty = ({resourceName}: { resourceName: string }) => {
    return (
        <Typography color={'red'} sx={{fontSize: "20px"}}> {resourceName} یافت نشد.</Typography>
    );
};

export default Empty;