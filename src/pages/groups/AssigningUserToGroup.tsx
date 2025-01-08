import HomeLayout from "../../layout/HomeLayout.tsx";
import {Autocomplete, Button, Checkbox, TextField} from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const AllGroups = () => {

    const username = [
        {title: 'علی بهرامپور', id: 1994},
        {title: 'محمد قربانی', id: 1972},
        {title: 'مهدی دیناری', id: 554},
        {title: 'محمدجواد ابراهیمی', id: 1974},
    ];
    const groups = [
        {title: 'گروه کاری انبار کاشان', id: 1994},
        {title: 'گروه کاری فروشگاه کاشان', id: 94},
    ];

    return (
        <HomeLayout>

            <div className={`max-w-lg`}>
                <p className={`text-xl mb-5`}>انتساب کاربران به گروه</p>

                <div className="space-y-3">
                    <Autocomplete
                        multiple
                        id="checkboxes-tags-demo"
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
                    <Autocomplete
                        id="checkboxes-tags-ddd"
                        options={groups}
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
                            <TextField {...params} label="انتخاب گروه کاری"/>
                        )}
                    />
                    <Button sx={{width: 1}} variant="contained">
                        تایید
                    </Button>

                </div>
            </div>
        </HomeLayout>
    );
};

export default AllGroups;