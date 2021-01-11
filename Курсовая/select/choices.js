const filterDefault = () => {
	const elements = document.querySelectorAll('.filter-select');
	elements.forEach(el => {
		const choices = new Choices(el, {
			searchEnabled: false,
			noResultsText: 'Ничего не найдено'
		});
	});
	
}

filterDefault();

const multiDefault = () => {
	const elements = document.querySelectorAll('.multi-default');
	elements.forEach(el => {
		const choices = new Choices(el, {
			searchEnabled: false,
			noResultsText: 'Ничего не найдено'
		});
	});
	
}

multiDefault();

