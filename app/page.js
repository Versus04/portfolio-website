'use client'
import Image from 'next/image';

import { GithubIcon, LinkedinIcon, TwitterIcon, MailIcon } from 'lucide-react'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpenIcon, HomeIcon, CodeIcon, MenuIcon, XIcon } from 'lucide-react'
import Projects from './projects'
import Blog from './blog'
import { motion, AnimatePresence } from 'framer-motion'

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('home')

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="min-h-screen bg-white text-black">
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="border-b border-gray-200"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-2xl font-bold"
          >
            Android Dev
          </motion.h1>
          <nav className="hidden md:flex space-x-4">
            {['home', 'projects', 'blog'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * (index + 1), duration: 0.5 }}
              >
                <Button
                  variant="ghost"
                  className="text-black hover:text-gray-700"
                  onClick={() => setActiveTab(item)}
                >
                  {item === 'home' && <HomeIcon className="mr-2 h-4 w-4" />}
                  {item === 'projects' && <CodeIcon className="mr-2 h-4 w-4" />}
                  {item === 'blog' && <BookOpenIcon className="mr-2 h-4 w-4" />}
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Button>
              </motion.div>
            ))}
          </nav>
          <Button variant="ghost" className="md:hidden text-black" onClick={toggleMenu}>
            {isMenuOpen ? <XIcon /> : <MenuIcon />}
          </Button>
        </div>
      </motion.header>
      
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-100 overflow-hidden"
          >
            <nav className="flex flex-col items-center space-y-2 py-2">
              {['home', 'projects', 'blog'].map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  className="text-black hover:text-gray-700"
                  onClick={() => {
                    setActiveTab(item)
                    toggleMenu()
                  }}
                >
                  {item === 'home' && <HomeIcon className="mr-2 h-4 w-4" />}
                  {item === 'projects' && <CodeIcon className="mr-2 h-4 w-4" />}
                  {item === 'blog' && <BookOpenIcon className="mr-2 h-4 w-4" />}
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="hidden">
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="blog">Blog</TabsTrigger>
          </TabsList>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TabsContent value="home">
                <div className="max-w-2xl mx-auto text-center">
                  <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-4xl font-bold mb-4"
                  >
                    Welcome to My Portfolio
                  </motion.h2>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-xl mb-8"
                  >
                    Android Developer | Kotlin Enthusiast | UI/UX Aficionado
                  </motion.p>
                  <motion.div

                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="aspect-video mb-8"
                  >
                    <Image
                      alt="Miyamoto Musashi"
                      src="/miyamotohome.jpg"
                      width={600}
                      height={400}
                      className="rounded-lg object-cover w-full h-full"
                    />

                  </motion.div>
                  <motion.p
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 0.5, duration: 0.5 }}
  className="text-gray-600"
>
  Crafting elegant Android applications with the precision of a samurais blade and the simplicity of Zen philosophy.
</motion.p>
                </div>
              </TabsContent>
              <TabsContent value="projects">
                <Projects />
              </TabsContent>
              <TabsContent value="blog">
                <Blog />
              </TabsContent>
            </motion.div>
          </AnimatePresence>
        </Tabs>
      </main>
      <motion.footer
  initial={{ y: 50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5 }}
  className="border-t border-gray-200 mt-12 py-8 text-center text-gray-600"
>
  <div className="container mx-auto px-4">
    <div className="flex justify-center space-x-6 mb-4">
      <a href="https://github.com/Versus04" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
        <GithubIcon className="h-6 w-6" />
      </a>
      <a href="www.linkedin.com/in/shubham-bind-607404248" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
        <LinkedinIcon className="h-6 w-6" />
      </a>
      <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
        <TwitterIcon className="h-6 w-6" />
      </a>
    </div>
    <p className="mb-2">
   
    &copy; {new Date().getFullYear()} Your Name. All rights reserved.
    </p>
    <p className="text-sm">
      Crafting elegant Android applications with passion and precision.
    </p>
    <div className="mt-4">
      <a
        href="mailto:your.email@example.com"
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <MailIcon className="h-4 w-4 mr-2" />
        Contact Me
      </a>
    </div>
  </div>
</motion.footer>
    </div>
  )
}