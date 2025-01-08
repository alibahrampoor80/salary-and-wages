import {Button, TextField} from "@mui/material";
import HomeLayout from "../layout/HomeLayout.tsx";


const FiscalYear = () => {
    return (
        <HomeLayout>
            <div>
                <p className={`text-xl`}>تغییر سال مالی </p>

                <div className="max-w-lg mt-4">
                    <form className={`flex flex-col`}>
                        <TextField label="سال"/>
                        <Button variant={`contained`} sx={{mt: 2}}>ذخیره </Button>
                    </form>
                </div>

            </div>
        </HomeLayout>
    );
};

export default FiscalYear;