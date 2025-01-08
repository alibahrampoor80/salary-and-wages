import NavLinkRoute from "./NavLinkRoute.tsx";

const SideBar = () => {

    return (
            <div className={`bg-[#4f39f6] h-full absolute w-full top-0 right-0 overflow-x-hidden overflow-y-auto`} id={`sidebarMenu`}>
            <p className={`text-center pt-4 font-extrabold`}>نرم افزار حقوق و دستمزد افلاک </p>
            <aside className="w-full p-6 sm:w-60 dark:bg-gray-50 dark:text-gray-800">
                <nav className="space-y-4 text-sm">
                    <ul className={`flex flex-col space-y-3 w-full`}>
                        <li>
                            <NavLinkRoute to={`/`} className={``}>
                                صفحه ی اصلی
                            </NavLinkRoute>
                            {/*<NavLink to={`/`} className={`listItemSideBar`}>صفحه ی اصلی </NavLink>*/}
                        </li>

                    </ul>
                    <div className="">
                        <h2 className="text-lg font-semibold tracking-widest uppercase dark:text-gray-600">
                            تنظیمات اولیه
                        </h2>
                        <div className="flex flex-col space-y-1 w-full">
                            <ul className={`flex flex-col w-full`}>
                                <li>
                                    <NavLinkRoute to={`/fiscalYear`} className={``}>تعریف سال مالی</NavLinkRoute>
                                </li>
                                <li>
                                    <NavLinkRoute to={`/connect-device-clock`} className={``}>
                                        افزودن دستگاه جدید </NavLinkRoute>
                                </li>
                                <li>
                                    <NavLinkRoute to={`/get-device-clock-info`} className={``}>دریافت اطلاعات از
                                        ساعت</NavLinkRoute>
                                </li>
                                <li>
                                    <NavLinkRoute to={`/get-file-clock-info`} className={``}>دریافت اطلاعات از
                                        فایل</NavLinkRoute>
                                </li>

                            </ul>

                        </div>
                    </div>

                    <div className="">
                        <h2 className="text-lg font-semibold tracking-widest uppercase dark:text-gray-600">
                            کاربران
                        </h2>
                        <div className="flex flex-col space-y-1 w-full">
                            <ul className={`flex flex-col  w-full`}>
                                <li>
                                    <NavLinkRoute to={`/users`} className={``}>همه کاربران </NavLinkRoute>
                                </li>
                                <li>
                                    <NavLinkRoute to={`/user-add`} className={``}>افزودن کاربر جدید </NavLinkRoute>
                                </li>
                                <li>
                                    <NavLinkRoute to={`/user-add-role`} className={``}>افزودن دسترسی </NavLinkRoute>
                                </li>
                                <li>
                                    <NavLinkRoute to={`/user-role`} className={``}> مشاهده و ویرایش دسترسی ها </NavLinkRoute>
                                </li>

                            </ul>

                        </div>
                    </div>

                    <div className="">
                        <h2 className="text-lg font-semibold tracking-widest uppercase dark:text-gray-600">
                            شرکت ها
                        </h2>
                        <div className="flex flex-col space-y-1 w-full">
                            <ul className={`flex flex-col  w-full`}>
                                <li>
                                    <NavLinkRoute to={`/all-companies`} className={``}> همه شرکت ها </NavLinkRoute>
                                </li>
                                <li>
                                    <NavLinkRoute to={`/add-company`} className={``}>افزودن شرکت جدید </NavLinkRoute>
                                </li>
                                <li>
                                    <NavLinkRoute to={`/assigning-user-to-company`} className={``}>انتساب کاربر به شرکت </NavLinkRoute>
                                </li>

                            </ul>

                        </div>
                    </div>

                    <div className="">
                        <h2 className="text-lg font-semibold tracking-widest uppercase dark:text-gray-600">
                            پارامتر ها
                        </h2>
                        <div className="flex flex-col space-y-1 w-full">
                            <ul className={`flex flex-col  w-full`}>
                                <li>
                                    <NavLinkRoute to={`/users`} className={``}> همه پارامتر ها </NavLinkRoute>
                                </li>
                                <li>
                                    <NavLinkRoute to={`/user-add`} className={``}>افزودن پارامتر جدید </NavLinkRoute>
                                </li>
                                <li>
                                    <NavLinkRoute to={`/user-add`} className={``}>انتساب پارامتر به
                                        کاربر </NavLinkRoute>
                                </li>

                                <li>
                                    <NavLinkRoute to={`/user-add`} className={``}> گروه پارامتر </NavLinkRoute>
                                </li>
                                <li>
                                    <NavLinkRoute to={`/user-add`} className={``}>تعریف گروه پارامتر </NavLinkRoute>
                                </li>
                                <li>
                                    <NavLinkRoute to={`/user-add`} className={``}>انتساب پارامتر ها به
                                        گروه </NavLinkRoute>
                                </li>

                            </ul>

                        </div>
                    </div>

                    <div className="">
                        <h2 className="text-lg font-semibold tracking-widest uppercase dark:text-gray-600">
                            گزارشات
                        </h2>
                        <div className="flex flex-col space-y-1 w-full">
                            <ul className={`flex flex-col  w-full`}>
                                <li>
                                    <NavLinkRoute to={`/individual-report`} className={``}> گزارش فردی </NavLinkRoute>
                                </li>
                                <li>
                                    <NavLinkRoute to={`/absence-report`} className={``}>گزارش غیبت ها </NavLinkRoute>
                                </li>
                                <li>
                                    <NavLinkRoute to={`/leave-balance-report`} className={``}> گزارش مانده مرخصی </NavLinkRoute>
                                </li>

                                <li>
                                    <NavLinkRoute to={`/`} className={``}> گزارش کارتکس </NavLinkRoute>
                                </li>
                                {/*<li>*/}
                                {/*    <NavLinkRoute to={`/user-add`} className={``}>خلاصه گزارش فردی </NavLinkRoute>*/}
                                {/*</li>*/}
                                <li>
                                    <NavLinkRoute to={`/`} className={``}>گزارش مجموع کارکرد
                                        فردی </NavLinkRoute>
                                </li>
                                <li>
                                    <NavLinkRoute to={`/`} className={``}>گزارش کارکرد سالانه
                                        فردی </NavLinkRoute>
                                </li>
                                {/*<li>*/}
                                {/*    <NavLinkRoute to={`/user-add`} className={``}>انتصاب پارامتر ها به*/}
                                {/*        گروه </NavLinkRoute>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    <NavLinkRoute to={`/user-add`} className={``}> گزارش روزانه فردی </NavLinkRoute>*/}
                                {/*</li>*/}

                            </ul>

                        </div>
                    </div>

                    <div className="">
                        <h2 className="text-lg font-semibold tracking-widest uppercase dark:text-gray-600">
                            گروه ها
                        </h2>
                        <div className="flex flex-col space-y-1 w-full">
                            <ul className={`flex flex-col  w-full`}>
                                <li>
                                    <NavLinkRoute to={`/all-groups`} className={``}> همه گروه ها </NavLinkRoute>
                                </li>
                                <li>
                                    <NavLinkRoute to={`/add-group`} className={``}>افزودن گروه جدید </NavLinkRoute>
                                </li>
                                <li>
                                    <NavLinkRoute to={`/assigning-user-to-group`} className={``}>انتساب کاربران به گروه </NavLinkRoute>
                                </li>

                            </ul>

                        </div>
                    </div>

                    <div className="">
                        <h2 className="text-lg font-semibold tracking-widest uppercase dark:text-gray-600">
                            قرار داد ها
                        </h2>
                        <div className="flex flex-col space-y-1 w-full">
                            <ul className={`flex flex-col  w-full`}>
                                <li>
                                    <NavLinkRoute to={`/all-contracts`} className={``}> همه قرار داد ها </NavLinkRoute>
                                </li>
                                <li>
                                    <NavLinkRoute to={`/add-contract`} className={``}>افزودن قرار داد جدید </NavLinkRoute>
                                </li>
                                <li>
                                    <NavLinkRoute to={`/assigning-contract-to-user`} className={``}>انتساب قرار داد به
                                        کاربر </NavLinkRoute>
                                </li>

                            </ul>

                        </div>
                    </div>

                    <div className="">
                        <h2 className="text-lg font-semibold tracking-widest uppercase dark:text-gray-600">
                            مدیریت مالی
                        </h2>
                        <div className="flex flex-col space-y-1 w-full">
                            <ul className={`flex flex-col  w-full`}>
                                <li>
                                    <NavLinkRoute to={`/personnel-performance-information`} className={``}> اطلاعات کارکرد پرسنل </NavLinkRoute>
                                </li>

                                <li>
                                    <NavLinkRoute to={`/worksheet-and-performance-calculation`} className={``}> کارنامه و محاسبه کارکرد </NavLinkRoute>
                                </li>


                            </ul>

                        </div>
                    </div>

                    <div className="">
                        <h2 className="text-lg font-semibold tracking-widest uppercase dark:text-gray-600">
                            امکانات
                        </h2>
                        <div className="flex flex-col space-y-1 w-full">
                            <ul className={`flex flex-col  w-full`}>
                                <li>
                                    <NavLinkRoute to={`/users`} className={``}> بکاپ گیری </NavLinkRoute>
                                </li>
                                <li>
                                    <NavLinkRoute to={`/users`} className={``}> بایگانی و آرشیو اسناد </NavLinkRoute>
                                </li>
                                <li>
                                    <NavLinkRoute to={`/users`} className={``}> مسیر خروجی گزارشات </NavLinkRoute>
                                </li>


                            </ul>

                        </div>
                    </div>


                </nav>
            </aside>
        </div>
    );
};

export default SideBar;