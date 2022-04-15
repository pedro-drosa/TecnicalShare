module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'user_tags',
      [
        {
          user_id: 1,
          tag_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 2,
          tag_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 3,
          tag_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 4,
          tag_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 5,
          tag_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 6,
          tag_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 7,
          tag_id: 7,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 8,
          tag_id: 8,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 9,
          tag_id: 9,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 10,
          tag_id: 10,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          tag_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 2,
          tag_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 3,
          tag_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 5,
          tag_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 7,
          tag_id: 8,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 9,
          tag_id: 10,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 10,
          tag_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          tag_id: 10,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 2,
          tag_id: 9,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 3,
          tag_id: 8,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 4,
          tag_id: 7,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 5,
          tag_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 6,
          tag_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 7,
          tag_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 8,
          tag_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 9,
          tag_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 10,
          tag_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('user_tags', null, {});
  },
};
