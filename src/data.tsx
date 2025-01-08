import {GridActionsCellItem, GridColDef} from "@mui/x-data-grid";
import {Delete, Edit, Visibility} from "@mui/icons-material";
import {Button} from "@mui/material";

// @ts-ignore
export const columnsListUsers: GridColDef<(typeof rows)[number]>[] = [
    {
        field: 'id',
        type: "number",
        headerName: 'شماره پرسنلی',
        width: 90
    },
    {
        field: 'firstName',
        type: "string",
        headerName: 'نام ',
        width: 150,
        editable: false,
    },
    {
        field: 'lastName',
        type: "string",
        headerName: 'نام خانوادگی',
        width: 150,
        editable: false,
    },
    {
        field: 'age',
        headerName: 'سن',
        type: 'number',
        width: 110,
        editable: false,
    },
    {
        field: 'nCode',
        headerName: 'کد ملی',
        type: 'number',
        width: 110,
        editable: false,
        valueFormatter: (value: number) => value
    },
    {
        field: 'phoneNumber',
        headerName: 'شماره موبایل',
        type: 'string',
        width: 110,
        editable: false,
    },
    {
        field: 'brithDay',
        headerName: 'تاریخ تولد',
        type: 'date',
        width: 110,
        editable: false,
        valueFormatter: (value) => {
            // console.log(value);
            return value && new Date(value)?.toLocaleDateString("fa-IR-u-nu-latn")
        }
    },
    {
        field: 'contract',
        headerName: 'نوع قرارداد',
        type: "string",
        description: 'نوع قرارداد پرسنل.',
        sortable: false,
        width: 160,
    },
    {
        field: 'educationalQualification',
        type: "string",
        headerName: 'مدرک تحصیلی',
        sortable: false,
        width: 130,
    },
    {
        field: 'fieldOfStudy',
        type: "string",
        headerName: 'رشته تحصیلی',
        sortable: false,
        width: 130,
    },
    {
        field: 'maritalStatus',
        type: "boolean",
        headerName: 'وضعیت تاهل',
        sortable: false,
        width: 130,
    },
    {
        field: 'numberOfChildren',
        type: "number",
        headerName: 'تعداد فرزندان',
        sortable: false,
        width: 130,
    },
    {
        field: 'workHistory',
        type: "number",
        headerName: 'سابقه کار ',
        sortable: false,
        width: 130,
        valueFormatter: (value: number) => `${value} سال `
    },
    {
        field: 'insuranceHistory',
        type: "number",
        headerName: 'سابقه بیمه  ',
        sortable: false,
        width: 130,
        valueFormatter: (value: number) => `${value} سال `
    },
    {
        field: 'dateOfLastInformationUpdate',
        type: "date",
        headerName: 'تاریخ آخرین به‌روزرسانی اطلاعات ',
        sortable: false,
        width: 130,
        valueFormatter: (value) => {
            // console.log(value);
            return value && new Date(value)?.toLocaleDateString("fa-IR-u-nu-latn")
        }
    },
    {
        field: 'actions',
        type: 'actions',
        headerName: "عملیات",
        minWidth: 160,
        cellClassName: 'actions',
        getActions: ({id}) => {

            return [
                <GridActionsCellItem
                    onClick={() => alert(`${id} edit`)}
                    icon={<Edit/>}
                    label="Edit"
                    className="textPrimary"
                    color="primary"
                />,
                <GridActionsCellItem
                    onClick={() => alert(`${id} remove`)}
                    icon={<Delete/>}
                    label="Delete"
                    color="error"
                />,

            ];
        },
    }

];
// @ts-ignore
export const columnsListPerformanceUsers: GridColDef<(typeof rows)[number]>[] = [
    {
        field: 'id',
        type: "number",
        headerName: 'شماره پرسنلی',
        width: 90
    },
    {
        field: 'firstName',
        type: "string",
        headerName: 'نام ',
        width: 150,
        editable: false,
    },
    {
        field: 'lastName',
        type: "string",
        headerName: 'نام خانوادگی',
        width: 150,
        editable: false,
    },
    {
        field: 'age',
        headerName: 'سن',
        type: 'number',
        width: 110,
        editable: false,
    },
    {
        field: 'nCode',
        headerName: 'کد ملی',
        type: 'number',
        width: 110,
        editable: false,
        valueFormatter: (value: number) => value
    },
    {
        field: 'phoneNumber',
        headerName: 'شماره موبایل',
        type: 'string',
        width: 110,
        editable: false,
    },
    {
        field: 'brithDay',
        headerName: 'تاریخ تولد',
        type: 'date',
        width: 110,
        editable: false,
        valueFormatter: (value) => {
            // console.log(value);
            return value && new Date(value)?.toLocaleDateString("fa-IR-u-nu-latn")
        }
    },
    {
        field: 'contract',
        headerName: 'نوع قرارداد',
        type: "string",
        description: 'نوع قرارداد پرسنل.',
        sortable: false,
        width: 160,
    },
    {
        field: 'educationalQualification',
        type: "string",
        headerName: 'مدرک تحصیلی',
        sortable: false,
        width: 130,
    },
    {
        field: 'fieldOfStudy',
        type: "string",
        headerName: 'رشته تحصیلی',
        sortable: false,
        width: 130,
    },
    {
        field: 'maritalStatus',
        type: "boolean",
        headerName: 'وضعیت تاهل',
        sortable: false,
        width: 130,
    },
    {
        field: 'numberOfChildren',
        type: "number",
        headerName: 'تعداد فرزندان',
        sortable: false,
        width: 130,
    },
    {
        field: 'workHistory',
        type: "number",
        headerName: 'سابقه کار ',
        sortable: false,
        width: 130,
        valueFormatter: (value: number) => `${value} سال `
    },
    {
        field: 'insuranceHistory',
        type: "number",
        headerName: 'سابقه بیمه  ',
        sortable: false,
        width: 130,
        valueFormatter: (value: number) => `${value} سال `
    },
    {
        field: 'dateOfLastInformationUpdate',
        type: "date",
        headerName: 'تاریخ آخرین به‌روزرسانی اطلاعات ',
        sortable: false,
        width: 130,
        valueFormatter: (value) => {
            // console.log(value);
            return value && new Date(value)?.toLocaleDateString("fa-IR-u-nu-latn")
        }
    },
    {
        field: 'actions',
        type: 'actions',
        headerName: "عملیات",
        minWidth: 160,
        cellClassName: 'actions',
        getActions: ({id}) => {

            return [
                <Button onClick={() => alert(id)} sx={{width: 1}} variant={'contained'}>دریافت کارکرد</Button>
            ];
        },
    }

];

