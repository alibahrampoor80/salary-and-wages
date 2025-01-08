import HomeLayout from "../../layout/HomeLayout.tsx";
import {DataGrid} from "@mui/x-data-grid";
import {columnsListUsers, rowsUsersList} from "../../data.tsx";


const Users = () => {
    return (
        <HomeLayout>
            <div>
                <p className="text-xl">لیست تمام کاربران </p>

                <DataGrid
                    sx={{mt: 2}}
                    rows={rowsUsersList}
                    columns={columnsListUsers}
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

export default Users;