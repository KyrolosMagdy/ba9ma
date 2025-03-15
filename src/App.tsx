"use client";

import { useState, useEffect } from "react";
import "./App.css";
import type { Topic } from "./Topic";
import { getRandomTopic } from "./topicsSelector.utils";
import TopicModal from "./topicModal";

function App() {
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectRandomTopic = () => {
    const topic = getRandomTopic();
    setSelectedTopic(topic);
    setIsButtonDisabled(true);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Add event listener for escape key to close modal
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isModalOpen) {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleEscKey);

    // Clean up event listener
    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, [isModalOpen]);

  return (
    <div className="container">
      <div className="image-container">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ba9maLogo.jpg-Tac5qNV2pjMkXvqclEGhYaptBlVlA6.jpeg"
          alt="AI Concept Art"
          className="main-image"
        />
      </div>

      <div className="content">
        <button
          onClick={selectRandomTopic}
          className={`generate-btn ${isButtonDisabled ? "disabled" : ""}`}
          disabled={isButtonDisabled}
        >
          {isButtonDisabled ? "تم اختيار الموضوع" : "اختر موضوعًا عشوائيًا"}
        </button>
      </div>

      {selectedTopic && (
        <TopicModal
          topic={selectedTopic}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default App;
