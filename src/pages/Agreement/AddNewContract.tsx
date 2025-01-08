import HomeLayout from "../../layout/HomeLayout.tsx";
import {Autocomplete, Button, Checkbox, TextField} from "@mui/material";
import {DatePicker} from "@mui/x-date-pickers";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const AddNewContract = () => {
    const jobs = [
        {id: 1, title: "برنامه نویس"},
        {id: 1, title: "محتوا نویس"},
        {id: 1, title: "ui ux designer"},
    ]
    return (
        <HomeLayout>

            <div className={`max-w-lg`}>
                <p className={`mb-3 text-lg`}>افزودن قرارداد جدید</p>
                <div className="space-y-3">
                    <TextField label={`عنوان`} sx={{width: 1}}/>
                    <TextField label={`نوع قرارداد`} sx={{width: 1}}/>
                    <DatePicker sx={{width: 1}} label={'شروع  '}/>
                    <DatePicker sx={{width: 1}} label={'پایان  '}/>

                    <Autocomplete
                        id="checkboxes-tags-demo"
                        options={jobs}
                        disableCloseOnSelect
                        getOptionLabel={(option) => option.title}
                        renderOption={(props, option, {selected}) => {
                            const {key, ...optionProps} = props;
                            return (
                                <li key={key} {...optionProps}>
                                    <Checkbox
                                        icon={<CheckBoxOutlineBlankIcon fontSize="small"/>}
                                        checkedIcon={<CheckBoxIcon fontSize="small"/>}
                                        style={{marginRight: 8}}
                                        checked={selected}
                                    />
                                    {option.title}
                                </li>
                            );
                        }}
                        renderInput={(params) => (
                            <TextField {...params} label="انتخاب عنوان شغلی (تامین اجتماعی)"/>
                        )}
                    />
                    <Button variant={'contained'} sx={{width: 1}}>تایید</Button>
                </div>

            </div>
        </HomeLayout>
    );
};

export default AddNewContract;