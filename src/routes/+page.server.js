import { opendir } from 'node:fs/promises';
import { chdir, cwd } from 'node:process';

let scan = async (path) => {
	const res = { path, name: path.split('/').pop(), children: [] };
	const dir = await opendir(path);

	for await (const dirent of dir) {
		if (dirent.isDirectory()) {
			res.children.push(await scan(path + '/' + dirent.name));
		}
		if (dirent.isFile()) {
			res.children.push({ name: dirent.name, path: path + '/' + dirent.name });
		}
	}

	return res;
};

export async function load() {
	let pwd = cwd();

	chdir('../growave/growave-monorepo/storefront-spa/src/');
	let newVar = await scan('.');
	chdir(pwd);
	return newVar;
}
