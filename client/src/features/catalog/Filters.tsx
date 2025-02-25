import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { useState } from 'react';

type Props = {
	items: string[];
	checked?: string[];
	onChange: (items: string[]) => void;
};

export default function Filters({ items, checked, onChange }: Props) {
	const [checkedItems, setCheckedItems] = useState(checked || []);

	function handleCheck(value: string) {
		const currentIndex = checkedItems.findIndex((item) => item === value);
		let newChecked: string[] = [];
		if (currentIndex === -1) newChecked = [...checkedItems, value];
		else newChecked = checkedItems.filter((item) => item !== value);
		setCheckedItems(newChecked);
		onChange(newChecked);
	}

	return (
		<FormGroup>
			{items.map((item) => (
				<FormControlLabel
					control={<Checkbox checked={checkedItems.indexOf(item) !== -1} onChange={() => handleCheck(item)} />}
					label={item}
					key={item}
				/>
			))}
		</FormGroup>
	);
}