// @ts-ignore
export const columnsListCompany: GridColDef<(typeof rows)[number]>[] = [
    {
        field: 'id',
        type: "number",
        headerName: 'شناسه',
        sortable: false,
        width: 80,
    },
    {
        field: 'companyName',
        type: "string",
        headerName: 'نام شرکت',
        sortable: false,
        width: 130,
    },
    {
        field: 'managerName',
        type: "string",
        headerName: 'نام مدیر',
        sortable: false,
        width: 130,
    },
    {
        field: 'businessID',
        type: "string",
        headerName: 'شناسه تجاری',
        sortable: false,
        width: 130,
    },
    {
        field: 'companyPhoneNumber',
        type: "string",
        headerName: 'شماره تلفن شرکت',
        sortable: false,
        width: 130,
    },
    {
        field: 'dateEstablishment',
        type: "date",
        headerName: 'تاریخ تاسیس',
        sortable: false,
        width: 130,
    },
    {
        field: 'group',
        type: "string",
        headerName: 'گروه',
        sortable: false,
        width: 130,
    },
    {
        field: 'actions',
        type: 'actions',
        headerName: "عملیات",
        minWidth: 160,
        cellClassName: 'actions',
        getActions: ({id}) => {
            return [
                <GridActionsCellItem label={'مشاهده بیشتر'}
                                     onClick={() => alert(`${id} edit`)}
                                     color={'primary'}
                                     icon={<Visibility/>}/>
            ]
        }
    }

]


// @ts-ignore
export const columnsListGroups: GridColDef<(typeof rows)[number]>[] = [
    {
        field: 'id',
        type: "number",
        headerName: 'شناسه',
        sortable: false,
        width: 80,
    },
    {
        field: 'title',
        type: "string",
        headerName: 'عنوان',
        sortable: false,
        width: 130,
    },
    {
        field: 'startOfWorkingHours',
        type: "dateTime",
        headerName: 'شروع ساعت کاری',
        sortable: false,
        width: 130,

    },
    {
        field: 'endOfWorkingHours',
        type: "dateTime",
        headerName: 'پایان ساعت کاری',
        sortable: false,
        width: 130,
    },
    {
        field: 'branches',
        type: "string",
        headerName: 'شعبه ها',
        sortable: false,
        width: 130,
    },
    {
        field: 'actions',
        type: 'actions',
        headerName: "عملیات-مشاهده",
        minWidth: 160,
        cellClassName: 'actions',
        getActions: ({id}) => {
            return [
                <GridActionsCellItem label={'مشاهده بیشتر'}
                                     onClick={() => alert(`${id} edit`)}
                                     color={'primary'}
                                     icon={<Visibility/>}/>,
                <GridActionsCellItem label={'ویرایش'}
                                     onClick={() => alert(`${id} edit`)}
                                     color={'primary'}
                                     icon={<Edit/>}/>

            ]
        }
    }

]

