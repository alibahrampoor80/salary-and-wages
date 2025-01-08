import HomeLayout from "../../layout/HomeLayout.tsx";
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

const GetDeviceClockInfo = () => {
    return (
        <HomeLayout>
            <div>
                <p className={`text-xl`}>دریافت اطلاعات از ساعت </p>

                <div className="max-w-4xl mt-4">
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650}} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>شناسه</TableCell>
                                    <TableCell>عنوان دستگاه</TableCell>
                                    <TableCell>ای پی دستگاه</TableCell>
                                    <TableCell>پورت</TableCell>
                                    <TableCell>نوع دستگاه</TableCell>
                                    <TableCell>عملیات</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="td">1 </TableCell>
                                    <TableCell component="td">دستگاه کارگاه کاشان </TableCell>
                                    <TableCell component="td">192.168.47.22  </TableCell>
                                    <TableCell component="td">8041  </TableCell>
                                    <TableCell component="td">ZK  </TableCell>
                                    <TableCell component="td">
                                        <div className="flex gap-x-3">
                                        <Button variant={'contained'}>
                                            دریافت اطلاعات
                                        </Button>
                                        <Button variant={'contained'} color={'error'}>
                                            حذف
                                        </Button>

                                        </div>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="td">2 </TableCell>
                                    <TableCell component="td">دستگاه کارگاه شهرک  </TableCell>
                                    <TableCell component="td">165.31.80.168
                                    </TableCell>
                                    <TableCell component="td">2049  </TableCell>
                                    <TableCell component="td">ZK  </TableCell>
                                    <TableCell component="td">
                                        <div className="flex gap-x-3">
                                        <Button variant={'contained'}>
                                            دریافت اطلاعات
                                        </Button>
                                        <Button variant={'contained'} color={'error'}>
                                            حذف
                                        </Button>

                                        </div>
                                    </TableCell>
                                </TableRow>

                            </TableBody>

                        </Table>


                    </TableContainer>
                </div>
            </div>
        </HomeLayout>
    );
};

export default GetDeviceClockInfo;