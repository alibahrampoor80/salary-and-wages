import HomeLayout from "../../layout/HomeLayout.tsx";
import {Autocomplete, Button, Checkbox, TextField} from "@mui/material";
import {DatePicker} from "@mui/x-date-pickers";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const AllCompanies = () => {

    const username = [
        {title: 'انبار ', id: 1994},
        {title: 'فروشگاه', id: 1972},
        {title: 'حسابداری ', id: 554},
        {title: 'واحد IT', id: 14474},
        {title: 'واحد پردازش محصولات', id: 222},
    ];

    return (
        <HomeLayout>

            <div className={`w-full`}>

                <p className="text-xl">افزودن شرکت جدید</p>
                <div className="grid lg:grid-cols-4 lg:gap-4 mt-4">
                    <TextField label={`نام شرکت`} type={`number`}/>
                    <TextField label={`نام مدیر`} type={`text`}/>
                    <TextField label={`شناسه تجاری`} type={`text`}/>
                    <TextField label={`شماره تلفن شرکت`} type={`number`}/>
                    <TextField label={`کد ملی`} type={`number`}/>
                    <DatePicker label={`تاریخ تاسیس`}/>

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
                            <TextField {...params} label="انتخاب گروه"/>
                        )}
                    />

                    <div className="xl:col-span-2">
                        <TextField label={`آدرس شرکت`} type={`text`} sx={{width: 1}} multiline rows={5}/>
                    </div>
                    <div className="xl:col-span-2">
                        <TextField label={`توضیحات اضافی`} type={`text`} sx={{width: 1}} multiline rows={5}/>
                    </div>

                </div>
                <Button sx={{width: 1,mt:3}} variant={'contained'}> ثبت</Button>
            </div>
        </HomeLayout>
    );
};

export default AllCompanies;