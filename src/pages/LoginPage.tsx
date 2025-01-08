import {Button, TextField} from "@mui/material";

const LoginPage = () => {
    return (
        <div className={`container xl:max-w-screen-lg h-full min-h-screen flex items-center flex-col justify-center `}>
            <div
                className="grid md:grid-cols-2 max-sm:grid-cols-1 bg-secondary-500 my-3 md:h-[450px] rounded-xl overflow-hidden">
                <div className="flex items-center justify-center gap-4 max-sm:order-2 max-sm:pb-4 h-full">
                    <div className="max-sm:mx-5 flex flex-col justify-center w-full h-full md:mx-3 max-sm:mt-4">
                        <p className={`text-[#000E08] text-xl font-bold`}>
                            وارد حساب کاربری خود شوید
                        </p>
                        <form action="">
                            <div className="mt-7 space-y-3">
                                <TextField label={`شماره پرسنلی`} variant={`outlined`} color={`info`} sx={{width: 1}}/>
                                <TextField label={`کلمه ی عبور`} type={'password'} variant={`outlined`} color={`info`}
                                           sx={{width: 1}}/>
                                <Button sx={{width: 1}} variant={'contained'}>
                                    ورود
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="max-sm:order-1 max-sm:h-[200px] h-[inherit] w-full ">
                    <img src="/accounting.webp" alt="" className={`w-full h-full object-cover`}/>
                </div>


            </div>
        </div>
    );
};

export default LoginPage;