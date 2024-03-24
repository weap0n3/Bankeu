export const applyFormat = (text, type) => {
	switch (type) {
		case 'cardNumberInput':
			const formattedValueInput = text.replace(/\s/g, '')
			return formattedValueInput
		case 'cardNumber':
			if (text) {
				const formattedValue = text.replace(/\s/g, '').match(/.{1,4}/g)
				return formattedValue ? formattedValue.join(' ') : ''
			} else {
				return text
			}
		case 'DateOfEnd':
			const [month, year] = text.split('/')
			const date = new Date(`20${year}`, month)
			const formattedDate = date.toISOString().slice(0, 10)
			return formattedDate
		case 'DateOfEndInput':
			const regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/
			if (regex.test(text)) {
				const [year, month] = text.split('-')
				const formattedDateString = `${month}/${year.slice(2)}`
				return formattedDateString
			} else {
				return text
			}
	}
}
