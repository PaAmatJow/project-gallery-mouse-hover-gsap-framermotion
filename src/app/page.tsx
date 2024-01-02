'use client'

import Modal from '@/components/modal/Modal';
import Project from '@/components/project/Project';
import {useState} from 'react'

export default function Home() {
  const projects = [
		{
			title: 'C2 Montreal',
			src: 'c2montreal.png',
			color: '#000000',
		},
		{
			title: 'Office Studio',
			src: 'officestudio.png',
			color: '#8C8C8C',
		},
		{
			title: 'Locomotive',
			src: 'locomotive.png',
			color: '#EFE8D3',
		},
		{
			title: 'Silencio',
			src: 'silencio.png',
			color: '#706D63',
		},
	];

  const [modal, setModal] = useState({active: false, index: 0})

  return (
    <main className="flex h-screen items-center justify-center">
      <div className="flex w-[1000px] flex-col items-center justify-center">
        {projects.map((project, index) => {
          return <Project key={index} index={index} title={project.title} setModal={setModal} />
        })}
      </div>
      <Modal modal={modal} projects={projects} />
    </main>
  )
}
