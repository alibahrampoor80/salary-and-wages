import {DataGrid} from "@mui/x-data-grid";
import {columnsListPerformanceUsers, rowsUsersPerformanceList} from "../../data.tsx";
import HomeLayout from "../../layout/HomeLayout.tsx";

const PersonnelPerformanceInformation = () => {
    return (
        <HomeLayout>

            <div className={`w-full`}>
                <p className={`text-xl mb-4`}>اطلاعات کارکرد پرسنل</p>

                <DataGrid
                    sx={{mt: 2}}
                    rows={rowsUsersPerformanceList}
                    columns={columnsListPerformanceUsers}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    // checkboxSelection
                    // disableRowSelectionOnClick
                />
            </div>
        </HomeLayout>
    );
};

export default PersonnelPerformanceInformation;
