import HomeLayout from "../../layout/HomeLayout.tsx";
import {Autocomplete, Button, Checkbox, TextField} from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const AssigningContractToUser = () => {

    const jobs = [
        {id: 1, title: "برنامه نویس"},
        {id: 1, title: "محتوا نویس"},
        {id: 1, title: "ui ux designer"},
    ]
    const username = [
        {title: 'علی بهرامپور', id: 1994},
        {title: 'محمد قربانی', id: 1972},
        {title: 'مهدی دیناری', id: 554},
        {title: 'محمدجواد ابراهیمی', id: 1974},
    ];


    return (
        <HomeLayout>
            <div className={`max-w-lg`}>
                <p className={`text-xl mb-4`}>
                    انتساب قرار داد به کاربر
                </p>

                <div className="space-y-3">
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

                    <Autocomplete
                        multiple
                        id="checkboxes-tags-ss"
                        options={username}
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
                            <TextField {...params} label="انتخاب کاربر"/>
                        )}
                    />
                    <Button variant={'contained'} sx={{width: 1}}>تایید</Button>
                </div>
            </div>
        </HomeLayout>
    );
};

export default AssigningContractToUser;