// @ts-ignore
export const columnsListContract: GridColDef<(typeof rows)[number]>[] = [
    {
        field: 'id',
        type: "number",
        headerName: 'شناسه',
        sortable: false,
        width: 80,
    },
    {
        field: 'title',
        type: "string",
        headerName: 'عنوان',
        sortable: false,
        width: 130,
    },
    {
        field: 'contractType',
        type: "string",
        headerName: 'نوع قرارداد',
        sortable: false,
        width: 130,
    },
    {
        field: 'start',
        type: "date",
        headerName: 'شروع',
        sortable: false,
        width: 130,
        valueFormatter: (value) => {
            // console.log(value);
            return value && new Date(value)?.toLocaleDateString("fa-IR-u-nu-latn")
        }
    },
    {
        field: 'end',
        type: "date",
        headerName: 'پایان',
        sortable: false,
        width: 130,
        valueFormatter: (value) => {
            // console.log(value);
            return value && new Date(value)?.toLocaleDateString("fa-IR-u-nu-latn")
        }
    },
    {
        field: 'jobTitleFromSocialSecurity',
        type: "string",
        headerName: 'انتخاب عنوان شغلی (تامین اجتماعی)',
        sortable: false,
        width: 130,
    },
    {
        field: 'actions',
        type: 'actions',
        headerName: "عملیات-مشاهده",
        minWidth: 160,
        cellClassName: 'actions',
        getActions: ({id}) => {
            return [
                <GridActionsCellItem label={'مشاهده بیشتر'}
                                     onClick={() => alert(`${id} edit`)}
                                     color={'primary'}
                                     icon={<Visibility/>}/>,
                <GridActionsCellItem label={'ویرایش'}
                                     onClick={() => alert(`${id} edit`)}
                                     color={'primary'}
                                     icon={<Edit/>}/>

            ]
        }
    }
]
export const rowContractList = [
    {
        id: 1,
        title: "ساعتی",
        contractType: "قرارداد ساعتی",
        start: new Date("2022-07-31T01:33:29"),
        end: new Date("2026-07-31T01:33:29"),
        jobTitleFromSocialSecurity: "برنامه نویس"
    }
]


export const rowsGroupsList = [
    {
        id: 1,
        title: "گروه کاری انبار کاشان",
        startOfWorkingHours: new Date("0000-01-01T08:00:00.56"),
        endOfWorkingHours: new Date("0000-01-01T12:00:00.00"),
        branches: "فرشگاه کاشان ",
    }
]

export const rowsCompanyList = [
    {
        id: 1,
        companyName: "کارگاه تولیدی آران",
        managerName: "علی بهرامپور",
        businessID: 33333,
        companyPhoneNumber: "03155545751",
        dateEstablishment: new Date("2021-05-01"),
        group: "کارگاه - انبار - ",
    }
]

export const rowsUsersList = [
    {
        id: 1,
        firstName: 'علی',
        lastName: 'بهرامپور',
        age: 23,
        contract: "پاره وقت",
        nCode: 1250657652,
        phoneNumber: "09303149371",
        brithDay: new Date("2002/01/02"),
        educationalQualification: "لیسانس",
        fieldOfStudy: "نرم افزار کامپیوتر",
        maritalStatus: true,
        numberOfChildren: 3,
        workHistory: 2,
        insuranceHistory: 1,
        dateOfLastInformationUpdate: new Date("2024/07/09"),
    },
    {
        id: 2,
        firstName: 'محمد',
        lastName: 'ابراهیمی',
        age: 25,
        contract: "تمام وقت",
        nCode: 1250617272,
        phoneNumber: "09303149371",
        brithDay: new Date("2002/01/02"),
        educationalQualification: "لیسانس",
        fieldOfStudy: "نرم افزار کامپیوتر",
        maritalStatus: false,
        numberOfChildren: 3,
        workHistory: 2,
        insuranceHistory: 1,
        dateOfLastInformationUpdate: new Date("2024/07/09"),
    },

];

export const rowsUsersPerformanceList = [
    {
        id: 1,
        firstName: 'علی',
        lastName: 'بهرامپور',
        age: 23,
        contract: "پاره وقت",
        nCode: 1250657652,
        phoneNumber: "09303149371",
        brithDay: new Date("2002/01/02"),
        educationalQualification: "لیسانس",
        fieldOfStudy: "نرم افزار کامپیوتر",
        maritalStatus: true,
        numberOfChildren: 3,
        workHistory: 2,
        insuranceHistory: 1,
        dateOfLastInformationUpdate: new Date("2024/07/09"),
    },
    {
        id: 2,
        firstName: 'محمد',
        lastName: 'ابراهیمی',
        age: 25,
        contract: "تمام وقت",
        nCode: 1250617272,
        phoneNumber: "09303149371",
        brithDay: new Date("2002/01/02"),
        educationalQualification: "لیسانس",
        fieldOfStudy: "نرم افزار کامپیوتر",
        maritalStatus: false,
        numberOfChildren: 3,
        workHistory: 2,
        insuranceHistory: 1,
        dateOfLastInformationUpdate: new Date("2024/07/09"),
    },

];