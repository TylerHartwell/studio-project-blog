import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'brief',
      type: 'string',
      validation: (rule) => rule.required().max(40),
    }),
    defineField({
      name: 'url',
      type: 'string',
    }),
    defineField({
      name: 'summary',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'blogSlug',
      type: 'string',
    }),
    defineField({
      name: 'featuredPriority',
      type: 'number',
      validation: (rule) => rule.integer().min(1).warning('Priority must be a positive integer'),
    }),
  ],
})
