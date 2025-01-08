import HomeLayout from "../../layout/HomeLayout.tsx";
import {DataGrid} from "@mui/x-data-grid";
import {columnsListCompany, rowsCompanyList} from "../../data.tsx";

const AllCompanies = () => {
    return (
        <HomeLayout>

            <div className={`w-full`}>

                <p className="text-xl">همه شرکت ها </p>

                <DataGrid
                    sx={{mt: 2}}
                    rows={rowsCompanyList}
                    columns={columnsListCompany}
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

export default AllCompanies;