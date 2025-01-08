import HomeLayout from "../../layout/HomeLayout.tsx";
import {DatePicker} from "@mui/x-date-pickers";
import {RichTreeView, TreeViewBaseItem, useTreeViewApiRef} from "@mui/x-tree-view";
import {SyntheticEvent, useRef, useState} from "react";
import {Autocomplete, Button, Checkbox, TextField} from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

const AbsenceReport = () => {

    const apiRef = useTreeViewApiRef();
    const toggledItemRef = useRef<{ [itemId: string]: boolean }>({});
    // @ts-ignore
    const handleItemSelectionToggle = (event: SyntheticEvent, itemId: string, isSelected: boolean,) => {
        toggledItemRef.current[itemId] = isSelected;
    };

    function getItemDescendantsIds(item: TreeViewBaseItem) {
        const ids: string[] = [];
        item.children?.forEach((child) => {
            ids.push(child.id);
            ids.push(...getItemDescendantsIds(child));
        });

        return ids;
    }

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

        const newSelectedItemsWithChildren = Array.from(new Set([...newSelectedItems, ...itemsToSelect].filter((itemId) => !itemsToUnSelect[itemId],),),);

        setSelectedItems(newSelectedItemsWithChildren);

        toggledItemRef.current = {};
    };

    const itemsTreeView: TreeViewBaseItem[] = [
        {
            id: "1",
            label: 'انتخاب ستون ها',
            children: [
                {id: 'ورود 1', label: 'ورود 1'},
                {id: 'خروج 1', label: 'خروج 1'},
                {id: 'ورود 2', label: 'ورود 2'},
                {id: 'خروج 2', label: 'خروج 2'},
                {id: 'ورود 3', label: 'ورود 3'},
                {id: 'خروج 3', label: 'خروج 3'},
                {id: 'ورود 4', label: 'ورود 4'},
                {id: 'خروج 4', label: 'خروج 4'},
                {id: 'ورود 5', label: 'ورود 5'},
                {id: 'خروج 5', label: 'خروج 5'},
                {id: 'حضور', label: 'حضور'},
                {id: 'تاخیر', label: 'تاخیر'},
                {id: 'کسر کار', label: 'کسر کار'},
                {id: 'اضافه کار', label: 'اضافه کار'},
                {id: 'اضافه کار غیر مجاز', label: 'اضافه کار غیر مجاز'},
            ],
        },
    ];
    const [selectedItems, setSelectedItems] = useState<string[]>(['1', 'ورود 1', 'خروج 1', 'ورود 2', 'خروج 2', 'ورود 3', 'خروج 3', 'ورود 4', 'خروج 4', 'ورود 5', 'خروج 5', 'حضور', 'تاخیر', 'کسر کار', 'اضافه کار', 'اضافه کار غیر مجاز']);

    const username = [
        {title: 'علی بهرامپور', id: 1994},
        {title: 'محمد قربانی', id: 1972},
        {title: 'مهدی دیناری', id: 554},
        {title: 'محمدجواد ابراهیمی', id: 1974},
    ];

    return (
        <HomeLayout>
            <p className={`text-xl mb-5`}>گزارش غیبت ها</p>
            <div className={`max-w-lg`}>
                <div className="space-y-3">
                    <DatePicker label={`از`} sx={{width: 1}}/>
                    <DatePicker label={`تا`} sx={{width: 1}}/>

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
                                        icon={<CheckBoxOutlineBlankIcon fontSize="small"/>}
                                        checkedIcon={<CheckBoxIcon fontSize="small"/>}
                                        style={{marginRight: 8}}
                                        checked={selected}
                                    />
                                    {option.title}
                                </li>
                            );
                        }}
                        renderInput={(params) => (
                            <TextField {...params} label="انتخاب کاربر"/>
                        )}
                    />

                    <RichTreeView
                        multiSelect
                        checkboxSelection
                        apiRef={apiRef}
                        items={itemsTreeView}
                        selectedItems={selectedItems}
                        onSelectedItemsChange={handleSelectedItemsChange}
                        onItemSelectionToggle={handleItemSelectionToggle}
                    />
                    <Button sx={{width: 1}} variant={'contained'}>شروع گزارش گیری</Button>

                </div>
            </div>
        </HomeLayout>
    );
};

export default AbsenceReport;