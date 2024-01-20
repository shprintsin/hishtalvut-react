import styles from './AboutBlock.module.css';
import React from 'react';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import { json } from 'react-router-dom';

// The markdown content from your file
const markdownContent = `---
page: "about us"
description: "about us"
blocks:
  - title: "Members"
    members:
      - name: "david"
        role: "founder"
        description: "student"
        image: "/images/david.jpg"
      - name: "israel"
        role: "user"
        description: "smrat"
        image: "/p.png"
  - title: "Contributers"
    members:
      - name: "Moses"
        role: "Contributer"
        description: "student"
        image: "/images/david.jpg"
      - name: "Isaac"
        role: "Contributer"
        description: "open source"
        image: "/p.png"
`;

export const SmarkDown = () => {
  const { data, content } = matter(markdownContent);
  console.log(matter(markdownContent)['data']);
  return (
    <div>
        {JSON.stringify(data)}
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export const MemberComponent = ({ name, role, description, avatarUrl }) => {
    return (
        <div className={styles.member}>
            <img src={avatarUrl} alt="Avatar" />
            <h2>{name}</h2>
            <p>{role}</p>
            <p className={styles.description}>
                {description}
            </p>
        </div>
    );
};
