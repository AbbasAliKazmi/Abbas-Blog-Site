export default {
    name: 'foodBlog',
    type: 'document',
    title: 'Food Blog',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title of food Blog article'
      },
      {
          name:'slug',
          type:'slug',
          title:'Slug of your Food Blog article',
          options:{
              source:'title', 
          },
      },
      {
          name:'titleImage',
          type:'image',
          title:'Title Image',
      },
      {
          name:'smallDescription',
          type:'text',
          title:'Small Description'
      },
      {
          name:'content',
          type:'array',
          title:'Content',
          of:[{
              type:'block'
          }]
      }
    ]
  }