import Image from 'next/image'
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "ChatBot Application",
    description: "AI-powered conversational assistant using Gemini AI",
    image: "/placeholder.svg?height=200&width=300",
    features: [
      "Real-Time AI Interactions using Gemini SDK",
      "Intuitive UI with Jetpack Compose and Material Theming",
      "Efficient state management with Kotlin Flows",
    ],
    technologies: ["Kotlin", "Jetpack Compose", "Gemini SDK", "Coroutines", "Material Design"],
    github: "https://github.com/Versus04/ChatBot",
    liveDemo: "#",
  },
  {
    title: "Music Player App",
    description: "Feature-rich audio playback application with online and offline capabilities",
    image: "/placeholder.svg?height=200&width=300",
    features: [
      "Music Streaming with Retrofit API integration",
      "Local Storage using Room for offline playback",
      "High-quality playback with ExoPlayer",
      "Clean Architecture for scalability and maintainability",
    ],
    technologies: ["Kotlin", "Jetpack Compose", "Retrofit", "Room", "ExoPlayer", "Clean Architecture"],
    github: "https://github.com/Versus04/musify",
    liveDemo: "#",
  },
  {
    title: "Weather Application",
    description: "Real-time weather updates with a minimal and sleek UI developed using Jetpack Compose",
    image: "/placeholder.svg?height=200&width=300",
    features: [
      "Real-Time Weather Updates using free weather API",
      "MVVM Architecture for separation of concerns",
      "Responsive and adaptive UI with Jetpack Compose",
      "Efficient network calls with Retrofit",
    ],
    technologies: ["Kotlin", "Jetpack Compose", "MVVM", "Retrofit"],
    github: "https://github.com/Versus04/Weather-App", // Replace with your actual GitHub repo URL
    liveDemo: "#", // Replace with your demo link if available, or remove if not applicable
  },
]

export default function Projects() {
  return (
    <div className="space-y-12">
      <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <Image
                className="h-48 w-full object-cover md:w-48"
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{project.title}</div>
              <p className="mt-2 text-gray-500">{project.description}</p>
              <div className="mt-4">
                <h4 className="text-lg font-semibold">Features:</h4>
                <ul className="list-disc list-inside">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <h4 className="text-lg font-semibold">Technologies:</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex space-x-4">
                <Button asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                </Button>
                <Button asChild variant="outline">
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}