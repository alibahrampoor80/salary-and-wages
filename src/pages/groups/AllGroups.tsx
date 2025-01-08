
import HomeLayout from "../../layout/HomeLayout.tsx";
import {DataGrid} from "@mui/x-data-grid";
import {columnsListGroups, rowsGroupsList} from "../../data.tsx";

const AllGroups = () => {
    return (
        <HomeLayout>

            <div>
                <p className="text-xl">لیست تمام گروه ها </p>

                <DataGrid
                    sx={{mt: 2}}
                    rows={rowsGroupsList}
                    columns={columnsListGroups}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            }
                        }
                    }}
                    pageSizeOptions={[5]}
                    // checkboxSelection
                    // disableRowSelectionOnClick
                />
            </div>
        </HomeLayout>
    );
};

export default AllGroups;