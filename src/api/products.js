const database = [
  { id: 1, name: "商品A", price: 200, content: "商品Aの詳細" },
  { id: 2, name: "商品B", price: 300, content: "商品Bの詳細" },
  { id: 3, name: "商品C", price: 400, content: "商品Cの詳細" },
  { id: 4, name: "商品D", price: 500, content: "商品Dの詳細" }
];

export default {
  fetch() {
    return database;
  },
  find(id) {
    return database.find(el => el.id === id);
  },
  asyncFind(id, callback) {
    setTimeout(() => {
      callback(database.find(el => el.id === id));
    }, 1000);
  }
};
