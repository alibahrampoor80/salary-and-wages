import HomeLayout from "../../layout/HomeLayout.tsx";
import {Autocomplete, Button, Checkbox, TextField} from "@mui/material";
import {MobileTimePicker} from "@mui/x-date-pickers";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const AddGroup = () => {

    const company = [
        {title: 'فروشگاه یاس فاز 2', id: 1994},
        {title: 'فروشگاه جاده فین', id: 1972},
        {title: 'انبار اصلی شهرک', id: 554},
    ];

    return (
        <HomeLayout>

            <div className={`max-w-lg`}>
                <p className={`text-xl mb-3`}>افزودن گروه </p>

                <div className="space-y-3">
                    <TextField label={`عنوان `} sx={{width: 1}}/>

                    <MobileTimePicker sx={{width: 1}} label={'شروع ساعت کاری '}/>
                    <MobileTimePicker sx={{width: 1}} label={'پایان ساعت کاری '}/>

                    <Autocomplete
                        multiple
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
                            <TextField {...params} label="انتخاب شعبه "/>
                        )}
                    />

                    <TextField label={`توضیحات `} type={`text`} sx={{width: 1}} multiline rows={5}/>
                    <Button sx={{width: 1}} variant={`contained`}>
                        افزودن گروه
                    </Button>

                </div>
            </div>
        </HomeLayout>
    );
};

export default AddGroup;