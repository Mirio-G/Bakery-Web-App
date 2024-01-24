const db = await JSONFilePreset('db.json', {posts:[]})

const item = {id: 1, 
	item_name: "Test",
	item_des: "Testing",
	price: 6.66
	}

await db.update(({posts}) => posts.push(item))