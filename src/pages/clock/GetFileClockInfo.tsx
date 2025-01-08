import HomeLayout from "../../layout/HomeLayout.tsx";
import {useState} from "react";
import {MuiFileInput} from "mui-file-input";
import {AttachFile, Close} from "@mui/icons-material";
import {Button} from "@mui/material";

const GetFileClockInfo = () => {

    const [value, setValue] = useState<File | null>(null)

    const handleChange = (newValue: File | null) => {
        setValue(newValue)
    }

    return (
        <HomeLayout>
            <div>
                <p className={`text-xl`}>دریافت اطلاعات از فایل </p>

                <div className="max-w-sm mt-4">
                    <form action="" className={``}>
                        <MuiFileInput variant={'outlined'} label={`انتخاب فایل`} value={value}
                                      InputProps={{
                                          inputProps: {
                                              // accept: 'video/*'
                                          },
                                          startAdornment: <AttachFile/>
                                      }}
                                      clearIconButtonProps={{
                                          title: "remove",
                                          children: <Close/>
                                      }}
                                      onChange={handleChange}/>
                        <Button sx={{width: 1, mt: 2}} variant={'contained'}>آپلود فایل</Button>
                    </form>
                </div>
            </div>
        </HomeLayout>
    );
};

export default GetFileClockInfo;