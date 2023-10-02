import { BlogDTO } from '../types/BlogDTO'
import BlogTag from './BlogTag'

const Blog = ({ blog }: { blog: BlogDTO }) => {
  return (
    <div className="p-2">
      <div className="my-5">
        <span className="pr-4 text-red-600 font-bold">{blog.author}</span>
        <span className="text-slate-400">
          {blog.date} • {blog.readingTime}
        </span>
      </div>
      <div className="font-bold text-3xl my-3">{blog.header}</div>
      <div className="text-gray-500 text-xl my-3 leading-4">{blog.description}</div>
      <div className="flex gap-x-5 gap-y-16">
        {blog.tags.map((tag) => {
          return <BlogTag key={tag} tag={tag} />
        })}
      </div>
    </div>
  )
}
export default Blog
