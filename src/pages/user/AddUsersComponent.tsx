import HomeLayout from "../../layout/HomeLayout.tsx";
import {Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField} from "@mui/material";
import {DatePicker} from "@mui/x-date-pickers";
import {useState} from "react";

const AddUsersComponent = () => {
    const [contract, setContract] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setContract(event.target.value);
    };
    const handleChangeMaritalStatus = (event: SelectChangeEvent) => {
        setMaritalStatus(event.target.value);
    };

    return (
        <HomeLayout>
            <div>
                <div className={`w-full`}>
                    <p className="text-xl">افزودن کاربر جدید </p>

                    <form action="" className={`mt-5`}>
                        <div className="grid lg:grid-cols-4 lg:gap-4">
                            <TextField label={`شناسه پرسنلی`} type={`number`}/>
                            <TextField label={`نام`} type={`text`}/>
                            <TextField label={`نام خانوادگی`} type={`text`}/>
                            <TextField label={`سن`} type={`number`}/>
                            <TextField label={`کد ملی`} type={`number`}/>
                            <TextField label={`شماره موبایل`} type={`number`}/>
                            <DatePicker label={'تاریخ تولد'}/>

                            <FormControl>
                                <InputLabel id="demo-simple-select-helper-label">قرارداد</InputLabel>
                                <Select
                                    value={contract}
                                    onChange={handleChange}
                                    displayEmpty
                                    variant={'outlined'}
                                    inputProps={{'aria-label': 'Without label'}}>
                                    <MenuItem value={1}>قراردادی</MenuItem>
                                    <MenuItem value={2}>رسمی </MenuItem>
                                    <MenuItem value={3}>کارآموزی</MenuItem>
                                </Select>

                            </FormControl>
                            <TextField label={'مدرک تحصیلی'}/>
                            <TextField label={'رشته تحصیلی'}/>

                            <FormControl>
                                <InputLabel id="demo-simple-select-helper-label">وضعیت تاهل</InputLabel>
                                <Select
                                    value={maritalStatus}
                                    onChange={handleChangeMaritalStatus}
                                    displayEmpty
                                    variant={'outlined'}
                                    inputProps={{'aria-label': 'Without label'}}>
                                    <MenuItem value={3}>-</MenuItem>
                                    <MenuItem value={1}>بله</MenuItem>
                                    <MenuItem value={2}>خیر</MenuItem>
                                </Select>
                            </FormControl>

                            <TextField label={`تعداد فرزندان`} type={`number`}/>
                            <TextField label={`سابقه کار`} type={`number`}/>
                            <TextField label={`سابقه بیمه`} type={`number`}/>
                        </div>
                        <Button variant={'contained'} sx={{mt: 2, width: 1}}>
                            ثبت
                        </Button>
                    </form>


                </div>
            </div>
        </HomeLayout>
    );
};

export default AddUsersComponent;