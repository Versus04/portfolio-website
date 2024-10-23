import { motion } from 'framer-motion'

const blogPosts = [
  {
    title: "Getting Started with Jetpack Compose: A Beginner's Guide",
    description: "Discover how to build modern Android UIs with Jetpack Compose. This comprehensive guide walks through the basics of declarative UI development, state management, and best practices for creating beautiful Android applications.",
    date: "October 23, 2024",
    tags: ["Android", "Jetpack Compose", "UI Development", "Kotlin", "Mobile Development"],
    content: `# Getting Started with Jetpack Compose: A Beginner's Guide

Tired of wrestling with XML layouts and complex UI hierarchies? You're not alone. Android developers have long dreamed of a simpler way to create beautiful, responsive user interfaces. That's exactly what Jetpack Compose delivers – and by the end of this guide, you'll be building modern Android UIs with confidence.

## What is Jetpack Compose?

Jetpack Compose is Android's modern UI toolkit that simplifies and accelerates UI development. 

Think of it as a fresh approach to building user interfaces. Instead of manually manipulating UI elements (like the old days of XML layouts), you describe what you want your UI to look like, and Compose handles the rest. It's like the difference between giving someone step-by-step directions versus showing them a picture of where you want to go.

[... rest of the content ...]`,
    readTime: "8 min read",
    author: "Your Name"
  }
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
              <span>By {post.author}</span>
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
