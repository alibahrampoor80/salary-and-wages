import HomeLayout from "../../layout/HomeLayout.tsx";
import {Autocomplete, Button, Checkbox, TextField} from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const AssigningUserToCompany = () => {

    const company = [
        {title: 'انبار مرکزی  ', id: 1994},
        {title: 'فروشگاه کاشان (قنادی)', id: 1972},
    ];
    const username = [
        {title: 'علی بهرامپور', id: 1994},
        {title: 'محمد قربانی', id: 1972},
        {title: 'مهدی دیناری', id: 554},
        {title: 'محمدجواد ابراهیمی', id: 1974},
    ];

    return (
        <HomeLayout>

            <div className={`max-w-md`}>

                <p className="text-xl mb-4">انتصاب کاربر به شرکت</p>
                <div className="space-y-3">

                    <Autocomplete
                        // multiple
                        id="checkboxes-tags-demo"
                        options={company}
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
                            <TextField {...params} label="انتخاب شرکت"/>
                        )}
                    />
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
                            <TextField {...params} label="انتخاب کاربران"/>
                        )}
                    />
                    <Button variant={`contained`} sx={{width: 1}}>
                        تایید اطلاعات
                    </Button>
                </div>
            </div>
        </HomeLayout>
    );
};

export default AssigningUserToCompany;