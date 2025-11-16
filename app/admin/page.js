'use client';

import { useState } from 'react';
import AdminAboutView from '@/components/admin-view/about';
import AdminContactView from '@/components/admin-view/contact';
import AdminEducationView from '@/components/admin-view/education';
import AdminExperienceView from '@/components/admin-view/experience';
import AdminHomeView from '@/components/admin-view/home';
import AdminProjectView from '@/components/admin-view/project';

const initialHomeFormData = { heading: '', summary: '' };
const initialAboutFormData = { aboutme: '', noofprojects: '', yearofexperience: '', noofclients: '', skills: '' };
const initialExperienceFormData = { position: '', company: '', duration: '', location: '', jobprofile: '' };
const initialEducationFormData = { degree: '', year: '', college: '' };
const initialProjectFormData = { name: '', website: '', technologies: '', github: '' };

export default function AdminView() {
  const [currentSelectedTab, setCurrentSelectedTab] = useState('home');
  const [homeViewFormData, setHomeViewFormData] = useState(initialHomeFormData);
  const [aboutViewFormData, setAboutViewFormData] = useState(initialAboutFormData);
  const [experienceViewFormData, setExperienceViewFormData] = useState(initialExperienceFormData);
  const [educationViewFormData, setEducationViewFormData] = useState(initialEducationFormData);
  const [projectViewFormData, setProjectViewFormData] = useState(initialProjectFormData);
  const [allData, setAllData] = useState({});

  function handleSaveData(section) {
    const dataMap = {
      home: homeViewFormData,
      about: aboutViewFormData,
      education: educationViewFormData,
      experience: experienceViewFormData,
      project: projectViewFormData,
    };

    const newEntry = dataMap[section];
    setAllData((prev) => ({
      ...prev,
      [section]: [...(prev[section] || []), newEntry],
    }));

    resetFormDatas();
  }

  function resetFormDatas() {
    setHomeViewFormData(initialHomeFormData);
    setAboutViewFormData(initialAboutFormData);
    setExperienceViewFormData(initialExperienceFormData);
    setEducationViewFormData(initialEducationFormData);
    setProjectViewFormData(initialProjectFormData);
  }

  const menuItems = [
    {
      id: 'home',
      label: 'Home',
      component: (
        <AdminHomeView
          formData={homeViewFormData}
          setFormData={setHomeViewFormData}
          handleSaveData={() => handleSaveData('home')}
        />
      ),
    },
    {
      id: 'about',
      label: 'About',
      component: (
        <AdminAboutView
          formData={aboutViewFormData}
          setFormData={setAboutViewFormData}
          handleSaveData={() => handleSaveData('about')}
        />
      ),
    },
    {
      id: 'experience',
      label: 'Experience',
      component: (
        <AdminExperienceView
          formData={experienceViewFormData}
          setFormData={setExperienceViewFormData}
          handleSaveData={() => handleSaveData('experience')}
          data={allData.experience}
        />
      ),
    },
    {
      id: 'education',
      label: 'Education',
      component: (
        <AdminEducationView
          formData={educationViewFormData}
          setFormData={setEducationViewFormData}
          handleSaveData={() => handleSaveData('education')}
          data={allData.education}
        />
      ),
    },
    {
      id: 'project',
      label: 'Project',
      component: (
        <AdminProjectView
          formData={projectViewFormData}
          setFormData={setProjectViewFormData}
          handleSaveData={() => handleSaveData('project')}
          data={allData.project}
        />
      ),
    },
    {
      id: 'contact',
      label: 'Contact',
      component: <AdminContactView data={allData.contact} />,
    },
  ];

  return (
    <div className="border-b border-gray-200">
      <nav className="-mb-0.5 flex justify-center space-x-6" role="tablist">
        {menuItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className="p-4 font-bold text-xl text-black"
            onClick={() => {
              setCurrentSelectedTab(item.id);
              resetFormDatas();
            }}
          >
            {item.label}
          </button>
        ))}
      </nav>
      <div className="mt-10 p-10">
        {menuItems.find((item) => item.id === currentSelectedTab)?.component}
      </div>
    </div>
  );
}