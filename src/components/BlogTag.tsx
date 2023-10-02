const BlogTag = ({ tag }: { tag: string }) => {
  return (
    <div className="border border-gray-500 text-gray-500 rounded-full px-2 text-xl font-bold tracking-widest">
      #{tag}
    </div>
  )
}
export default BlogTag
