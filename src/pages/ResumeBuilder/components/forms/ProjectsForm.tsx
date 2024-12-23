import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X } from 'lucide-react';
import { Project } from '../../types';
import FormSection from './shared/FormSection';
import FormInput from './shared/FormInput';
import FormTextArea from './shared/FormTextArea';

interface ProjectsFormProps {
  projects: Project[];
  onChange: (projects: Project[]) => void;
}

export default function ProjectsForm({ projects, onChange }: ProjectsFormProps) {
  const [isAdding, setIsAdding] = useState(false);

  const addProject = (newProject: Project) => {
    onChange([...projects, { ...newProject, id: crypto.randomUUID() }]);
    setIsAdding(false);
  };

  const removeProject = (id: string) => {
    onChange(projects.filter(project => project.id !== id));
  };

  const updateProject = (id: string, updates: Partial<Project>) => {
    onChange(projects.map(project => 
      project.id === id ? { ...project, ...updates } : project
    ));
  };

  const handleTechnologiesChange = (id: string, value: string) => {
    const technologies = value.split(',').map(tech => tech.trim()).filter(Boolean);
    updateProject(id, { technologies });
  };

  return (
    <FormSection
      title="Projects"
      description="Add notable projects that showcase your skills and achievements."
    >
      <div className="space-y-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="relative p-4 border border-gray-200 rounded-lg"
          >
            <button
              onClick={() => removeProject(project.id)}
              className="absolute top-4 right-4 p-1 text-gray-400 hover:text-red-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="space-y-4">
              <FormInput
                label="Project Name"
                name="name"
                value={project.name}
                onChange={(e) => updateProject(project.id, { name: e.target.value })}
                placeholder="My Awesome Project"
              />
              <FormTextArea
                label="Description"
                name="description"
                value={project.description}
                onChange={(e) => updateProject(project.id, { description: e.target.value })}
                placeholder="Describe your project, its impact, and your role..."
              />
              <FormInput
                label="Technologies Used"
                name="technologies"
                value={project.technologies.join(', ')}
                onChange={(e) => handleTechnologiesChange(project.id, e.target.value)}
                placeholder="React, Node.js, TypeScript (comma-separated)"
              />
              <FormInput
                label="Project Link"
                name="link"
                value={project.link}
                onChange={(e) => updateProject(project.id, { link: e.target.value })}
                placeholder="https://github.com/username/project"
              />
            </div>
          </motion.div>
        ))}

        <AnimatePresence>
          {isAdding && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="p-4 border border-gray-200 rounded-lg"
            >
              <ProjectsForm
                projects={[]}
                onChange={(newProjects) => {
                  if (newProjects.length > 0) {
                    addProject(newProjects[0]);
                  }
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setIsAdding(true)}
          className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add Project
        </motion.button>
      </div>
    </FormSection>
  );
}