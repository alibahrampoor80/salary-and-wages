import HomeLayout from "../layout/HomeLayout.tsx";
import {BarChart} from '@mui/x-charts/BarChart';
import {PieChart} from "@mui/x-charts";


const HomePage = () => {
    return <>
        <HomeLayout>
            <div>
                <p className={`mb-8 mt-3 font-bold text-2xl`}>خلاصه وضعیت کارکرد ها در سال جاری </p>

                <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-4">
                    <div className="w-full">
                        <p className={`text-center`}>
                            ساعت کارکرد پرسنل در سال (1403)
                        </p>
                        <BarChart
                            series={[
                                {data: [350000, 324334, 300344, 404021, 401458, 448254, 337999, 339888, 499059, 502057, 399089, 299999]},
                            ]}
                            height={300}
                            xAxis={[{
                                data: ["اسفند", "بهمن", "دی", "آذر", "آبان", "مهر", "شهریور", "مرداد", 'تیر', 'خرداد', 'اردیبهشت', 'فروردین'],
                                scaleType: 'band'
                            }]}
                            margin={{top: 10, bottom: 30, right: 10}}
                        />
                    </div>
                    <div className="w-full">
                        <p className={`text-center`}>
                            ساعت اضافه کار پرسنل در سال (1403)
                        </p>

                        <PieChart
                            series={[
                                {
                                    highlightScope: {fade: 'global', highlight: 'item'},
                                    faded: {innerRadius: 30, additionalRadius: -30, color: 'gray'},
                                    data: [
                                        {id: 0, value: 800, label: 'فروردین'},
                                        {id: 1, value: 500, label: 'اردیبهشت'},
                                        {id: 2, value: 364, label: 'خرداد'},
                                        {id: 3, value: 666, label: 'تیر'},
                                        {id: 4, value: 300, label: 'مرداد'},
                                        {id: 5, value: 932, label: 'شهریور'},
                                        {id: 6, value: 200, label: 'مهر'},
                                        {id: 7, value: 290, label: 'آبان'},
                                        {id: 8, value: 550, label: 'آذر'},
                                        {id: 9, value: 660, label: 'دی'},
                                        {id: 10, value: 850, label: 'بهمن'},
                                        {id: 11, value: 364, label: 'اسفند'},
                                    ],
                                },

                            ]}
                            // width={400}
                            height={200}
                        />
                    </div>

                    <div className="w-full">
                        {/*<p className={`text-center`}>*/}
                        {/*    ساعت کسر کار پرسنل در سال (1403)*/}
                        {/*</p>*/}
                        <BarChart
                            dataset={[
                                {
                                    value: 11,
                                    month: 'فروردین',
                                },
                                {
                                    value: 22,
                                    month: 'اردیبهشت',
                                },
                                {
                                    value: 100,
                                    month: 'خرداد',
                                }, {
                                    value: 110,
                                    month: 'تیر',
                                },
                                {
                                    value: 80,
                                    month: 'مرداد',
                                },
                                {
                                    value: 76,
                                    month: 'شهریور',
                                },
                                {
                                    value: 91,
                                    month: 'مهر',
                                },
                                {
                                    value: 130,
                                    month: 'آبان',
                                },
                                {
                                    value: 198,
                                    month: 'آذر',
                                },
                                {
                                    value: 49,
                                    month: 'مهر',
                                },
                                {
                                    value: 80,
                                    month: 'دی',
                                },
                                {
                                    value: 40,
                                    month: 'بهمن',
                                },
                                {
                                    value: 100,
                                    month: 'اسفند',
                                },

                            ]}
                            yAxis={[{scaleType: 'band', dataKey: 'month'}]}
                            series={[{dataKey: 'value', label: "ساعت کسر کار(ساعت)"}]}
                            layout="horizontal"
                            xAxis={[
                                {
                                    label: '',
                                },
                            ]}
                            height={400}

                        />
                    </div>

                </div>

            </div>
        </HomeLayout>
    </>
};

export default HomePage;