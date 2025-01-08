import HomeLayout from "../../layout/HomeLayout.tsx";
import {DataGrid} from "@mui/x-data-grid";
import {columnsListContract, rowContractList} from "../../data.tsx";

const AllContracts = () => {
    return (
        <HomeLayout>
            <div>
                <p className="text-xl">لیست تمام قرارداد ها </p>

                <DataGrid
                    sx={{mt: 2}}
                    rows={rowContractList}
                    columns={columnsListContract}
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

export default AllContracts;