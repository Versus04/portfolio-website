import { motion } from 'framer-motion'

const blogPosts = [
  {
    title: "Mastering Jetpack Compose: A Deep Dive",
    description: "Explore the intricacies of Jetpack Compose and learn how to create stunning UIs with less code.",
    date: "2023-05-15",
    readTime: "10 min read",
    tags: ["Jetpack Compose", "UI/UX", "Android"],
  },
  {
    title: "Implementing Clean Architecture in Android",
    description: "A comprehensive guide to implementing Clean Architecture in your Android projects for better scalability and maintainability.",
    date: "2023-06-22",
    readTime: "15 min read",
    tags: ["Clean Architecture", "Android", "Kotlin"],
  },
  {
    title: "Optimizing App Performance with Kotlin Coroutines",
    description: "Learn how to leverage Kotlin Coroutines to improve your app's performance and responsiveness.",
    date: "2023-07-10",
    readTime: "12 min read",
    tags: ["Kotlin", "Coroutines", "Performance"],
  },
]

export default function Blog() {
  return (
    <div className="space-y-12">
      <h2 className="text-3xl font-bold text-center mb-8">My Blog</h2>
      {blogPosts.map((post, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-600 mb-4">{post.description}</p>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}