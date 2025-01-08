import HomeLayout from "../../layout/HomeLayout.tsx";
import {Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField} from "@mui/material";
import {useState} from "react";

const ConnectDeviceClock = () => {
    const [select, setSelect] = useState('')

    const handleChange = (event: SelectChangeEvent) => {
        setSelect(event.target.value as string);
    };

    return (
        <HomeLayout>
            <div>
                <p className={`text-xl`}>افزودن دستگاه جدید </p>

                <div className="max-w-xl mt-4">
                    <form action="">
                        <div className="xl:grid xl:grid-cols-2 xl:gap-4">
                            <TextField label={`عنوان دستگاه`}/>
                            <TextField label={`ای پی دستگاه `}/>
                            <TextField label={`پورت`} type={`number`}/>
                            <FormControl fullWidth>
                                <InputLabel id="d emo-simple-select-label">نوع دستگاه</InputLabel>
                                <Select labelId="demo-simple-select-label"
                                        id="demo-simple-select" value={select} onChange={handleChange}
                                        variant={'outlined'}>
                                    <MenuItem value={1}>zk</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <Button sx={{width: 1,mt:2}} variant={'contained'}>ثبت</Button>
                    </form>
                </div>
            </div>
        </HomeLayout>
    );
};

export default ConnectDeviceClock;