module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'tags',
      [
        {
          tag_name: 'JavaScript',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          tag_name: 'Node',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          tag_name: 'React',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          tag_name: 'TypeScript',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          tag_name: 'React Native',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          tag_name: 'PHP',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          tag_name: 'Laravel',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          tag_name: 'Java',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          tag_name: 'Kotlin',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          tag_name: 'GoLang',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('tags', null, {});
  },
};
