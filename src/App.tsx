import {QueryClient, QueryClientProvider,} from '@tanstack/react-query'
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import FiscalYear from "./pages/FiscalYear.tsx";
import Users from "./pages/user/Users.tsx";
import AddUsersComponent from "./pages/user/AddUsersComponent.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import HomeLayout from "./layout/HomeLayout.tsx";
import ConnectDeviceClock from "./pages/clock/ConnectDeviceClock.tsx";
import GetDeviceClockInfo from "./pages/clock/GetDeviceClockInfo.tsx";
import GetFileClockInfo from "./pages/clock/GetFileClockInfo.tsx";
import UserAddRole from "./pages/role/UserAddRole.tsx";
import UserEditRole from "./pages/role/UserEditRole.tsx";
import AllCompanies from "./pages/company/AllCompanies.tsx";
import AssigningUserToCompany from "./pages/company/AssigningUserToCompany.tsx";
import AddCompany from "./pages/company/AddCompany.tsx";
import IndividualReport from "./pages/reports/IndividualReport.tsx";
import AbsenceReport from "./pages/reports/AbsenceReport.tsx";
import LeaveBalanceReport from "./pages/reports/LeaveBalanceReport.tsx";
import AddGroup from "./pages/groups/AddGroup.tsx";
import AllGroups from "./pages/groups/AllGroups.tsx";
import AssigningUserToGroup from "./pages/groups/AssigningUserToGroup.tsx";
import AllContracts from "./pages/Agreement/AllContracts.tsx";
import AddNewContract from "./pages/Agreement/AddNewContract.tsx";
import AssigningContractToUser from "./pages/Agreement/AssigningContractToUser.tsx";
import PersonnelPerformanceInformation from "./pages/financialManagement/PersonnelPerformanceInformation.tsx";
import WorksheetAndPerformanceCalculation from "./pages/financialManagement/WorksheetAndPerformanceCalculation.tsx";


function App() {
    const queryClient = new QueryClient()


    return (
        <>
            <QueryClientProvider client={queryClient}>

                <Routes>
                    <Route element={<HomePage/>} path={'/'}/>
                    <Route element={<FiscalYear/>} path={'/fiscalYear'}/>
                    <Route element={<Users/>} path={'/users'}/>
                    <Route element={<AddUsersComponent/>} path={'/user-add'}/>
                    <Route element={<ConnectDeviceClock/>} path={'/connect-device-clock'}/>
                    <Route element={<GetDeviceClockInfo/>} path={'/get-device-clock-info'}/>
                    <Route element={<GetFileClockInfo/>} path={'/get-file-clock-info'}/>
                    <Route element={<UserAddRole/>} path={'/user-add-role'}/>
                    <Route element={<UserEditRole/>} path={'/user-role'}/>
                    <Route element={<AllCompanies/>} path={'/all-companies'}/>
                    <Route element={<AddCompany/>} path={'/add-company'}/>
                    <Route element={<AssigningUserToCompany/>} path={'/assigning-user-to-company'}/>
                    <Route element={<IndividualReport/>} path={'/individual-report'}/>
                    <Route element={<AbsenceReport/>} path={'/absence-report'}/>
                    <Route element={<LeaveBalanceReport/>} path={'/leave-balance-report'}/>

                    <Route element={<AddGroup/>} path={'/add-group'}/>
                    <Route element={<AllGroups/>} path={'/all-groups'}/>
                    <Route element={<AssigningUserToGroup/>} path={'/assigning-user-to-group'}/>

                    <Route element={<AllContracts/>} path={'/all-contracts'}/>
                    <Route element={<AddNewContract/>} path={'/add-contract'}/>
                    <Route element={<AssigningContractToUser/>} path={'/assigning-contract-to-user'}/>

                    <Route element={<PersonnelPerformanceInformation/>} path={'/personnel-performance-information'}/>
                    <Route element={<WorksheetAndPerformanceCalculation/>} path={'/worksheet-and-performance-calculation'}/>

                    {/*<Route path={'edit'}>*/}
                    {/*    <Route index element={*/}
                    {/*        <Typography sx={{textAlign: "center", fontSize: "30px"}}>لطفا شناسه کاربر را وارد*/}
                    {/*            کنید</Typography>}/>*/}
                    {/*    <Route element={<EditUser/>} path={':id'}/>*/}
                    {/*</Route>*/}
                    {/*<Route path={'add'} element={<AddUser/>}/>*/}
                    <Route element={<HomeLayout><p>صفحه ی مورد نظر پیدا نشد</p></HomeLayout>} path={'*'}/>
                    <Route element={<LoginPage/>} path={'/login'}/>
                </Routes>

            </QueryClientProvider>
        </>
    )
}

export default App
