const defaultSelect = () => {
	const element = document.querySelector('.default');
  const choices = new Choices(element, {
		searchEnabled: false,
		noResultsText: 'Ничего не найдено'
	});

	let ariaLabel = element.getAttribute('aria-label');
	element.closest('.choices').setAttribute('aria-label', ariaLabel);
};

defaultSelect();

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

const filterSelect = () => {
	const filter = document.querySelector('.filter-select');
  const choices = new Choices(filter, {
		searchEnabled: false,
		noResultsText: 'Ничего не найдено'
	});

	let ariaLabel = filter.getAttribute('aria-label');
	filter.closest('.choices').setAttribute('aria-label', ariaLabel);
};

filterSelect();