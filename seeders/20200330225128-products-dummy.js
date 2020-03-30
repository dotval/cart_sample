'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [
      {
        name: 'ワイヤレスマウス',
        price: 945,
        stock: 20,
        public_flg: 1,
        image: 'https://images-na.ssl-images-amazon.com/images/I/41u%2B1O8fcrL._AA210_.jpg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'HDMI切替器',
        price: 998,
        stock: 20,
        public_flg: 1,
        image: 'https://images-na.ssl-images-amazon.com/images/I/41CZib2SYRL._AA210_.jpg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'エアーマット',
        price: 1530,
        stock: 20,
        public_flg: 1,
        image: 'https://images-na.ssl-images-amazon.com/images/I/41KRy3-4giL._AA210_.jpg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: '寝袋',
        price: 1680,
        stock: 20,
        public_flg: 1,
        image: 'https://images-na.ssl-images-amazon.com/images/I/41kE3g2Ul2L._AA210_.jpg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'ライトニングケーブル',
        price: 625,
        stock: 20,
        public_flg: 1,
        image: 'https://images-na.ssl-images-amazon.com/images/I/51ZXYH5CxdL._AA210_.jpg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'ランタンハンガー',
        price: 899,
        stock: 20,
        public_flg: 1,
        image: 'https://images-na.ssl-images-amazon.com/images/I/41BKeLacf9L._AA210_.jpg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Bluetooth スピーカー',
        price: 1399,
        stock: 20,
        public_flg: 1,
        image: 'https://images-na.ssl-images-amazon.com/images/I/41oKq0aPukL._AA210_.jpg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: '二つ折り財布',
        price: 1490,
        stock: 20,
        public_flg: 1,
        image: 'https://images-na.ssl-images-amazon.com/images/I/51115e380YL._AA210_.jpg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: '完全ワイヤレス イヤホン',
        price: 1599,
        stock: 20,
        public_flg: 1,
        image: 'https://images-na.ssl-images-amazon.com/images/I/41-gLiKl59L._AA210_.jpg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: '二つ折り財布',
        price: 658,
        stock: 20,
        public_flg: 1,
        image: 'https://images-na.ssl-images-amazon.com/images/I/517S6Mua3kL._AA210_.jpg',
        created_at: new Date(),
        updated_at: new Date()
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {});
  }
};
