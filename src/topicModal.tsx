"use client";

import type React from "react";
import { useRef, useEffect } from "react";
import type { Topic } from "./Topic";
import "./topicModal.styles.css";

interface TopicModalProps {
  topic: Topic;
  isOpen: boolean;
  onClose: () => void;
}

const TopicModal: React.FC<TopicModalProps> = ({ topic, isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Focus trap inside modal
  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        <button className="close-button" onClick={onClose}>
          ×
        </button>

        <div className="topic-content">
          <h2 className="topic-title">{topic.title}</h2>
          <p className="topic-description">{topic.description}</p>
          <p className="topic-source">{topic.source}</p>
        </div>
      </div>
    </div>
  );
};

export default TopicModal;
