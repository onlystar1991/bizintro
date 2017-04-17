let list;

export function loadList() {
	list = [
		{path: 'test', label: 'testlabel'},
		{path: 'test1', label: 'testlabel1'},
		{path: 'test2', label: 'testlabel2'},
		{path: 'test3', label: 'testlabel3'},
		{path: 'test4', label: 'testlabel4'},
		{path: 'test5', label: 'testlabel5'},
		{path: 'test6', label: 'testlabel6'},
		{path: 'test7', label: 'testlabel7'}
	]
	return list;
}

export function unloadList() {
	list = [];
	return list;
}
