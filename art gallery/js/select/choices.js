const filterDefault = () => {
	const elements = document.querySelectorAll('.filter__select');
	elements.forEach(el => {
		const choices = new Choices(el, {
			searchEnabled: false,
			noResultsText: 'Ничего не найдено'
		});
	});
	
}

filterDefault();

