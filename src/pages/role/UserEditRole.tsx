import HomeLayout from "../../layout/HomeLayout.tsx";
import {RichTreeView, TreeViewBaseItem, useTreeViewApiRef} from "@mui/x-tree-view";
import {SyntheticEvent, useRef, useState} from "react";
import {Autocomplete, Box, Button, Checkbox, TextField} from "@mui/material";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';


const UserAddRole = () => {
    const itemsTreeView: TreeViewBaseItem[] = [
        {
            id: 'تنظیمات اولیه',
            label: 'تنظیمات اولیه',
            children: [
                {id: 'تعریف سال مالی', label: 'تعریف سال مالی'},
                {id: 'افزودن دستگاه جدید', label: 'افزودن دستگاه جدید'},
                {id: 'دریافت اطلاعات از ساعت', label: 'دریافت اطلاعات از ساعت'},
                {id: 'دریافت اطلاعات از فایل', label: 'دریافت اطلاعات از فایل'},
            ],
        },
        {
            id: 'کاربران',
            label: 'کاربران',
            children: [
                {id: 'همه کاربران', label: 'همه کاربران'},
                {id: 'افزودن کاربر جدید', label: 'افزودن کاربر جدید'},
                {id: 'افزودن سطح دسترسی', label: 'افزودن سطح دسترسی'},
                {id: 'مشاهده سطح دسترسی ها', label: 'مشاهده سطح دسترسی ها'},

            ],
        },
        {
            id: 'شرکت ها',
            label: 'شرکت ها',
            children: [
                {id: 'همه شرکت ها', label: 'همه شرکت ها'},
                {id: 'افزودن شرکت جدید', label: 'افزودن شرکت جدید'},
                {id: 'انتصاب کاربر به شرکت', label: 'انتصاب کاربر به شرکت'},
            ],
        },
        {
            id: 'پارامتر ها',
            label: 'پارامتر ها',
            children: [
                {id: 'همه پارامتر ها', label: 'همه پارامتر هاهمه پارامتر ها'},
                {id: 'افزودن پارامتر جدید', label: 'افزودن پارامتر جدید'},
                {id: 'انتصاب پارامتر به کاربر', label: 'انتصاب پارامتر به کاربر'},
                {id: 'گروه پارامتر', label: 'گروه پارامتر'},
                {id: 'تعریف گروه پارامتر', label: 'تعریف گروه پارامتر'},
                {id: 'انتصاب پارامتر ها به گروه', label: 'انتصاب پارامتر ها به گروه'},
            ],
        },
        {
            id: 'گزارشات',
            label: 'گزارشات',
            children: [
                {id: 'گزارش فردی', label: 'گزارش فردی'},
                {id: 'گزارش غیبت ها', label: 'گزارش غیبت ها'},
                {id: 'گزارش مانده مرخصی', label: 'گزارش مانده مرخصی'},
                {id: 'گزارش کارتکس', label: 'گزارش کارتکس'},
                {id: 'خلاصه گزارش فردی', label: 'خلاصه گزارش فردی'},
                {id: 'گزارش مجموع کارکرد فردی', label: 'گزارش مجموع کارکرد فردی'},
                {id: 'گزارش کارکرد سالانه فردی', label: 'گزارش کارکرد سالانه فردی'},

            ],
        },
        {
            id: 'شعبه ها',
            label: 'شعبه ها',
            children: [
                {id: 'همه شعبه ها', label: 'همه شعبه ها'},
                {id: 'افزودن شعبه جدید', label: 'افزودن شعبه جدید'},
                {id: 'انتصاب کاربر به شعبه', label: 'انتصاب کاربر به شعبه'},
            ],
        },
        {
            id: 'قرار داد ها',
            label: 'قرار داد ها',
            children: [
                {id: 'همه قرار داد ها', label: 'همه قرار داد ها'},
                {id: 'افزودن قرار داد جدید', label: 'افزودن قرار داد جدید'},
                {id: 'انتصاب قرار داد به کاربر', label: 'انتصاب قرار داد به کاربر'},
            ],
        },
        {
            id: 'مدیدریت مالی',
            label: 'مدیدریت مالی',
            children: [
                {id: 'اطلاعات کارکرد پرسنل', label: 'اطلاعات کارکرد پرسنل'},
                {id: 'کارنامه و محاسبه کارکرد', label: 'کارنامه و محاسبه کارکرد'},

            ],
        },
        {
            id: 'امکانات',
            label: 'امکانات',
            children: [
                {id: 'بکاپ گیری', label: 'بکاپ گیری'},
                {id: 'بایگانی و آرشیو اسناد', label: 'بایگانی و آرشیو اسناد'},
                {id: 'مسیر خروجی گزارشات', label: 'مسیر خروجی گزارشات'},

            ],
        },

    ];

    function getItemDescendantsIds(item: TreeViewBaseItem) {
        const ids: string[] = [];
        item.children?.forEach((child) => {
            ids.push(child.id);
            ids.push(...getItemDescendantsIds(child));
        });

        return ids;
    }

    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const toggledItemRef = useRef<{ [itemId: string]: boolean }>({});
    const apiRef = useTreeViewApiRef();

    // @ts-ignore
    const handleItemSelectionToggle = (event: SyntheticEvent, itemId: string, isSelected: boolean,) => {
        toggledItemRef.current[itemId] = isSelected;
    };

    // @ts-ignore
    const handleSelectedItemsChange = (event: SyntheticEvent, newSelectedItems: string[],) => {
        setSelectedItems(newSelectedItems);

        // Select / unselect the children of the toggled item
        const itemsToSelect: string[] = [];
        const itemsToUnSelect: { [itemId: string]: boolean } = {};
        Object.entries(toggledItemRef.current).forEach(([itemId, isSelected]) => {
            const item = apiRef.current!.getItem(itemId);
            if (isSelected) {
                itemsToSelect.push(...getItemDescendantsIds(item));
            } else {
                getItemDescendantsIds(item).forEach((descendantId) => {
                    itemsToUnSelect[descendantId] = true;
                });
            }
        });

        const newSelectedItemsWithChildren = Array.from(
            new Set(
                [...newSelectedItems, ...itemsToSelect].filter(
                    (itemId) => !itemsToUnSelect[itemId],
                ),
            ),
        );

        setSelectedItems(newSelectedItemsWithChildren);

        toggledItemRef.current = {};
    };


    const username = [
        {title: 'علی بهرامپور', id: 1994},
        {title: 'محمد قربانی', id: 1972},
        {title: 'مهدی دیناری', id: 554},
        {title: 'محمدجواد ابراهیمی', id: 1974},
    ];

    const icon = <CheckBoxOutlineBlankIcon fontSize="small"/>;
    const checkedIcon = <CheckBoxIcon fontSize="small"/>;

    return (
        <HomeLayout>
            <p>لطفا برای مشاهده و ویرایش سطح دسترسی به پرسنل, یک کاربر را از فیلد زیر انتخاب کنید انتخاب کنید</p>
            <div className={`max-w-xl mt-4`}>

                <Autocomplete

                    id="checkboxes-tags-demo"
                    options={username}
                    disableCloseOnSelect
                    getOptionLabel={(option) => option.title}
                    renderOption={(props, option, {selected}) => {
                        const {key, ...optionProps} = props;
                        return (
                            <li key={key} {...optionProps}>
                                <Checkbox
                                    icon={icon}
                                    checkedIcon={checkedIcon}
                                    style={{marginRight: 8}}
                                    checked={selected}
                                />
                                {option.title}
                            </li>
                        );
                    }}
                    renderInput={(params) => (
                        <TextField {...params} label="انتخاب کاربران"/>
                    )}
                />

                <Box sx={{minWidth: 290, my: 3}}>
                    <RichTreeView
                        multiSelect
                        checkboxSelection
                        apiRef={apiRef}
                        items={itemsTreeView}
                        selectedItems={selectedItems}
                        onSelectedItemsChange={handleSelectedItemsChange}
                        onItemSelectionToggle={handleItemSelectionToggle}
                    />
                </Box>
                <Button variant={`contained`} sx={{width: 1}}>
                    تایید اطلاعات
                </Button>
            </div>
        </HomeLayout>
    );
};

export default UserAddRole;